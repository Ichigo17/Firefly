import { DashboardStats } from "@/components/DashboardStats";
import { SalesChart } from "@/components/SalesChart";
import { ChannelBreakdown } from "@/components/ChannelBreakdown";
import { QuickActions } from "@/components/QuickActions";
import { RecentActivity } from "@/components/RecentActivity";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your Firefly Energy distribution performance
        </p>
      </div>
      <DashboardStats />
      <QuickActions />
      <div className="grid gap-6 md:grid-cols-2">
        <SalesChart />
        <ChannelBreakdown />
      </div>
      <RecentActivity />
    </div>
  );
}
