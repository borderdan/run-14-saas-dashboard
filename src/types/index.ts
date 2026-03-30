export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive' | 'Pending';
  lastLogin: string;
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
