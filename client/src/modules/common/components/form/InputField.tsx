import clsx from "clsx";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldWrapper, FieldWrapperProps } from "./FieldWrapper";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperProps & {
    registration: Partial<UseFormRegisterReturn>;
    error?: string;
  };

export const InputField = ({
  label,
  className,
  type = "text",
  registration,
  error,
  ...props
}: InputFieldProps) => {
  return (
    <FieldWrapper label={label} className={className}>
      <input
        className={clsx(
          "text-slate-600 rounded-md border border-slate-300 px-3 py-1 w-full",
          error && "border border-red-500"
        )}
        type={type}
        {...registration}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </FieldWrapper>
  );
};
