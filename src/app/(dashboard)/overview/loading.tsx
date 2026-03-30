export default function OverviewLoading() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="h-8 w-48 bg-zinc-800 rounded-md mb-2"></div>
          <div className="h-4 w-64 bg-zinc-800/50 rounded-md"></div>
        </div>
        <div className="h-10 w-32 bg-zinc-800 rounded-md"></div>
      </div>

      {/* KPI Cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="h-4 w-24 bg-zinc-800 rounded"></div>
              <div className="h-8 w-8 bg-zinc-800 rounded-full"></div>
            </div>
            <div className="h-8 w-32 bg-zinc-700 rounded mb-2"></div>
            <div className="h-4 w-16 bg-zinc-800/50 rounded"></div>
          </div>
        ))}
      </div>

      {/* Charts skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 h-[400px] flex flex-col">
          <div className="h-6 w-32 bg-zinc-800 rounded mb-6"></div>
          <div className="flex-1 bg-zinc-800/30 rounded-lg"></div>
        </div>
        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 h-[400px] flex flex-col">
          <div className="h-6 w-32 bg-zinc-800 rounded mb-6"></div>
          <div className="flex-1 bg-zinc-800/30 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
