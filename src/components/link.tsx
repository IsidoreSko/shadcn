import { ComponentPropsWithoutRef } from "react";

const Link = ({
  isCurrent,
  className,
  ...props
}: ComponentPropsWithoutRef<"a"> & { isCurrent?: boolean }) => {
  const cn =
    "text-sm transition hover:text-foreground" +
    " " +
    className +
    " " +
    (isCurrent ? "text-foreground" : "text-muted-foreground");
  return <a href="#" {...props} className={cn}></a>;
};

export default Link;
