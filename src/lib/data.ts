import { Metric, User, Revenue, Page, Activity, PaginatedUsers } from '../types';
import { formatCurrency, formatNumber, calculateGrowth } from './utils';

// Simple Linear Congruential Generator for deterministic mock data
let seed = 123456789;

function random(): number {
  seed = (seed * 9301 + 49297) % 233280;
  return seed / 233280;
}

function randomInt(min: number, max: number): number {
  return Math.floor(random() * (max - min + 1)) + min;
}

function randomItem<T>(array: T[]): T {
  return array[randomInt(0, array.length - 1)];
}

export function getMetrics(timeRange: string = '7d'): Metric[] {
  // Reset seed for deterministic results based on timeRange
  seed = timeRange === '7d' ? 123 : timeRange === '30d' ? 456 : 789;

  const revenueCurrent = randomInt(50000, 150000);
  const revenuePrevious = randomInt(40000, 140000);

  const usersCurrent = randomInt(5000, 15000);
  const usersPrevious = randomInt(4000, 14000);

  const sessionsCurrent = randomInt(20000, 60000);
  const sessionsPrevious = randomInt(18000, 58000);

  const bounceRateCurrent = random() * 20 + 30; // 30-50%
  const bounceRatePrevious = random() * 20 + 30;

  return [
    {
      label: 'Total Revenue',
      value: formatCurrency(revenueCurrent),
      change: calculateGrowth(revenueCurrent, revenuePrevious),
      trend: revenueCurrent >= revenuePrevious ? 'up' : 'down',
    },
    {
      label: 'Active Users',
      value: formatNumber(usersCurrent),
      change: calculateGrowth(usersCurrent, usersPrevious),
      trend: usersCurrent >= usersPrevious ? 'up' : 'down',
    },
    {
      label: 'Total Sessions',
      value: formatNumber(sessionsCurrent),
      change: calculateGrowth(sessionsCurrent, sessionsPrevious),
      trend: sessionsCurrent >= sessionsPrevious ? 'up' : 'down',
    },
    {
      label: 'Bounce Rate',
      value: `${bounceRateCurrent.toFixed(1)}%`,
      change: calculateGrowth(bounceRatePrevious, bounceRateCurrent), // Lower is better
      trend: bounceRateCurrent <= bounceRatePrevious ? 'up' : 'down', // Up means good trend (lower bounce rate)
    },
  ];
}

const FIRST_NAMES = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Elijah', 'Sophia', 'William', 'Isabella', 'James'];
const LAST_NAMES = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
const ROLES = ['Admin', 'User', 'Editor', 'Viewer'];
const STATUSES: ('Active' | 'Inactive' | 'Pending')[] = ['Active', 'Inactive', 'Pending'];

export function getUsers(page: number = 1, limit: number = 10): PaginatedUsers {
  // Seed based on page and limit
  seed = page * limit * 1000;

  const totalUsers = 150; // Total mock users
  const startIndex = (page - 1) * limit;
  const endIndex = Math.min(startIndex + limit, totalUsers);

  const users: User[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    // Unique seed for each user to ensure consistency
    seed = i * 999;

    const firstName = randomItem(FIRST_NAMES);
    const lastName = randomItem(LAST_NAMES);
    const role = randomItem(ROLES);
    const status = randomItem(STATUSES);

    // Generate a random date within the last 30 days
    const now = new Date();
    const daysAgo = randomInt(0, 30);
    const lastLoginDate = new Date(now.getTime() - daysAgo * 24 * 60 * 60 * 1000);

    users.push({
      id: `usr_${1000 + i}`,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      role,
      status,
      lastLogin: lastLoginDate.toISOString(),
    });
  }

  return {
    users,
    total: totalUsers,
    page,
    limit,
    totalPages: Math.ceil(totalUsers / limit),
  };
}

export function getRevenue(timeRange: string = '7d'): Revenue[] {
  seed = timeRange === '7d' ? 321 : timeRange === '30d' ? 654 : 987;

  const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
  const data: Revenue[] = [];

  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    // Base amount with some random fluctuation and a slight upward trend
    const baseAmount = 5000 + (days - i) * 50;
    const fluctuation = randomInt(-1000, 2000);

    data.push({
      date: date.toISOString().split('T')[0],
      amount: Math.max(0, baseAmount + fluctuation),
    });
  }

  return data;
}

export function getRecentActivity(): Activity[] {
  seed = 333444; // Fixed seed for deterministic results

  const actions = ['created', 'updated', 'deleted', 'viewed', 'shared'];
  const targets = ['Project Alpha', 'User Settings', 'Billing Details', 'Dashboard Report', 'Team Workspace'];

  const data: Activity[] = [];
  const now = new Date();

  for (let i = 0; i < 10; i++) {
    const firstName = randomItem(FIRST_NAMES);
    const lastName = randomItem(LAST_NAMES);
    const action = randomItem(actions);
    const target = randomItem(targets);

    // Recent activity within the last 24 hours
    const hoursAgo = random() * 24;
    const timestamp = new Date(now.getTime() - hoursAgo * 60 * 60 * 1000);

    data.push({
      id: `act_${5000 + i}`,
      user: `${firstName} ${lastName}`,
      action,
      target,
      timestamp: timestamp.toISOString(),
    });
  }

  // Sort by timestamp descending
  return data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function getTopPages(): Page[] {
  seed = 111222; // Fixed seed for deterministic results

  const paths = [
    '/',
    '/dashboard',
    '/products',
    '/pricing',
    '/about',
    '/blog',
    '/contact',
  ];

  const data: Page[] = [];

  for (let i = 0; i < 5; i++) {
    const views = randomInt(5000, 25000) - i * 3000;
    const uniqueVisitors = Math.floor(views * (random() * 0.3 + 0.5)); // 50-80% of views
    const bounceRate = random() * 30 + 20; // 20-50%

    data.push({
      path: paths[i],
      views,
      uniqueVisitors,
      bounceRate: `${bounceRate.toFixed(1)}%`,
    });
  }

  return data;
}
