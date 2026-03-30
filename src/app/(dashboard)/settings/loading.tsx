export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="h-10 w-32 bg-zinc-200 dark:bg-zinc-800 rounded animate-pulse"></div>
      <div className="h-12 w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg animate-pulse mb-6"></div>
      <div className="h-[400px] bg-zinc-200 dark:bg-zinc-800 rounded-xl animate-pulse"></div>
    </div>
  );
}
