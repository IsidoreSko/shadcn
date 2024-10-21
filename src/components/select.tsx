import { ChevronsUpDown, Circle } from "lucide-react";

const Select = () => {
  return (
    <div className="flex items-center rounded-lg border border-border p-2">
      <Circle />
      <span className="ml-7 mr-9">Alicia Koch</span>
      <ChevronsUpDown className="size-5" />
    </div>
  );
};

export default Select;
