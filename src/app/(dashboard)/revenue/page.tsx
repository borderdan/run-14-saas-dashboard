import { MRRCard } from "@/components/revenue/MRRCard";
import { RevenueBreakdownCard } from "@/components/revenue/RevenueBreakdownCard";
import { ChurnAnalysisCard } from "@/components/revenue/ChurnAnalysisCard";
import { PricingTierCard } from "@/components/revenue/PricingTierCard";

export default function RevenuePage() {
  return (
    <div className="flex flex-col gap-6 p-6 max-w-7xl mx-auto w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-white tracking-tight">Revenue Dashboard</h1>
        <p className="text-zinc-400">Track and analyze your financial metrics, churn, and forecasting.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <MRRCard />
        </div>

        <RevenueBreakdownCard />

        <ChurnAnalysisCard />

        <div className="lg:col-span-2">
          <PricingTierCard />
        </div>
      </div>
    </div>
  );
}
