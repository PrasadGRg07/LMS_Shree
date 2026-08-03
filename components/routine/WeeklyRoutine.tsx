import { routine } from "@/data/routine";

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const colors: Record<string, string> = {
  English: "bg-yellow-100 text-yellow-700",
  Mathematics: "bg-purple-100 text-purple-700",
  Science: "bg-green-100 text-green-700",
  Computer: "bg-blue-100 text-blue-700",
  Nepali: "bg-orange-100 text-orange-700",
  "Social Studies": "bg-red-100 text-red-700",
  Health: "bg-pink-100 text-pink-700",
};

export default function WeeklyRoutine() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Weekly Routine</h2>

        <p className="mt-1 text-slate-500">
          Your complete timetable for this week.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {days.map((day) => {
          const classes = routine.filter((item) => item.day === day);

          return (
            <div key={day} className="rounded-2xl border border-slate-200">
              <div className="rounded-t-2xl bg-slate-100 px-5 py-4">
                <h3 className="font-bold text-slate-900">{day}</h3>
              </div>

              <div className="space-y-3 p-4">
                {classes.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    No classes scheduled.
                  </p>
                ) : (
                  classes.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-slate-200 p-4 transition hover:shadow-md"
                    >
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          colors[item.subject] ?? "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {item.subject}
                      </span>

                      <p className="mt-3 text-sm font-semibold text-slate-900">
                        {item.startTime} – {item.endTime}
                      </p>

                      <p className="mt-1 text-sm text-slate-600">
                        👨‍🏫 {item.teacher}
                      </p>

                      <p className="text-sm text-slate-600">
                        📍 Room {item.room}
                      </p>

                      <p className="text-sm text-slate-600">
                        🎓 Grade {item.grade} • Section {item.section}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
