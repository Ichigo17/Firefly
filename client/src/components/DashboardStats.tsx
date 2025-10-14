import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDown, ArrowUp, Battery, DollarSign, Target, TrendingUp } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid={`stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>{value}</div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
          {isPositive ? (
            <ArrowUp className="h-3 w-3 text-chart-2" />
          ) : (
            <ArrowDown className="h-3 w-3 text-destructive" />
          )}
          <span className={isPositive ? "text-chart-2" : "text-destructive"}>
            {Math.abs(change)}%
          </span>
          <span>from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardStats() {
  const stats = [
    {
      title: "Monthly Placements",
      value: "342",
      change: 23,
      icon: <Battery className="h-4 w-4" />,
    },
    {
      title: "Goal Progress",
      value: "68%",
      change: 12,
      icon: <Target className="h-4 w-4" />,
    },
    {
      title: "Revenue",
      value: "$95,840",
      change: 18,
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      title: "Active Distributors",
      value: "12",
      change: 33,
      icon: <TrendingUp className="h-4 w-4" />,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}
