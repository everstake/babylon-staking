import { type Placement } from "@popperjs/core";
import { useState, type CSSProperties, type PropsWithChildren } from "react";
import { usePopper } from "react-popper";
import { twJoin } from "tailwind-merge";

import { Portal } from "@/app/CoreUI/components/Portal";
import { useClickOutside } from "@/app/CoreUI/hooks/useClickOutside";
import "./Popover.css";

export interface PopoverProps extends PropsWithChildren {
  open?: boolean;
  className?: string;
  placement?: Placement;
  anchorEl?: Element | null;
  offset?: [number, number];
  onClickOutside?: () => void;
  style?: CSSProperties;
}

export function Popover({
  open = false,
  className,
  anchorEl,
  placement = "bottom-start",
  offset = [0, 0],
  children,
  style,
  onClickOutside,
}: PopoverProps) {
  const [tooltipRef, setTooltipRef] = useState<HTMLElement | null>(null);
  const { styles } = usePopper(anchorEl, tooltipRef, {
    placement,
    modifiers: [{ name: "offset", options: { offset } }],
  });

  useClickOutside([tooltipRef, anchorEl], onClickOutside, { enabled: open });

  return (
    <Portal mounted={open}>
      <div
        ref={setTooltipRef}
        style={{ ...styles.popper, ...style }}
        className={twJoin("bbn-popover", className)}
      >
        {children}
      </div>
    </Portal>
  );
}
