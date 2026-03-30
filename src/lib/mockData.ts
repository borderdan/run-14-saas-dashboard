const lcg = (seed: number) => {
  let currentSeed = seed;
  return () => {
    currentSeed = (currentSeed * 1664525 + 1013904223) % 4294967296;
    return currentSeed / 4294967296;
  };
};

const random = lcg(42);

export const mrrData = Array.from({ length: 12 }).map((_, i) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const isForecast = i > 8;
  const base = 50000 + i * 4000;
  const noise = (random() - 0.5) * 4000;
  const value = Math.round(base + noise);

  return {
    month: months[i],
    mrr: isForecast ? null : value,
    forecast: isForecast ? value : (i === 8 ? value : null),
  };
});

export const revenueBreakdownData = Array.from({ length: 6 }).map((_, i) => {
  const months = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return {
    month: months[i],
    Subscriptions: Math.round(30000 + i * 2000 + random() * 5000),
    OneTime: Math.round(5000 + random() * 3000),
    Usage: Math.round(10000 + i * 1000 + random() * 4000),
  };
});

export const churnData = Array.from({ length: 12 }).map((_, i) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const baseChurn = 6 - i * 0.3;
  const noise = (random() - 0.5) * 1.5;
  let event = undefined;

  if (i === 4) event = 'New UI Launch';
  if (i === 9) event = 'Pricing Update';

  return {
    month: months[i],
    rate: Number(Math.max(0.5, baseChurn + noise).toFixed(2)),
    event,
  };
});

export const pricingTierData = [
  {
    name: 'Tiers',
    Free: 4500,
    Pro: 3200,
    Enterprise: 800,
  }
];
