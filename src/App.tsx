import { DashboardContent } from "./assets/layout.tsx/dashboardContent.tsx";
import { DashboardContentHeader } from "./assets/layout.tsx/dashboardContentHearder.tsx";
import Header from "./assets/layout.tsx/header.tsx";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
// import { Button } from "./components/button.tsx";

export const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-full bg-background text-foreground">
        {/* <div className="flex gap-4 p-8 mx-auto">
        <Button variant="default" size="sm">
          Default
        </Button>
        <Button variant="default">Default</Button>
        <Button variant="default" size="lg">
          Default
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
      </div> */}

        <Header />
        <DashboardContentHeader />
        <DashboardContent />
      </div>
    </ThemeProvider>
  );
};
