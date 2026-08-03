import {
  User,
  CalendarCheck,
  BookOpen,
  Award,
  CreditCard,
  MessageCircle,
} from "lucide-react";

const stats = [
  {
    title: "Attendance",
    value: "95%",
    icon: CalendarCheck,
  },
  {
    title: "Courses",
    value: "8",
    icon: BookOpen,
  },
  {
    title: "Achievements",
    value: "12",
    icon: Award,
  },
  {
    title: "Fee Status",
    value: "Paid",
    icon: CreditCard,
  },
];

const subjects = [
  {
    name: "Mathematics",
    progress: 88,
    grade: "A",
  },
  {
    name: "Science",
    progress: 76,
    grade: "B+",
  },
  {
    name: "Computer Science",
    progress: 94,
    grade: "A+",
  },
];

const attendance = [
  {
    month: "January",
    percentage: "96%",
  },
  {
    month: "February",
    percentage: "94%",
  },
  {
    month: "March",
    percentage: "95%",
  },
];

export default function ParentDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">Welcome Parent 👋</h1>

        <p className="mt-2 text-slate-600">
          Monitor your child's academic progress and activities.
        </p>
      </div>

      {/* Student Profile */}

      <section
        className="
        rounded-3xl
        border
        bg-white
        p-6
        shadow-sm
        "
      >
        <div className="flex items-center gap-5">
          <div
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-blue-100
            "
          >
            <User className="text-blue-600" size={32} />
          </div>

          <div>
            <h2 className="text-xl font-bold">Student Name</h2>

            <p className="text-slate-500">Grade 10 • Roll No: 24</p>
          </div>
        </div>
      </section>

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

              <h3 className="mt-2 text-3xl font-bold">{item.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Academic Progress */}

      <section>
        <h2 className="text-2xl font-bold">Academic Progress</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="
              rounded-3xl
              border
              bg-white
              p-6
              "
            >
              <div className="flex justify-between">
                <h3 className="font-bold">{subject.name}</h3>

                <span className="font-bold text-blue-600">{subject.grade}</span>
              </div>

              <div className="mt-5">
                <div
                  className="
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
                      width: `${subject.progress}%`,
                    }}
                  />
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  {subject.progress}% completed
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attendance */}

      <section>
        <h2 className="text-2xl font-bold">Attendance History</h2>

        <div className="mt-5 space-y-3">
          {attendance.map((item) => (
            <div
              key={item.month}
              className="
              flex
              justify-between
              rounded-xl
              border
              bg-white
              p-4
              "
            >
              <span>{item.month}</span>

              <span className="font-semibold text-blue-600">
                {item.percentage}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Message */}

      <section
        className="
        rounded-3xl
        border
        bg-white
        p-6
        "
      >
        <div className="flex items-center gap-3">
          <MessageCircle className="text-blue-600" />

          <h2 className="text-xl font-bold">Teacher Communication</h2>
        </div>

        <p className="mt-3 text-slate-600">
          You have no new messages from teachers.
        </p>
      </section>
    </div>
  );
}
