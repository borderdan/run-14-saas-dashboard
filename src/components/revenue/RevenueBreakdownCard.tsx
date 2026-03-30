"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { revenueBreakdownData } from "@/lib/mockData";

export function RevenueBreakdownCard() {
  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-zinc-400 text-sm font-medium mb-1">Revenue Breakdown</h2>
        <span className="text-xl font-semibold text-white">Trailing 6 Months</span>
      </div>

      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueBreakdownData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#a1a1aa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#a1a1aa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              cursor={{ fill: "#ffffff0a" }}
              contentStyle={{
                backgroundColor: "#18181b", // zinc-900
                border: "1px solid #ffffff1a", // white/10
                borderRadius: "0.5rem",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any, name: any) => {
                if (value === undefined || value === null) return ["", String(name)];
                return [`$${Number(value).toLocaleString()}`, String(name)];
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
              iconType="circle"
            />
            <Bar dataKey="Subscriptions" stackId="a" fill="#3b82f6" radius={[0, 0, 4, 4]} />
            <Bar dataKey="Usage" stackId="a" fill="#22c55e" />
            <Bar dataKey="OneTime" name="One-Time" stackId="a" fill="#f59e0b" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
