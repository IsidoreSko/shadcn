import { ComponentPropsWithoutRef } from "react";
export type InputProps = ComponentPropsWithoutRef<"input">;
import { cn } from "../cn";

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn(
        "px-4 py-2 bg-background focus:outline-none focus:border-foreground placeholder:text-foreground/50 border border-border rounded-md text-foreground",
        className
      )}
    />
  );
};

export default Input;
