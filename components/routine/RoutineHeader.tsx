import { CalendarDays } from "lucide-react";

export default function RoutineHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-blue-100 p-4">
          <CalendarDays className="text-blue-600" size={32} />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-slate-900">Class Routine</h1>

          <p className="mt-1 text-slate-600">{today}</p>
        </div>
      </div>
    </section>
  );
}
