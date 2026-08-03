import { GraduationCap, User, Calendar, Layers } from "lucide-react";

import { Course } from "@/data/courses";

interface CourseOverviewProps {
  course: Course;
}

export default function CourseOverview({ course }: CourseOverviewProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
        {/* Left */}
        <div className="lg:col-span-2">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Course Overview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            About This Course
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {course.longDescription}
          </p>
        </div>

        {/* Right */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h3 className="mb-8 text-2xl font-bold text-slate-900">
            Course Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <User className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-slate-500">Teacher</p>
                <p className="font-semibold">{course.teacher}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-slate-500">Grade</p>
                <p className="font-semibold">{course.grade}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Layers className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-slate-500">Category</p>
                <p className="font-semibold">{course.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-slate-500">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
