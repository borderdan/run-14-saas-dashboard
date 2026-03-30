export default function UsersLoading() {
  return (
    <div className="p-6 space-y-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="h-8 w-40 bg-zinc-800 rounded-md mb-2"></div>
          <div className="h-4 w-60 bg-zinc-800/50 rounded-md"></div>
        </div>
        <div className="h-10 w-32 bg-zinc-800 rounded-md"></div>
      </div>

      {/* Table skeleton */}
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 overflow-hidden">
        <div className="flex justify-between mb-6">
          <div className="h-10 w-64 bg-zinc-800 rounded-md"></div>
          <div className="flex gap-2">
            <div className="h-10 w-24 bg-zinc-800 rounded-md"></div>
            <div className="h-10 w-24 bg-zinc-800 rounded-md"></div>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-5 gap-4 mb-4 pb-4 border-b border-white/10">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-zinc-800 rounded w-20"></div>
          ))}
        </div>

        {/* Table Rows */}
        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="grid grid-cols-5 gap-4 items-center py-2 border-b border-white/5 last:border-0">
              {/* User cell with avatar */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-zinc-800 rounded-full shrink-0"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-zinc-700 rounded w-24"></div>
                  <div className="h-3 bg-zinc-800 rounded w-32"></div>
                </div>
              </div>
              {/* Status */}
              <div><div className="h-6 w-16 bg-zinc-800 rounded-full"></div></div>
              {/* Role */}
              <div><div className="h-4 bg-zinc-800 rounded w-20"></div></div>
              {/* Last active */}
              <div><div className="h-4 bg-zinc-800 rounded w-24"></div></div>
              {/* Actions */}
              <div className="flex justify-end gap-2">
                <div className="h-8 w-8 bg-zinc-800 rounded-md"></div>
                <div className="h-8 w-8 bg-zinc-800 rounded-md"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
          <div className="h-4 w-32 bg-zinc-800 rounded"></div>
          <div className="flex gap-2">
            <div className="h-8 w-24 bg-zinc-800 rounded-md"></div>
            <div className="h-8 w-24 bg-zinc-800 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
