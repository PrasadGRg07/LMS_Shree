import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, Star, Users } from "lucide-react";

import { Course } from "@/data/courses";

interface CourseHeroProps {
  course: Course;
}

export default function CourseHero({ course }: CourseHeroProps) {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <Link
            href="/courses"
            className="mb-8 inline-flex items-center gap-2 text-blue-300 transition hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Courses
          </Link>

          <span className="inline-flex rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            {course.category}
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {course.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {course.description}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <Star className="mb-2 h-6 w-6 fill-yellow-400 text-yellow-400" />
              <p className="text-2xl font-bold">{course.rating}</p>
              <p className="text-sm text-slate-300">Rating</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <Users className="mb-2 h-6 w-6 text-blue-300" />
              <p className="text-2xl font-bold">{course.students}</p>
              <p className="text-sm text-slate-300">Students</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <BookOpen className="mb-2 h-6 w-6 text-green-300" />
              <p className="text-2xl font-bold">{course.lessons}</p>
              <p className="text-sm text-slate-300">Lessons</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <Clock className="mb-2 h-6 w-6 text-purple-300" />
              <p className="text-2xl font-bold">{course.duration}</p>
              <p className="text-sm text-slate-300">Duration</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/admissions"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Enroll Now
            </Link>

            <Link
              href="#curriculum"
              className="rounded-xl border border-white/30 px-6 py-3 font-semibold transition hover:bg-white hover:text-slate-900"
            >
              View Curriculum
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[520px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={course.image}
            alt={course.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
