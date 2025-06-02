import { yupResolver } from "@hookform/resolvers/yup";
import { HTMLProps, useEffect, type PropsWithChildren } from "react";
import {
  FormProvider,
  Resolver,
  useForm,
  type DeepPartial,
  type DefaultValues,
  type Mode,
  type SubmitHandler,
} from "react-hook-form";
import { twJoin } from "tailwind-merge";
import { type ObjectSchema } from "yup";

export interface FormProps<V extends object> extends PropsWithChildren {
  className?: string;
  name?: string;
  mode?: Mode;
  reValidateMode?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: DefaultValues<V>;
  schema?: ObjectSchema<V>;
  formProps?: HTMLProps<HTMLFormElement>;
  onSubmit?: SubmitHandler<V>;
  onChange?: (data: DeepPartial<V>) => void;
}

export function Form<V extends object>({
  className,
  name,
  children,
  mode = "onBlur",
  reValidateMode = "onBlur",
  defaultValues,
  schema,
  formProps,
  onSubmit = () => null,
  onChange,
}: FormProps<V>) {
  const methods = useForm({
    mode,
    reValidateMode,
    defaultValues,
    resolver: schema
      ? (yupResolver(schema) as unknown as Resolver<V>)
      : undefined,
  });

  useEffect(() => {
    if (!onChange) return;

    const { unsubscribe } = methods.watch(onChange);

    return unsubscribe;
  }, [onChange, methods.watch]);

  return (
    <FormProvider {...methods}>
      <form
        className={twJoin("bbn-form", className)}
        name={name}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...formProps}
      >
        {children}
      </form>
    </FormProvider>
  );
}
