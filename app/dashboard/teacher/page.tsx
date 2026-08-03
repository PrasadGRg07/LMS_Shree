import {
  BookOpen,
  Users,
  ClipboardCheck,
  Star,
  Plus,
  Upload,
  FileText,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "My Courses",
    value: "6",
    icon: BookOpen,
  },
  {
    title: "Total Students",
    value: "245",
    icon: Users,
  },
  {
    title: "Pending Assignments",
    value: "18",
    icon: ClipboardCheck,
  },
  {
    title: "Average Rating",
    value: "4.8",
    icon: Star,
  },
];

const courses = [
  {
    title: "Advanced Mathematics",
    students: 85,
    lessons: 32,
    status: "Active",
  },
  {
    title: "Physics Fundamentals",
    students: 64,
    lessons: 28,
    status: "Active",
  },
  {
    title: "Computer Programming",
    students: 96,
    lessons: 40,
    status: "Active",
  },
];

const activities = [
  {
    title: "New assignment submitted",
    description: "15 students submitted Physics Project",
  },
  {
    title: "New student enrolled",
    description: "8 new students joined Mathematics course",
  },
  {
    title: "Student question received",
    description: "A student asked a question in Computer Science",
  },
];

const actions = [
  {
    title: "Create Course",
    icon: Plus,
  },
  {
    title: "Upload Lesson",
    icon: Upload,
  },
  {
    title: "Create Assignment",
    icon: FileText,
  },
  {
    title: "View Reports",
    icon: BarChart3,
  },
];

export default function TeacherDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, Teacher 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Manage courses, students, assignments and learning activities.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
              <Icon size={32} className="text-blue-600" />

              <p className="mt-4 text-slate-500">{item.title}</p>

              <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}

      <section>
        <h2 className="text-2xl font-bold">Quick Actions</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                flex
                items-center
                gap-3
                rounded-2xl
                border
                bg-white
                p-5
                font-semibold
                transition
                hover:border-blue-500
                hover:bg-blue-50
                "
              >
                <Icon size={22} className="text-blue-600" />

                {item.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Courses */}

      <section>
        <h2 className="text-2xl font-bold">My Courses</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.title}
              className="
              rounded-3xl
              border
              bg-white
              p-6
              shadow-sm
              "
            >
              <h3 className="text-xl font-bold">{course.title}</h3>

              <div className="mt-5 space-y-2 text-sm text-slate-600">
                <p>Students: {course.students}</p>

                <p>Lessons: {course.lessons}</p>

                <p>Status: {course.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activity */}

      <section>
        <h2 className="text-2xl font-bold">Recent Activity</h2>

        <div className="mt-5 space-y-4">
          {activities.map((item) => (
            <div
              key={item.title}
              className="
              rounded-2xl
              border
              bg-white
              p-5
              "
            >
              <h3 className="font-bold">{item.title}</h3>

              <p className="mt-1 text-sm text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
