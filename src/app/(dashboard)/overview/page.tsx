'use client';

import React, { useState, useMemo } from 'react';
import { getMetrics, getRevenue } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, TrendingDown } from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function OverviewPage() {
  const [timeRange, setTimeRange] = useState('7d');

  // Fetch mock data based on time range
  const rawMetrics = useMemo(() => getMetrics(timeRange), [timeRange]);
  const revenueData = useMemo(() => getRevenue(timeRange), [timeRange]);

  // Generate deterministic sparkline data and user growth data based on timeRange
  const sparklineData = useMemo(() => {
    let seed = timeRange === '7d' ? 1 : timeRange === '30d' ? 2 : 3;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    return Array.from({ length: 4 }).map(() =>
      Array.from({ length: 10 }).map((_, i) => ({ value: 10 + random() * 20 + i }))
    );
  }, [timeRange]);

  const userGrowthData = useMemo(() => {
    let seed = timeRange === '7d' ? 4 : timeRange === '30d' ? 5 : 6;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    return revenueData.map((item, i) => {
      const baseUsers = 1000 + i * 50;
      const fluctuation = (random() - 0.5) * 200;
      return {
        date: item.date,
        users: Math.max(0, Math.floor(baseUsers + fluctuation)),
      };
    });
  }, [revenueData, timeRange]);

  // Map the raw metrics to the requested labels
  // getMetrics returns: Total Revenue, Active Users, Total Sessions, Bounce Rate
  const kpiCards = [
    {
      title: 'Total Users', // Maps to Active Users value roughly
      value: rawMetrics[1]?.value,
      change: rawMetrics[1]?.change,
      trend: rawMetrics[1]?.trend,
      sparkline: sparklineData[0],
    },
    {
      title: 'Monthly Revenue', // Maps to Total Revenue value
      value: rawMetrics[0]?.value,
      change: rawMetrics[0]?.change,
      trend: rawMetrics[0]?.trend,
      sparkline: sparklineData[1],
    },
    {
      title: 'Active Sessions', // Maps to Total Sessions
      value: rawMetrics[2]?.value,
      change: rawMetrics[2]?.change,
      trend: rawMetrics[2]?.trend,
      sparkline: sparklineData[2],
    },
    {
      title: 'Conversion Rate', // Maps to Bounce Rate roughly (inverted logic or just raw mock data)
      value: rawMetrics[3]?.value, // The mock data has a percentage string, e.g. "45.2%"
      change: rawMetrics[3]?.change,
      trend: rawMetrics[3]?.trend === 'up' ? 'down' : 'up', // Reverse trend since it's bounce rate in mock
      sparkline: sparklineData[3],
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
        <div className="w-[180px]">
          <Select value={timeRange} onValueChange={(value) => { if (value) setTimeRange(value); }}>
            <SelectTrigger className="backdrop-blur-lg bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="90d">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map((card, index) => (
          <Card key={index} className="backdrop-blur-lg bg-white/5 border-white/10 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-zinc-400">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{card.value}</div>
              <div className="flex items-center justify-between mt-1">
                <p className={`text-xs flex items-center ${card.trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                  {card.trend === 'up' ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                  {card.change}
                </p>
                <div className="h-8 w-16">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={card.sparkline}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke={card.trend === 'up' ? '#10b981' : '#ef4444'}
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="backdrop-blur-lg bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-zinc-200">Revenue</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="#a1a1aa"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getMonth() + 1}/${date.getDate()}`;
                    }}
                  />
                  <YAxis
                    stroke="#a1a1aa"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: unknown) => [`$${value ?? 0}`, 'Revenue']}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#8b5cf6"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4, fill: '#8b5cf6' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="backdrop-blur-lg bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle className="text-zinc-200">User Growth</CardTitle>
          </CardHeader>
          <CardContent className="pl-0">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={userGrowthData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="#a1a1aa"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => {
                      const date = new Date(value);
                      return `${date.getMonth() + 1}/${date.getDate()}`;
                    }}
                  />
                  <YAxis
                    stroke="#a1a1aa"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value: unknown) => [`${value ?? 0}`, 'Users']}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
