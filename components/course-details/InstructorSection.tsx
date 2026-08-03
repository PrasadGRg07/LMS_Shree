import Image from "next/image";
import { Award, BookOpen, Mail, Users } from "lucide-react";

import { Course } from "@/data/courses";

interface InstructorSectionProps {
  course: Course;
}

export default function InstructorSection({ course }: InstructorSectionProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          {/* Teacher Image */}
          <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/teachers/default.jpg"
              alt={course.teacher}
              fill
              className="object-cover"
            />
          </div>

          {/* Teacher Info */}
          <div className="lg:col-span-2">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Meet Your Instructor
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              {course.teacher}
            </h2>

            <p className="mt-3 text-lg font-medium text-blue-600">
              Senior {course.category} Instructor
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Our experienced instructor is passionate about helping students
              develop practical knowledge through engaging lessons, real-world
              examples, and interactive learning activities. Every lesson is
              designed to build confidence and prepare students for academic
              success.
            </p>

            {/* Stats */}
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <Award className="mx-auto h-8 w-8 text-blue-600" />
                <h3 className="mt-3 text-2xl font-bold">10+</h3>
                <p className="text-slate-500">Years Experience</p>
              </div>

              <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <Users className="mx-auto h-8 w-8 text-blue-600" />
                <h3 className="mt-3 text-2xl font-bold">{course.students}+</h3>
                <p className="text-slate-500">Students</p>
              </div>

              <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
                <BookOpen className="mx-auto h-8 w-8 text-blue-600" />
                <h3 className="mt-3 text-2xl font-bold">{course.lessons}</h3>
                <p className="text-slate-500">Lessons</p>
              </div>
            </div>

            {/* Contact Button */}
            <button className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
              <Mail className="h-5 w-5" />
              Contact Instructor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
