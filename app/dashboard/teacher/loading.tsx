export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Title Skeleton */}
      <div>
        <div className="h-8 w-64 rounded-lg bg-muted" />
        <div className="mt-3 h-4 w-96 rounded bg-muted" />
      </div>

      {/* Cards Skeleton */}
      <div className="grid gap-6 md:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-xl border bg-white p-6 dark:bg-zinc-950"
          >
            <div className="h-4 w-28 rounded bg-muted" />

            <div className="mt-4 h-10 w-20 rounded bg-muted" />
          </div>
        ))}
      </div>

      {/* Quick Actions Skeleton */}
      <div className="mt-10">
        <div className="h-6 w-40 rounded bg-muted" />

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-24 rounded-xl border bg-white dark:bg-zinc-950"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
