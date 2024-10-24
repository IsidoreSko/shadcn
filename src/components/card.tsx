import { ComponentPropsWithoutRef } from "react";
import { cn } from "../cn";

export const Card = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn("rounded-lg border border-border bg-card", props.className)}
      // className={"rounded-lg border border-border bg-card " + props.className}
    >
      {props.children}
    </div>
  );
};

export const CardHeader = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("space-y-1 p-6 pb-2 ", props.className)}>
      {/* <div className={"space-y-1 p-6 pb-2 " + props.className}> */}
      {props.children}
    </div>
  );
};

export const CardContent = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("p-6 pt-0 ", props.className)}>{props.children}</div>
  );
};

export const CardTitle = (props: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className={cn("text-lg font-medium ", props.className)}>
      {props.children}
    </div>
  );
};
