"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-neutral-950 hover:bg-neutral-700 border border-neutral-500 rounded-sm px-4 h-6 text-foreground text-sm cursor-pointer transition-colors duration-100",
        "focus:outline-none",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
