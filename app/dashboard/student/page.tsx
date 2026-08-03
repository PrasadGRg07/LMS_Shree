import {
  BookOpen,
  ClipboardCheck,
  CalendarDays,
  Award,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "My Courses",
    value: "8",
    icon: BookOpen,
  },
  {
    title: "Assignments",
    value: "12",
    icon: ClipboardCheck,
  },
  {
    title: "Attendance",
    value: "92%",
    icon: CalendarDays,
  },
  {
    title: "Certificates",
    value: "5",
    icon: Award,
  },
];

const courses = [
  {
    title: "Mathematics",
    progress: 85,
    teacher: "Mr. Sharma",
  },
  {
    title: "Science",
    progress: 70,
    teacher: "Mrs. Rai",
  },
  {
    title: "Computer Science",
    progress: 95,
    teacher: "Mr. Gurung",
  },
];

const assignments = [
  {
    title: "Physics Project",
    subject: "Science",
    due: "Aug 10, 2026",
  },
  {
    title: "Math Exercise",
    subject: "Mathematics",
    due: "Aug 15, 2026",
  },
];

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, Student 👋
        </h1>

        <p className="mt-2 text-slate-600">
          Track your learning progress and academic activities.
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
              <Icon className="text-blue-600" size={32} />

              <h3 className="mt-5 text-slate-600">{item.title}</h3>

              <p className="mt-2 text-3xl font-bold">{item.value}</p>
            </div>
          );
        })}
      </div>

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

              <p className="mt-2 text-sm text-slate-500">{course.teacher}</p>

              <div className="mt-5">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>

                  <span>{course.progress}%</span>
                </div>

                <div
                  className="
                  mt-2
                  h-3
                  rounded-full
                  bg-slate-200
                  "
                >
                  <div
                    className="
                    h-3
                    rounded-full
                    bg-blue-600
                    "
                    style={{
                      width: `${course.progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assignments */}

      <section>
        <h2 className="text-2xl font-bold">Upcoming Assignments</h2>

        <div className="mt-6 space-y-4">
          {assignments.map((item) => (
            <div
              key={item.title}
              className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              bg-white
              p-5
              "
            >
              <div>
                <h3 className="font-bold">{item.title}</h3>

                <p className="text-sm text-slate-500">{item.subject}</p>
              </div>

              <div
                className="
                flex
                items-center
                gap-2
                text-sm
                text-slate-600
                "
              >
                <Clock size={18} />

                {item.due}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
