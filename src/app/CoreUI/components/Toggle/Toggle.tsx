import { twJoin } from "tailwind-merge";

import { useControlledState } from "@/app/CoreUI/hooks/useControlledState";
import "./Toggle.css";

export interface ToggleProps {
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
  activeIcon?: JSX.Element;
  inactiveIcon?: JSX.Element;
}

export function Toggle(props: ToggleProps) {
  const [value = false, setValue] = useControlledState<boolean>({
    value: props.value,
    defaultValue: props.defaultValue,
    onStateChange: props.onChange,
  });

  return (
    <div className="bbn-es-toggle" onClick={() => void setValue(!value)}>
      <span className="bbn-es-toggle-bg">{props.activeIcon}</span>
      <span
        className={twJoin(
          "bbn-es-toggle-control",
          value && "bbn-es-toggle-control-active",
        )}
      />
      <span className="bbn-es-toggle-bg">{props.inactiveIcon}</span>
    </div>
  );
}
