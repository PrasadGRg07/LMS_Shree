import Link from "next/link";

import {
  BookOpen,
  Users,
  Clock,
  Edit,
  Trash2,
  Eye,
  Star,
  BarChart3,
  Calendar,
  MoreVertical,
  DollarSign,
  ClipboardList,
  HelpCircle,
  User,
} from "lucide-react";

import { Course } from "../types/course";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className="
      group
      rounded-xl
      border
      border-gray-200
      bg-white
      overflow-hidden
      transition-all
      duration-200
      hover:border-2
      hover:border-gray-300
      "
    >
      {/* Thumbnail */}

      <div className="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
        {course.thumbnail ? (
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <BookOpen size={48} className="text-gray-300" />

            <span className="text-sm text-gray-400">No thumbnail</span>
          </div>
        )}

        {/* Status Badge Overlay */}

        <span
          className={`
          absolute
          top-3
          right-3
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          shadow-sm

          ${
            course.status === "Published"
              ? "bg-emerald-500 text-white"
              : course.status === "Draft"
                ? "bg-amber-500 text-white"
                : "bg-gray-500 text-white"
          }
          `}
        >
          {course.status}
        </span>

        {/* Price Badge Overlay */}

        <span
          className="
          absolute
          top-3
          left-3
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          bg-white
          text-gray-900
          shadow-sm
          flex
          items-center
          gap-1
          "
        >
          <DollarSign size={12} />

          {course.price === 0 ? "Free" : `$${course.price}`}
        </span>
      </div>

      {/* Content */}

      <div className="p-5">
        {/* Title & Menu */}

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-700">
              {course.title}
            </h3>

            <div className="flex items-center gap-2 mt-1">
              <p className="text-sm text-gray-500">{course.subject}</p>

              <span className="text-gray-300">•</span>

              <p className="text-sm text-gray-500">{course.gradeLevel}</p>
            </div>
          </div>

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
            "
          >
            <MoreVertical size={18} />
          </button>
        </div>

        {/* Description */}

        <p className="mt-3 text-sm text-gray-500 line-clamp-2">
          {course.description}
        </p>

        {/* Teacher */}

        {course.teacherName && (
          <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
            <User size={14} className="text-gray-400" />

            <span>{course.teacherName}</span>
          </div>
        )}

        {/* Course Type & Rating */}

        <div className="flex items-center gap-2 mt-4">
          <span
            className="
            text-xs
            font-medium
            px-2.5
            py-1
            rounded-full
            bg-blue-50
            text-blue-600
            "
          >
            {course.courseType}
          </span>

          {course.rating && (
            <span
              className="
              flex
              items-center
              gap-1
              text-xs
              font-medium
              text-amber-600
              bg-amber-50
              px-2.5
              py-1
              rounded-full
              "
            >
              <Star size={12} />

              {course.rating}
            </span>
          )}

          {course.lastUpdated && (
            <span
              className="
              flex
              items-center
              gap-1
              text-xs
              text-gray-500
              ml-auto
              "
            >
              <Calendar size={12} />

              {course.lastUpdated}
            </span>
          )}
        </div>

        {/* Stats */}

        <div
          className="
          mt-4
          pt-4
          border-t
          border-gray-100
          grid
          grid-cols-2
          gap-3
          text-sm
          "
        >
          <div className="flex items-center gap-2 text-gray-600">
            <Users size={16} className="text-blue-400" />

            <span className="font-medium">{course.students}</span>

            <span className="text-gray-400">Students</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <BookOpen size={16} className="text-purple-400" />

            <span className="font-medium">{course.lessons}</span>

            <span className="text-gray-400">Lessons</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={16} className="text-orange-400" />

            <span>{course.duration}</span>
          </div>

          {course.completionRate !== undefined && (
            <div className="flex items-center gap-2 text-gray-600">
              <BarChart3 size={16} className="text-green-400" />

              <span className="font-medium">{course.completionRate}%</span>

              <span className="text-gray-400">Complete</span>
            </div>
          )}

          {course.assignments !== undefined && (
            <div className="flex items-center gap-2 text-gray-600">
              <ClipboardList size={16} className="text-indigo-400" />

              <span className="font-medium">{course.assignments}</span>

              <span className="text-gray-400">Assignments</span>
            </div>
          )}

          {course.quizzes !== undefined && (
            <div className="flex items-center gap-2 text-gray-600">
              <HelpCircle size={16} className="text-pink-400" />

              <span className="font-medium">{course.quizzes}</span>

              <span className="text-gray-400">Quizzes</span>
            </div>
          )}
        </div>

        {/* Actions */}

        <div
          className="
          mt-5
          pt-4
          border-t
          border-gray-100
          flex
          items-center
          gap-2
          "
        >
          <Link
            href={`/dashboard/teacher/courses/${course.id}`}
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
            text-sm
            font-medium
            text-gray-600
            transition
            hover:bg-blue-50
            hover:text-blue-600
            hover:border-blue-200
            "
          >
            <Eye size={16} />
            View
          </Link>

          <Link
            href={`/dashboard/teacher/courses/${course.id}/edit`}
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
            text-sm
            font-medium
            text-gray-600
            transition
            hover:bg-purple-50
            hover:text-purple-600
            hover:border-purple-200
            "
          >
            <Edit size={16} />
            Edit
          </Link>

          <button
            className="
            rounded-lg
            border
            border-gray-200
            px-3
            py-2
            text-sm
            font-medium
            text-red-500
            transition
            hover:bg-red-50
            hover:text-red-600
            hover:border-red-200
            "
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
