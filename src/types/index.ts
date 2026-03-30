export interface User {
  id: string;
  name: string;
  email: string;
  organizationId?: string;
  role: 'admin' | 'member' | string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastLogin: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Organization {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: string;
  updatedAt: string;
}

export interface Metric {
  id?: string;
  name?: string;
  label: string;
  value: string | number;
  change: string;
  trend: 'up' | 'down';
  unit?: string;
  timestamp?: string;
}

export interface DashboardWidget {
  id: string;
  type: 'chart' | 'stat' | 'table';
  title: string;
  layout: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  config: Record<string, unknown>;
}

export interface TimeRange {
  start: string;
  end: string;
}

export interface APIResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface Revenue {
  date: string;
  amount: number;
}

export interface Page {
  path: string;
  views: number;
  uniqueVisitors: number;
  bounceRate: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
}

export interface PaginatedUsers {
  users: User[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
