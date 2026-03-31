import type { InputHTMLAttributes } from "react";
import { cn } from "@kkeujeok-kkeujeok/ui/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "bg-neutral-300 min-w-12 px-2 border border-neutral-800 rounded-xs h-6 text-sm text-neutral-900",
        "focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

export default Input;
