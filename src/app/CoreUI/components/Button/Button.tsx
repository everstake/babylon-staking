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
      >
        <span className="btn-content">{restProps.children}</span>
        {variant === "contained" && (
          <svg
            className="btn-arrow"
            width="20"
            height="20"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M27.1765 9H0" stroke="#000" strokeWidth="2" />
            <path
              d="M19.7656 1C20.5892 4.08772 23.3891 8.57895 28.0009 8.57895"
              stroke="#000"
              strokeWidth="2"
            />
            <path
              d="M19.7656 17C20.5892 13.9123 23.3891 9.42105 28.0009 9.42105"
              stroke="#000"
              strokeWidth="2"
            />
          </svg>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
