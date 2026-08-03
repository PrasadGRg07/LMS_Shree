import { BookOpen, CheckCircle2, Clock3, CalendarCheck } from "lucide-react";

const stats = [
  {
    title: "Today's Classes",
    value: "6",
    icon: BookOpen,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Completed",
    value: "3",
    icon: CheckCircle2,
    color: "text-green-600 bg-green-100",
  },
  {
    title: "Next Class",
    value: "10:30",
    icon: Clock3,
    color: "text-orange-600 bg-orange-100",
  },
  {
    title: "Attendance",
    value: "100%",
    icon: CalendarCheck,
    color: "text-purple-600 bg-purple-100",
  },
];

export default function RoutineStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">{stat.title}</p>

                <h2 className="mt-2 text-3xl font-bold">{stat.value}</h2>
              </div>

              <div className={`rounded-2xl p-4 ${stat.color}`}>
                <Icon size={28} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
