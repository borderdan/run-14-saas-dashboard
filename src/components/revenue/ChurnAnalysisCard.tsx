"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";
import { churnData } from "@/lib/mockData";

export function ChurnAnalysisCard() {
  const currentChurn = churnData[11].rate;

  return (
    <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-zinc-400 text-sm font-medium mb-1">Churn Analysis</h2>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-white">{currentChurn}%</span>
          <span className="text-sm font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
            -0.8%
          </span>
        </div>
      </div>

      <div className="flex-1 min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={churnData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
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
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#18181b",
                border: "1px solid #ffffff1a",
                borderRadius: "0.5rem",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => {
                if (value === undefined || value === null) return ["", "Churn Rate"];
                return [`${value}%`, "Churn Rate"];
              }}
              labelStyle={{ color: "#a1a1aa", marginBottom: "4px" }}
            />
            <Line
              type="monotone"
              dataKey="rate"
              stroke="#ef4444" // red-500
              strokeWidth={3}
              dot={{ r: 4, fill: "#ef4444", strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />

            {churnData.map((dataPoint) => {
              if (dataPoint.event) {
                return (
                  <ReferenceDot
                    key={dataPoint.month}
                    x={dataPoint.month}
                    y={dataPoint.rate}
                    r={6}
                    fill="#18181b"
                    stroke="#ef4444"
                    strokeWidth={2}
                    label={{
                      position: "top",
                      value: dataPoint.event,
                      fill: "#a1a1aa",
                      fontSize: 10,
                      dy: -10,
                    }}
                  />
                );
              }
              return null;
            })}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
