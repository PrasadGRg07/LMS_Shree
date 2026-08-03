import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Star, Users } from "lucide-react";

import { Course } from "@/data/courses";

interface FeaturedCourseHeroProps {
  course: Course;
}

export default function FeaturedCourseHero({
  course,
}: FeaturedCourseHeroProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-[420px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-10">
          <span className="mb-4 w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⭐ Featured Program
          </span>

          <h2 className="text-4xl font-bold text-slate-900">{course.title}</h2>

          <p className="mt-5 leading-8 text-slate-600">{course.description}</p>

          {/* Course Stats */}
          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="flex items-center gap-2 text-slate-700">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>{course.rating} Rating</span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Users className="h-5 w-5 text-blue-600" />
              <span>{course.students} Students</span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span>{course.lessons} Lessons</span>
            </div>

            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="h-5 w-5 text-blue-600" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Details */}
          <div className="mt-8 space-y-2">
            <p className="text-slate-700">
              <span className="font-semibold">Teacher:</span> {course.teacher}
            </p>

            <p className="text-slate-700">
              <span className="font-semibold">Grade:</span> {course.grade}
            </p>

            <p className="text-slate-700">
              <span className="font-semibold">Category:</span> {course.category}
            </p>
          </div>

          {/* Dynamic Course Route */}
          <Link
            href={`/courses/${course.slug}`}
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
          >
            View Course
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
