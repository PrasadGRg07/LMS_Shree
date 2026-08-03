const subjects = [
  {
    name: "Computer",
    color: "bg-blue-500",
  },
  {
    name: "Mathematics",
    color: "bg-purple-500",
  },
  {
    name: "English",
    color: "bg-yellow-500",
  },
  {
    name: "Science",
    color: "bg-green-500",
  },
  {
    name: "Social",
    color: "bg-red-500",
  },
  {
    name: "Nepali",
    color: "bg-orange-500",
  },
];

export default function RoutineLegend() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <h2 className="text-xl font-bold">Subject Legend</h2>

      <div className="mt-5 flex flex-wrap gap-4">
        {subjects.map((subject) => (
          <div key={subject.name} className="flex items-center gap-2">
            <span className={`h-4 w-4 rounded-full ${subject.color}`} />

            <span>{subject.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
