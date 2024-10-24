import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground shadow border border-transparent",
  {
    variants: {
      variant: {
        default: "text-foreground bg-primary hover:bg-primary/90",
        ghost: "hover:bg-accent",
        outline: "border-border hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

// type Variant = "default" | "ghost" | "outline";
// type Size = "default" | "sm" | "lg";

export const Button = ({
  variant = "default",
  size = "default",
  className,
  ...props
}: ComponentPropsWithoutRef<"button"> & ButtonVariants) => {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      // className={cn(
      //   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 text-primary-foreground shadow border border-transparent",
      //   {
      //     "text-foreground bg-primary hover:bg-primary/90":
      //       variant === "default",
      //     "hover:bg-accent": variant === "ghost",
      //     "border-border hover:bg-accent": variant === "outline",
      //   },
      // {
      //   "h-10 px-4 py-2": size === "default",
      //   "h-9 rounded-md px-3": size === "sm",
      //   "h-11 rounded-md px-8": size === "lg",
      // },

      {...props}
    >
      {props.children}
    </button>
  );
};
