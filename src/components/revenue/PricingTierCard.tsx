"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { pricingTierData } from "@/lib/mockData";

export function PricingTierCard() {
  const total = pricingTierData[0].Free + pricingTierData[0].Pro + pricingTierData[0].Enterprise;

  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-zinc-400 text-sm font-medium mb-1">Pricing Tier Distribution</h2>
        <span className="text-xl font-semibold text-white">
          {total.toLocaleString()} Total Users
        </span>
      </div>

      <div className="flex-1 min-h-[120px] max-h-[160px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height={100}>
          <BarChart
            data={pricingTierData}
            layout="vertical"
            margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" hide />
            <Tooltip
              cursor={{ fill: "transparent" }}
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #ffffff1a",
                borderRadius: "0.5rem",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any, name: any) => {
                if (value === undefined || value === null) return ["", String(name)];
                return [Number(value).toLocaleString(), String(name)];
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: "12px", paddingTop: "20px" }}
              iconType="circle"
            />
            <Bar dataKey="Free" stackId="a" fill="#3f3f46" radius={[4, 0, 0, 4]} barSize={32} />
            <Bar dataKey="Pro" stackId="a" fill="#3b82f6" barSize={32} />
            <Bar dataKey="Enterprise" stackId="a" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={32} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
