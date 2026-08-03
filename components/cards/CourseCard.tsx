import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users, BookOpen, Clock } from "lucide-react";

import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  // Prevent crash if course data is missing
  if (!course) {
    return null;
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {course.featured && (
          <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {course.grade}
          </span>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm font-semibold text-slate-700">
              {course.rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900">{course.title}</h3>

        {/* Description */}
        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {course.description}
        </p>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />
            {course.students} Students
          </div>

          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-blue-600" />
            {course.lessons} Lessons
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            {course.duration}
          </div>

          <div className="font-medium text-slate-700">{course.teacher}</div>
        </div>

        {/* View Details */}
        <Link
          href={`/courses/${course.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Details
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
