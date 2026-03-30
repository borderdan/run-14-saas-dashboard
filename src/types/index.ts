export interface User {
  id: string;
  name: string;
  email: string;
  organizationId: string;
  role: 'admin' | 'member';
  createdAt: string;
  updatedAt: string;
}

export interface Organization {
  id: string;
  name: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: string;
  updatedAt: string;
}

export interface Metric {
  id: string;
  name: string;
  value: number;
  unit?: string;
  timestamp: string;
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
