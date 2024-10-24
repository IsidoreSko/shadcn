import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
// import { Button } from "../../components/button";
// import Select from "../../components/select";
// import { TabsTrigger, TabsTriggers } from "../../components/TabsTriggers";
import { Typography } from "@/components/ui/typography";

export const DashboardContentHeader = () => {
  return (
    <div className="flex flex-col items-start gap-4 px-2 m-auto mt-8 max-w-8xl">
      <div className="flex items-center w-full gap-4">
        {/* <h1 className="text-4xl font-bold">Dashboard</h1> */}

        <Typography variant="h1">Dashboard</Typography>
        <div className="flex-1" />
        <Button variant={"outline"}>
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>Jan 20, 2023 - Feb 09, 2023</span>
          </div>
        </Button>
        <Button>Download</Button>
      </div>
    </div>
  );
};
