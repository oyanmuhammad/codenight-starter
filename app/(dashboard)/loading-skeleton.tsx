import { Skeleton } from "@/components/ui/skeleton";

export function DashboardLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
          <Skeleton className="h-6 w-24" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-8 w-16" />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
