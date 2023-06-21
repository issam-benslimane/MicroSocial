import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";
import Spinner from "./Spinner";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  loading?: boolean;
};

const variants = {
  primary: "text-white bg-blue-500 hover:bg-blue-700 px-3 py-2",
  secondary: "text-blue-500 bg-blue-500 hover:underline",
  terniary: "text-slate-300 hover:text-white",
};

const Button = ({
  className,
  variant,
  loading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2 justify-center rounded-md transition-all",
        variant && variants[variant],
        className
      )}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
