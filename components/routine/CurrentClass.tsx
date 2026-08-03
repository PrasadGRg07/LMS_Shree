import { BookOpen } from "lucide-react";

export default function CurrentClass() {
  return (
    <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
      <div className="flex items-center gap-3">
        <BookOpen className="text-green-600" />

        <h2 className="text-xl font-bold">Current Class</h2>
      </div>

      <div className="mt-5 space-y-2">
        <h3 className="text-2xl font-bold">Computer Science</h3>

        <p className="text-slate-600">10:30 AM – 11:15 AM</p>

        <p>Teacher: Mr. Karki</p>

        <p>Room: Computer Lab</p>
      </div>
    </div>
  );
}
