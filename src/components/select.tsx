import { ChevronsUpDown } from "lucide-react";
import { PropsWithChildren } from "react";

const Select = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-center p-2 border rounded-md border-border">
      {children}
      <ChevronsUpDown className="size-5" />
    </div>
  );
};

export default Select;
