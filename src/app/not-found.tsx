import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-background text-foreground">
      <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center text-center">
        <div className="bg-amber-500/10 p-4 rounded-full mb-6">
          <AlertCircle className="h-10 w-10 text-amber-500" />
        </div>
        <h2 className="text-3xl font-bold mb-2">404</h2>
        <h3 className="text-xl font-semibold mb-4 text-zinc-300">Page Not Found</h3>
        <p className="text-zinc-400 mb-8">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors w-full"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
