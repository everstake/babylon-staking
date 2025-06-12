import { Loader } from "@babylonlabs-io/core-ui";

import { Button } from "@/app/CoreUI/components/Button";

interface ActionComponentProps {
  title: string;
  onAction: () => void;
  awaitingResponse?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export function ActionComponent({
  title,
  onAction,
  awaitingResponse,
  isDisabled,
  className,
}: ActionComponentProps) {
  return (
    <Button
      className={className}
      variant="contained"
      size="small"
      color="secondary"
      onClick={onAction}
      disabled={isDisabled}
      showArrow={false}
    >
      {awaitingResponse ? <Loader size={16} className="text-white" /> : title}
    </Button>
  );
}
