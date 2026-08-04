import Image from "next/image";

import { teacherCourses } from "@/features/teacher/courses/data/courses";
import { Users, BookOpen, Clock, Wallet } from "lucide-react";

export default async function CourseDetailsPage({
  params,
}: {
  params: Promise<{
    courseId: string;
  }>;
}) {
  const { courseId } = await params;

  const course = teacherCourses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold">Course not found</h2>

        <p className="mt-2 text-gray-500">Course ID: {courseId}</p>
      </div>
    );
  }

  const stats = [
    {
      title: "Students",
      value: course.students,
      icon: Users,
      style: "from-blue-500 to-cyan-500",
    },
    {
      title: "Lessons",
      value: course.lessons,
      icon: BookOpen,
      style: "from-purple-500 to-indigo-500",
    },
    {
      title: "Duration",
      value: course.duration,
      icon: Clock,
      style: "from-orange-500 to-yellow-500",
    },
    {
      title: "Price",
      value: course.price === 0 ? "Free" : `Rs. ${course.price}`,
      icon: Wallet,
      style: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Course Hero */}

      <section
        className="
        overflow-hidden
        rounded-3xl
        border
        bg-white
        shadow-sm
        "
      >
        <div
          className="
          relative
          h-[350px]
          w-full
        "
        >
          {course.thumbnail ? (
            <Image
              src={course.thumbnail}
              alt={course.title}
              fill
              className="
              object-cover
              "
            />
          ) : (
            <div
              className="
              flex
              h-full
              items-center
              justify-center
              bg-gradient-to-br
              from-indigo-100
              to-purple-100
            "
            >
              No Image
            </div>
          )}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-black/30
            to-transparent
            "
          />

          <div
            className="
            absolute
            bottom-0
            left-0
            max-w-3xl
            p-8
            text-white
            "
          >
            <h1
              className="
              text-4xl
              font-bold
              "
            >
              {course.title}
            </h1>

            <p
              className="
              mt-3
              text-white/80
              "
            >
              {course.description}
            </p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-3">
            <span
              className="
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
            "
            >
              {course.subject}
            </span>

            <span
              className="
              rounded-full
              bg-purple-100
              px-4
              py-2
              text-sm
              font-medium
              text-purple-700
            "
            >
              {course.gradeLevel}
            </span>

            <span
              className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-medium

              ${
                course.status === "Published"
                  ? "bg-green-100 text-green-700"
                  : course.status === "Draft"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-gray-100 text-gray-700"
              }
              `}
            >
              {course.status}
            </span>
          </div>
        </div>
      </section>

      {/* Statistics */}

      <div
        className="
        grid
        gap-5
        sm:grid-cols-2
        xl:grid-cols-4
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              "
            >
              <div
                className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                ${item.style}
                text-white
                `}
              >
                <Icon size={24} />
              </div>

              <p
                className="
                mt-5
                text-sm
                text-gray-500
              "
              >
                {item.title}
              </p>

              <h2
                className="
                mt-2
                text-3xl
                font-bold
                text-gray-900
              "
              >
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
