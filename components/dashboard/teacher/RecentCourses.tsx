import Link from "next/link";
import {
  BookOpen,
  Users,
  ArrowRight,
  PlayCircle,
  Edit,
  Eye,
  MoreVertical,
} from "lucide-react";

const courses = [
  {
    id: "1",
    title: "React Fundamentals",
    category: "Frontend Development",
    students: 120,
    lessons: 18,
    status: "Published",
    color: "blue",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100",
    statusBg: "bg-emerald-100",
    statusText: "text-emerald-700",
    progress: 100,
    rating: "4.8",
  },

  {
    id: "2",
    title: "Python Programming",
    category: "Backend Development",
    students: 95,
    lessons: 22,
    status: "Published",
    color: "purple",
    textColor: "text-purple-600",
    iconBg: "bg-purple-100",
    statusBg: "bg-emerald-100",
    statusText: "text-emerald-700",
    progress: 100,
    rating: "4.6",
  },

  {
    id: "3",
    title: "Database Systems",
    category: "Computer Science",
    students: 75,
    lessons: 15,
    status: "Draft",
    color: "orange",
    textColor: "text-orange-600",
    iconBg: "bg-orange-100",
    statusBg: "bg-amber-100",
    statusText: "text-amber-700",
    progress: 60,
    rating: "—",
  },
];

export default function RecentCourses() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Recent Courses</h2>

        <Link
          href="/dashboard/teacher/courses"
          className="
          text-sm
          font-medium
          text-blue-600
          hover:text-blue-700
          flex
          items-center
          gap-1
          "
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="space-y-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="
            group
            rounded-xl
            border
            border-gray-200
            bg-white
            p-5
            transition-all
            duration-200
            hover:border-2
            hover:border-gray-300
            "
          >
            <div className="flex items-start justify-between">
              {/* Left Section - Icon & Info */}

              <div className="flex items-start gap-4 flex-1">
                <div
                  className={`
                  rounded-xl
                  ${course.iconBg}
                  p-3
                  transition-all
                  duration-200
                  group-hover:scale-110
                  `}
                >
                  <BookOpen size={24} className={course.textColor} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                        {course.title}
                      </h3>

                      <p className="text-sm text-gray-500 mt-0.5">
                        {course.category}
                      </p>
                    </div>

                    {/* Status & Rating */}

                    <div className="flex items-center gap-2">
                      <span
                        className={`
                        text-xs
                        font-semibold
                        px-2.5
                        py-1
                        rounded-full
                        ${course.statusBg}
                        ${course.statusText}
                        `}
                      >
                        {course.status}
                      </span>

                      {course.rating !== "—" && (
                        <span
                          className="
                          text-xs
                          font-medium
                          text-amber-600
                          bg-amber-50
                          px-2.5
                          py-1
                          rounded-full
                          "
                        >
                          ⭐ {course.rating}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats - Stacked */}

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users size={16} className="text-blue-400" />

                      <span className="font-medium">{course.students}</span>

                      <span className="text-gray-400">Students</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <PlayCircle size={16} className="text-purple-400" />

                      <span className="font-medium">{course.lessons}</span>

                      <span className="text-gray-400">Lessons</span>
                    </div>

                    {/* Progress Bar */}

                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-gray-500">Completion</span>

                        <span className={`font-semibold ${course.textColor}`}>
                          {course.progress}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`
                          h-full
                          rounded-full
                          transition-all
                          duration-500
                          ${course.iconBg}
                          `}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - More Options */}

              <button
                className="
                p-1
                rounded-lg
                text-gray-400
                hover:text-gray-600
                hover:bg-gray-100
                transition
                opacity-0
                group-hover:opacity-100
                ml-2
                "
              >
                <MoreVertical size={18} />
              </button>
            </div>

            {/* Actions */}

            <div
              className="
              flex
              items-center
              gap-2
              mt-5
              pt-4
              border-t
              border-gray-100
              "
            >
              {course.status === "Published" ? (
                <button
                  className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-gray-200
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-gray-900
                  "
                >
                  <Eye size={14} />
                  View Course
                </button>
              ) : (
                <button
                  className="
                  flex-1
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-gray-200
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-gray-600
                  transition
                  hover:bg-gray-50
                  hover:text-gray-900
                  "
                >
                  <Edit size={14} />
                  Continue Editing
                </button>
              )}

              <Link
                href={`/dashboard/teacher/courses/${course.id}`}
                className={`
                rounded-lg
                px-3
                py-2
                text-xs
                font-medium
                transition
                ${course.textColor}
                hover:bg-gray-100
                `}
              >
                Manage
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
