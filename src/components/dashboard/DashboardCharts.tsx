"use client"

import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { assetUtilizationData, ticketTrendsData } from "@/lib/data"

const chartConfig = {
  "In Use": { label: "In Use", color: "hsl(var(--chart-1))" },
  "In Stock": { label: "In Stock", color: "hsl(var(--chart-2))" },
  "Opened": { label: "Opened", color: "hsl(var(--chart-1))" },
  "Resolved": { label: "Resolved", color: "hsl(var(--chart-2))" },
}

export function AssetUtilizationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Utilization</CardTitle>
        <CardDescription>Last 7 Days</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart data={assetUtilizationData.datasets[0].data.map((_, i) => ({
            date: assetUtilizationData.labels[i],
            "In Use": assetUtilizationData.datasets[0].data[i],
            "In Stock": assetUtilizationData.datasets[1].data[i],
          }))}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="In Use" fill="var(--color-In Use)" radius={4} />
            <Bar dataKey="In Stock" fill="var(--color-In Stock)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export function TicketTrendsChart() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Ticket Trends</CardTitle>
          <CardDescription>Last 7 Days</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <LineChart data={ticketTrendsData.datasets[0].data.map((_, i) => ({
                date: ticketTrendsData.labels[i],
                "Opened": ticketTrendsData.datasets[0].data[i],
                "Resolved": ticketTrendsData.datasets[1].data[i],
            }))}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <ChartLegend content={<ChartLegendContent />} />
              <Line type="monotone" dataKey="Opened" stroke="var(--color-Opened)" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Resolved" stroke="var(--color-Resolved)" strokeWidth={2} dot={false} />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
  }
