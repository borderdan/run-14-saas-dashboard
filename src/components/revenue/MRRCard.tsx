"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { mrrData } from "@/lib/mockData";

export function MRRCard() {
  const currentMRR = mrrData[8].mrr; // Sept MRR
  const formattedMRR = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(currentMRR || 0);

  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col h-full">
      <div className="mb-6">
        <h2 className="text-zinc-400 text-sm font-medium mb-1">Monthly Recurring Revenue</h2>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-white">{formattedMRR}</span>
          <span className="text-sm font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
            +12.5%
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mrrData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff15" vertical={false} />
            <XAxis
              dataKey="month"
              stroke="#a1a1aa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis
              stroke="#a1a1aa"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b", // zinc-900
                border: "1px solid #ffffff1a", // white/10
                borderRadius: "0.5rem",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => {
                if (value === undefined || value === null) return ["", "MRR"];
                return [`$${Number(value).toLocaleString()}`, "MRR"];
              }}
            />
            <Line
              type="monotone"
              dataKey="mrr"
              stroke="#3b82f6" // blue-500
              strokeWidth={3}
              dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#3b82f6" // blue-500
              strokeWidth={3}
              strokeDasharray="5 5"
              dot={{ r: 4, fill: "#3b82f6", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
