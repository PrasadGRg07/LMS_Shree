import TeacherStats from "@/components/dashboard/teacher/TeacherStats";
import TeacherQuickActions from "@/components/dashboard/teacher/TeacherQuickActions";
import RecentCourses from "@/components/dashboard/teacher/RecentCourses";
import UpcomingTasks from "@/components/dashboard/teacher/UpcomingTasks";
import { GraduationCap } from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <section
        className="
        rounded-3xl
        border
        bg-gradient-to-r
        from-blue-50
        via-indigo-50
        to-purple-50
        p-8
        shadow-sm
        "
      >
        <div
          className="
          flex
          flex-col
          gap-6
          md:flex-row
          md:items-center
          md:justify-between
        "
        >
          <div>
            <h1
              className="
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
            "
            >
              Welcome back, Teacher 👋
            </h1>

            <p
              className="
              mt-3
              max-w-xl
              text-gray-600
            "
            >
              Manage your courses, monitor student progress, create lessons, and
              organize your teaching activities.
            </p>

            <button
              className="
              mt-5
              rounded-xl
              bg-indigo-600
              px-5
              py-3
              text-sm
              font-medium
              text-white
              shadow-md
              transition
              hover:bg-indigo-700
              "
            >
              Create New Course
            </button>
          </div>

          <div
            className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-gradient-to-br
            from-indigo-600
            to-purple-600
            text-white
            shadow-lg
            "
          >
            <GraduationCap size={38} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <TeacherStats />

      {/* Actions */}
      <TeacherQuickActions />

      {/* Bottom Sections */}
      <div
        className="
        grid
        gap-8
        lg:grid-cols-2
        "
      >
        <div
          className="
          rounded-2xl
          border
          bg-gradient-to-br
          from-white
          to-blue-50
          p-6
          shadow-sm
          "
        >
          <RecentCourses />
        </div>

        <div
          className="
          rounded-2xl
          border
          bg-gradient-to-br
          from-white
          to-purple-50
          p-6
          shadow-sm
          "
        >
          <UpcomingTasks />
        </div>
      </div>
    </div>
  );
}
