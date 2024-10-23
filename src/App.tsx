import { DashboardContent } from "./assets/layout.tsx/dashboardContent.tsx";
import { DashboardContentHeader } from "./assets/layout.tsx/dashboardContentHearder.tsx";
import Header from "./assets/layout.tsx/header.tsx";

export const App = () => {
  return (
    <div className="min-h-full dark bg-background text-foreground">
      <Header />
      <DashboardContentHeader />
      <DashboardContent />
    </div>
  );
};
