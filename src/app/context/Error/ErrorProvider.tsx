import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import { ErrorModal } from "@/app/components/Modals/ErrorModal";
import {
  Error as AppError,
  ErrorHandlerParam,
  ErrorType,
} from "@/app/types/errors";

import { ClientError, ServerError } from "./errors";

// Error source identifiers
export const ERROR_SOURCES = {
  ORDINALS: "ORDINALS_ERROR",
};

// Configuration for errors that shouldn't show a modal by default
const SILENT_ERROR_CONFIG = {
  sources: [ERROR_SOURCES.ORDINALS],
};

const ErrorContext = createContext<ErrorContextType>({
  isOpen: false,
  error: {
    message: "",
  },
  modalOptions: {},
  dismissError: () => {},
  handleError: () => {},
});

interface ErrorProviderProps {
  children: ReactNode;
}

type ErrorState = {
  isOpen: boolean;
  error: AppError;
  modalOptions: {
    retryAction?: () => void;
    noCancel?: boolean;
  };
};

export type ErrorContextType = ErrorState & {
  dismissError: () => void;
  handleError: (param: ErrorHandlerParam) => void;
};

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [state, setState] = useState<ErrorState>({
    isOpen: false,
    error: { message: "" },
    modalOptions: {},
  });

  const dismissError = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
    setTimeout(() => {
      setState({ isOpen: false, error: { message: "" }, modalOptions: {} });
    }, 300);
  }, []);

  const handleError = useCallback(
    ({ error, displayOptions, metadata }: ErrorHandlerParam) => {
      if (!error) return;

      // Extract stack trace if available
      const stackTrace = error instanceof Error ? error.stack || "" : "";

      // Get error source from metadata if available
      const paramErrorSource = metadata?.errorSource as string | undefined;
      const clientErrorSource =
        error instanceof ClientError && error.metadata?.errorSource;
      const serverErrorSource =
        error instanceof ServerError && error.metadata?.errorSource;
      const errorSource: string | undefined =
        serverErrorSource || paramErrorSource || clientErrorSource;

      const combinedMetadata = {
        errorSource: errorSource,
        ...metadata,
      };

      // Determine if this error should be silent by default
      const isSilentByDefault =
        // Check if error source is in the silent list
        errorSource &&
        SILENT_ERROR_CONFIG.sources.includes(errorSource as string);

      const shouldShowModal =
        displayOptions?.showModal !== undefined
          ? displayOptions.showModal // Explicit setting takes priority
          : !isSilentByDefault; // Otherwise use the default for this error type

      const errorData = {
        message: error.message,
        trace: stackTrace,
        ...combinedMetadata,
        ...(error instanceof ClientError && {
          displayMessage: error.displayMessage,
          category: error.category,
        }),
        ...(error instanceof ServerError && {
          endpoint: error.endpoint,
          displayMessage: error.displayMessage,
          request: error.request || {},
          response: error.response || {},
        }),
        type:
          "type" in error && error.type !== undefined
            ? error.type
            : ErrorType.UNKNOWN,
      };

      if (shouldShowModal) {
        setState({
          isOpen: true,
          error: errorData,
          modalOptions: {
            retryAction: displayOptions?.retryAction,
            noCancel: displayOptions?.noCancel ?? false,
          },
        });
      }
    },
    [],
  );

  const contextValue = useMemo(
    () => ({
      ...state,
      dismissError,
      handleError,
    }),
    [state, dismissError, handleError],
  );

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
      <ErrorModal />
    </ErrorContext.Provider>
  );
};
export const useError = () => useContext(ErrorContext);
