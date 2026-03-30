export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="h-10 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
        <div className="h-10 w-64 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
      </div>
      <div className="h-[600px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
    </div>
  );
}
