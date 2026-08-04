import CourseForm from "@/features/teacher/courses/components/forms/CourseForm";
import { PlusCircle, BookOpen } from "lucide-react";

export default function CreateCoursePage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div
            className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-blue-100
            text-blue-600
            "
          >
            <PlusCircle size={26} />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create Course</h1>

            <p className="mt-1 text-sm text-gray-500">
              Add a new course and share knowledge with your students.
            </p>
          </div>
        </div>
      </div>

      {/* Course Form Container */}
      <div
        className="
        max-w-5xl
        rounded-2xl
        border
        bg-white
        shadow-sm
        "
      >
        {/* Form Header */}
        <div
          className="
          flex
          items-center
          gap-3
          border-b
          px-6
          py-5
          "
        >
          <BookOpen className="text-blue-600" size={22} />

          <h2 className="font-semibold text-gray-900">Course Information</h2>
        </div>

        {/* Form */}
        <div className="p-6">
          <CourseForm />
        </div>
      </div>
    </div>
  );
}
