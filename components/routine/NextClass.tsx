import { Clock3 } from "lucide-react";

export default function NextClass() {
  return (
    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
      <div className="flex items-center gap-3">
        <Clock3 className="text-blue-600" />

        <h2 className="text-xl font-bold">Next Class</h2>
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-2xl font-bold">Mathematics</h3>

        <p className="text-slate-600">Starts at 11:30 AM</p>

        <p>Teacher: Mrs. Gurung</p>

        <p>Room: 205</p>
      </div>
    </div>
  );
}
