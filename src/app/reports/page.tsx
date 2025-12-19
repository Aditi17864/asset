"use client"

import { Bar, BarChart, CartesianGrid, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { PageLayout } from "@/components/layout/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { reportsData } from "@/lib/data";
import { AssetUtilizationChart, TicketTrendsChart } from "@/components/dashboard/DashboardCharts";

const ticketVolumeConfig = {
    Strategy: { label: "Strategy", color: "hsl(var(--chart-1))" },
    "Digital Transformation": { label: "Digital Transformation", color: "hsl(var(--chart-2))" },
    Operations: { label: "Operations", color: "hsl(var(--chart-3))" },
    "Human Resources": { label: "Human Resources", color: "hsl(var(--chart-4))" },
};

const assetStatusConfig = {
    "In Use": { label: "In Use" },
    "In Stock": { label: "In Stock" },
    "In Repair": { label: "In Repair" },
    Retired: { label: "Retired" },
};

export default function ReportsPage() {
  return (
    <PageLayout title="Reports">
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle>Ticket Volume by Department</CardTitle>
                <CardDescription>Last 6 months</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={ticketVolumeConfig} className="h-[250px] w-full">
                    <BarChart accessibilityLayer data={reportsData.ticketVolumeByDept.labels.map((label, i) => ({ department: label, tickets: reportsData.ticketVolumeByDept.datasets[0].data[i] }))}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="department" tickLine={false} tickMargin={10} axisLine={false} />
                        <YAxis />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="tickets" fill="var(--color-Strategy)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Asset Status Distribution</CardTitle>
                <CardDescription>Current status of all assets</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                <ChartContainer config={assetStatusConfig} className="h-[250px] w-full max-w-[300px]">
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={reportsData.assetStatusDistribution.data} dataKey="value" nameKey="name" />
                        <ChartLegend content={<ChartLegendContent nameKey="name" />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>

        <AssetUtilizationChart />
        <TicketTrendsChart />
      </div>
    </PageLayout>
  );
}
