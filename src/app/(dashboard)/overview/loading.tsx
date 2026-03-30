export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-9 w-40 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
        <div className="h-9 w-48 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-32 bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-[350px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
        <div className="h-[350px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
      </div>
    </div>
  );
}
