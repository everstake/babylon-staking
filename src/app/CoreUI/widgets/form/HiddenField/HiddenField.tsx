import { FormControl } from "@/app/CoreUI/components/Form";
import { useField } from "@/app/CoreUI/widgets/form/hooks";
import { FieldProps } from "@/app/CoreUI/widgets/form/types";

export interface HiddenFieldProps extends FieldProps {
  displayError?: boolean;
}

export function HiddenField({
  displayError = false,
  ...props
}: HiddenFieldProps) {
  const { error, value, onChange, onBlur, disabled, name, ref } =
    useField(props);

  const input = (
    <input
      ref={ref}
      type="hidden"
      name={name}
      disabled={disabled}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );

  if (displayError) {
    const fieldState = displayError ? "error" : "default";
    const fieldHint = displayError ? error : "";

    return (
      <FormControl hint={fieldHint} state={fieldState}>
        {input}
      </FormControl>
    );
  }

  return input;
}
