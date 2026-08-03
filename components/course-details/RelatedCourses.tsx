import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import { Course } from "@/data/courses";

interface RelatedCoursesProps {
  course: Course;
  courses: Course[];
}

export default function RelatedCourses({
  course,
  courses,
}: RelatedCoursesProps) {
  const relatedCourses = courses
    .filter(
      (item) => item.category === course.category && item.id !== course.id,
    )
    .slice(0, 3);

  if (relatedCourses.length === 0) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Related Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Continue Your Learning Journey
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explore similar courses that can help you develop more skills.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedCourses.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {item.grade}
                  </span>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                    <span className="text-sm font-semibold">{item.rating}</span>
                  </div>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={`/courses/${item.slug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  View Course
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
