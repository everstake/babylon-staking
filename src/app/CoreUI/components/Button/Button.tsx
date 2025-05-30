import { forwardRef, type DetailedHTMLProps, type HTMLAttributes } from "react";
import { twJoin } from "tailwind-merge";
import "./Button.css";

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    "size"
  > {
  className?: string;
  disabled?: boolean;
  fluid?: boolean;
  variant?: "outlined" | "contained";
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "contained",
      size = "large",
      color = "primary",
      fluid = false,
      className,
      disabled,
      ...restProps
    },
    ref,
  ) => {
    return (
      <button
        {...restProps}
        disabled={disabled}
        ref={ref}
        className={twJoin(
          "bbn-es-btn",
          `bbn-es-btn-${variant}`,
          `bbn-es-btn-${color}`,
          `bbn-es-btn-${size}`,
          fluid && "bbn-es-btn-fluid",
          className,
        )}
      />
    );
  },
);

Button.displayName = "Button";
