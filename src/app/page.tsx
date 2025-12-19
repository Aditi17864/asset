import { BarChart, Box, Ticket, Wallet } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { StatCard } from "@/components/shared/StatCard";
import { dashboardStats } from "@/lib/data";
import { AssetUtilizationChart, TicketTrendsChart } from "@/components/dashboard/DashboardCharts";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <PageLayout title="Dashboard">
      <div className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Assets"
            value={dashboardStats.totalAssets}
            icon={Box}
            description="All assets in the system"
          />
          <StatCard
            title="Assets in Use"
            value={dashboardStats.assetsInUse}
            icon={Wallet}
            description={`${Math.round((dashboardStats.assetsInUse / dashboardStats.totalAssets) * 100)}% of total assets`}
          />
          <StatCard
            title="Open Tickets"
            value={dashboardStats.openTickets}
            icon={Ticket}
            description="Tickets needing attention"
          />
          <StatCard
            title="Pending Requests"
            value={dashboardStats.pendingRequests}
            icon={BarChart}
            description="New asset requests"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
            <AssetUtilizationChart />
            <TicketTrendsChart />
        </div>

        <RecentActivity />
      </div>
    </PageLayout>
  );
}
