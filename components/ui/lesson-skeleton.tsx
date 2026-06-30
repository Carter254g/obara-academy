export function LessonSkeleton() {
  return (
    <div className="space-y-6" aria-hidden="true">
      <div className="animate-pulse rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="h-4 w-32 rounded-full bg-slate-200" />
        <div className="mt-4 h-10 w-3/4 rounded-full bg-slate-200" />
        <div className="mt-4 h-4 w-full rounded-full bg-slate-100" />
        <div className="mt-2 h-4 w-2/3 rounded-full bg-slate-100" />
        <div className="mt-6 grid gap-4 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-20 rounded-2xl border border-slate-100 bg-slate-50" />
          ))}
        </div>
      </div>

      <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="h-6 w-40 rounded-full bg-slate-200" />
        <div className="h-4 w-full rounded-full bg-slate-100" />
        <div className="h-4 w-5/6 rounded-full bg-slate-100" />
        <div className="h-4 w-4/5 rounded-full bg-slate-100" />
      </div>

      <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="h-6 w-48 rounded-full bg-slate-200" />
        <div className="h-24 rounded-2xl bg-slate-50" />
        <div className="h-24 rounded-2xl bg-slate-50" />
      </div>
    </div>
  )
}
