import {
  createContext,
  useCallback,
  useMemo,
  type PropsWithChildren,
} from "react";
import { twJoin } from "tailwind-merge";

import { useControlledState } from "@/app/hooks/coreUI/hooks/useControlledState";
import "./Accordion.css";

interface AccordionContext {
  defaultExpanded?: boolean;
  disabled: boolean;
  expanded: boolean;
  toggle?: () => void;
}

export const Context = createContext<AccordionContext>({
  disabled: false,
  expanded: false,
});

export interface AccordionProps {
  expanded?: boolean;
  defaultExpanded?: boolean;
  onChange?: (expanded: boolean) => void;
  className?: string;
  disabled?: boolean;
}

export function Accordion({
  expanded: isExpanded,
  defaultExpanded,
  onChange,
  className,
  disabled = false,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [expanded = false, setExpanded] = useControlledState({
    value: isExpanded,
    defaultValue: defaultExpanded,
    onStateChange: onChange,
  });

  const handleToggle = useCallback(() => {
    setExpanded(!expanded);
  }, [setExpanded, expanded]);

  const context = useMemo(
    () => ({
      defaultExpanded,
      disabled,
      expanded: expanded && !disabled,
      toggle: !disabled ? handleToggle : undefined,
    }),
    [defaultExpanded, expanded, disabled, handleToggle],
  );

  return (
    <Context.Provider value={context}>
      <div
        className={twJoin(
          "bbn-es-accordion",
          disabled && "bbn-es-accordion-disabled",
          className,
        )}
      >
        {children}
      </div>
    </Context.Provider>
  );
}
