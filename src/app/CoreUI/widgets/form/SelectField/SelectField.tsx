import { ReactNode } from "react";

import { FormControl, Select, type Option } from "@/app/CoreUI/components/Form";
import { useField } from "@/app/CoreUI/widgets/form/hooks";
import type { FieldProps } from "@/app/CoreUI/widgets/form/types";

export interface SelectFieldProps extends FieldProps {
  open?: boolean;
  defaultOpen?: boolean;
  options: Option[];
  optionClassName?: string;
  popoverClassName?: string;
  onOpen?: () => void;
  onClose?: () => void;
  renderSelectedOption?: (option: Option) => ReactNode;
}

export function SelectField({
  open,
  defaultOpen,
  options,
  optionClassName,
  popoverClassName,
  name,
  id = name,
  label,
  hint,
  className,
  controlClassName,
  disabled,
  autoFocus,
  defaultValue,
  placeholder,
  shouldUnregister,
  state,
  validateOnMount,
  onOpen,
  onClose,
  renderSelectedOption,
}: SelectFieldProps) {
  const {
    ref,
    value = "",
    error,
    invalid,
    onChange,
    onBlur,
  } = useField({
    name,
    defaultValue,
    autoFocus,
    shouldUnregister,
    validateOnMount,
  });

  const fieldState = invalid ? "error" : state;
  const fieldHint = invalid ? error : hint;

  const handleClose = () => {
    onBlur?.();
    onClose?.();
  };

  return (
    <FormControl
      label={label}
      className={controlClassName}
      state={fieldState}
      hint={fieldHint}
    >
      <Select
        open={open}
        defaultOpen={defaultOpen}
        options={options}
        ref={ref}
        value={value}
        id={id}
        name={name}
        className={className}
        disabled={disabled}
        placeholder={placeholder}
        state={fieldState}
        optionClassName={optionClassName}
        popoverClassName={popoverClassName}
        onSelect={onChange}
        onBlur={onBlur}
        onOpen={onOpen}
        onClose={handleClose}
        renderSelectedOption={renderSelectedOption}
      />
    </FormControl>
  );
}
