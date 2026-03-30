export default function Loading() {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto dark:bg-gray-900 min-h-screen">
      <div className="h-10 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <div className="h-[400px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
        <div className="h-[400px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
