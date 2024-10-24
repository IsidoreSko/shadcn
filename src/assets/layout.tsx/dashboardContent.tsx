import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, CreditCard, DollarSign, User } from "lucide-react";
import Avatar from "../../components/avatar";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../../components/card";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-01-01", value: 6000 },
  { date: "2024-02-01", value: 500 },
  { date: "2024-03-01", value: 6000 },
  { date: "2024-04-01", value: 5500 },
  { date: "2024-05-01", value: 4000 },
  { date: "2024-06-01", value: 1000 },
  { date: "2024-07-01", value: 3000 },
  { date: "2024-08-01", value: 5000 },
  { date: "2024-09-01", value: 5000 },
  { date: "2024-10-01", value: 4500 },
  { date: "2024-11-01", value: 2500 },
  { date: "2024-12-01", value: 5000 },
];

const chartConfig = {
  value: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const DashboardContent = () => {
  return (
    <main className="flex flex-col gap-6 px-2 m-auto mt-8 max-w-8xl lg:mt-10 lg:gap-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <Card>
          <CardHeader className="relative">
            <p className="text-lg font-medium">Total Revenue</p>
            <DollarSign className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-3xl font-bold">$45,231.89</p>
            <p className="text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="relative">
            <p className="text-lg font-medium">Subscribers</p>
            <User className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-3xl font-bold">23,568</p>
            <p className="text-muted-foreground">+18.6% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="relative">
            <p className="text-lg font-medium">Sales</p>
            <CreditCard className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-3xl font-bold">12,234</p>
            <p className="text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="relative">
            <p className="text-lg font-medium">Active now</p>
            <Activity className="absolute right-4 top-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="text-3xl font-bold">573</p>
            <p className="text-muted-foreground">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-6 lg:gap-8 lg:flex-row">
        <Card className="lg:flex-[2]">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="min-h-[200px] w-full"
            >
              <BarChart accessibilityLayer data={chartData}>
                <ChartTooltip content={<ChartTooltipContent />} />

                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    const monthName = new Intl.DateTimeFormat("en-US", {
                      month: "short",
                    }).format(date);
                    return monthName;
                  }}
                />
                <YAxis
                  dataKey="value"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => {
                    return new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                    }).format(value);
                  }}
                />

                <ChartLegend content={<ChartLegendContent />} />
                <CartesianGrid vertical={false} />
                <Bar dataKey="value" fill="var(--color-value)" radius={4} />
              </BarChart>
            </ChartContainer>
            {/* <div className="h-64" /> */}
          </CardContent>
        </Card>
        <Card className="lg:flex-[1]">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <p className="text-sm text-muted-foreground">
              You made 265 sales this month.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <SalesLine name="Melvyn" email="melvyn@gmail.com" amount={1200} />
            <SalesLine name="Alex" email="alex123@example.com" amount={850} />
            <SalesLine
              name="Taylor"
              email="taylor456@example.com"
              amount={2200}
            />
            <SalesLine
              name="Jordan"
              email="jordan789@example.com"
              amount={1500}
            />
            <SalesLine
              name="Morgan"
              email="morgan321@example.com"
              amount={1350}
            />
            <SalesLine name="Casey" email="casey654@example.com" amount={910} />
            <SalesLine
              name="Riley"
              email="riley987@example.com"
              amount={1080}
            />
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

const SalesLine = ({
  name,
  email,
  amount,
}: {
  name: string;
  email: string;
  amount: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar />
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <p className="ml-auto text-lg font-bold">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 0,
        }).format(amount)}
      </p>
    </div>
  );
};
