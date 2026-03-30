"use client";

import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Globe } from "lucide-react";

// Deterministic mock data generator
const generateMockData = (days: number, startValue: number, volatility: number, seed: number) => {
  const data = [];
  let currentValue = startValue;
  // Simple deterministic random function
  const random = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);

    // Generate new value
    const change = (random() - 0.5) * volatility;
    currentValue = Math.max(0, currentValue + change);

    data.push({
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      current: Math.round(currentValue),
      previous: Math.round(currentValue * (0.8 + random() * 0.4)), // Previous period data
    });
  }
  return data;
};

const areaChartData = generateMockData(30, 5000, 1000, 42);

const topPagesData = [
  { path: "/", views: 45231, duration: "2:14", bounceRate: "42%" },
  { path: "/products", views: 21450, duration: "1:45", bounceRate: "55%" },
  { path: "/blog/getting-started", views: 15302, duration: "4:12", bounceRate: "28%" },
  { path: "/pricing", views: 12401, duration: "1:15", bounceRate: "65%" },
  { path: "/about", views: 8902, duration: "0:45", bounceRate: "72%" },
];

const trafficSourcesData = [
  { name: "Organic Search", value: 45 },
  { name: "Direct", value: 25 },
  { name: "Social", value: 15 },
  { name: "Referral", value: 10 },
  { name: "Email", value: 5 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const geographicData = [
  { country: "United States", flag: "🇺🇸", percentage: 45 },
  { country: "United Kingdom", flag: "🇬🇧", percentage: 15 },
  { country: "Germany", flag: "🇩🇪", percentage: 12 },
  { country: "Canada", flag: "🇨🇦", percentage: 8 },
  { country: "Australia", flag: "🇦🇺", percentage: 6 },
];

function AnalyticsPage() {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto dark:bg-gray-900 min-h-screen text-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Analytics Overview</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Track your website performance and visitor behavior.</p>
        </div>
      </div>

      {/* Main Area Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Page Views</h2>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showComparison}
              onChange={(e) => setShowComparison(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Compare vs Previous Period</span>
          </label>
        </div>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={areaChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9ca3af" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#9ca3af" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip
                contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              {showComparison && (
                <Area
                  type="monotone"
                  dataKey="previous"
                  name="Previous Period"
                  stroke="#9ca3af"
                  strokeDasharray="5 5"
                  fillOpacity={1}
                  fill="url(#colorPrevious)"
                />
              )}
              <Area
                type="monotone"
                dataKey="current"
                name="Current Period"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorCurrent)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Top Pages Table */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Pages</h2>
          <div className="overflow-x-auto flex-grow">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
              <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                <tr>
                  <th className="px-4 py-3 font-medium">Page</th>
                  <th className="px-4 py-3 font-medium text-right">Views</th>
                  <th className="px-4 py-3 font-medium text-right">Avg. Duration</th>
                  <th className="px-4 py-3 font-medium text-right">Bounce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {topPagesData.map((page, i) => (
                  <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100 truncate max-w-[120px]">{page.path}</td>
                    <td className="px-4 py-3 text-right">{page.views.toLocaleString()}</td>
                    <td className="px-4 py-3 text-right">{page.duration}</td>
                    <td className="px-4 py-3 text-right">{page.bounceRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Traffic Sources Donut Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Traffic Sources</h2>
          <div className="flex-grow flex items-center justify-center min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={trafficSourcesData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {trafficSourcesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: unknown) => [`${String(value)}%`, 'Share']}
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', backgroundColor: '#fff', color: '#000' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Geographic Heatmap (Simple Table) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Sessions by Country</h2>
          </div>
          <div className="flex-grow space-y-4">
            {geographicData.map((geo, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3 w-1/3">
                  <span className="text-xl" aria-hidden="true">{geo.flag}</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">{geo.country}</span>
                </div>
                <div className="w-1/2 mx-4">
                  <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${geo.percentage}%` }}
                    />
                  </div>
                </div>
                <div className="w-1/6 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {geo.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Memory: Use named exports exclusively (no default exports)
// But Next.js app router requires default export for page.tsx
// I will wrap it for Next.js requirement but keep named export available
export default function Page() {
  return <AnalyticsPage />;
}
