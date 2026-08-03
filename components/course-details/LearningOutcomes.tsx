import { CheckCircle2 } from "lucide-react";
import { Course } from "@/data/courses";

interface LearningOutcomesProps {
  course: Course;
}

export default function LearningOutcomes({ course }: LearningOutcomesProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            Learning Outcomes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            What You'll Learn
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            By the end of this course, students will have developed these
            essential skills and competencies.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {course.outcomes.map((outcome, index) => (
            <div
              key={index}
              className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <CheckCircle2 className="mt-1 h-6 w-6 text-green-600" />

              <p className="text-lg leading-7 text-slate-700">{outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
