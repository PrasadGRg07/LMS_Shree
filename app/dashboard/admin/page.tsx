import {
  Users,
  GraduationCap,
  BookOpen,
  DollarSign,
  UserPlus,
  FileText,
  Megaphone,
  BarChart3,
} from "lucide-react";

const stats = [
  {
    title: "Total Students",
    value: "2,450",
    icon: Users,
  },
  {
    title: "Total Teachers",
    value: "145",
    icon: GraduationCap,
  },
  {
    title: "Total Courses",
    value: "86",
    icon: BookOpen,
  },
  {
    title: "Revenue",
    value: "$45,800",
    icon: DollarSign,
  },
];

const management = [
  {
    title: "Manage Students",
    description: "View and manage student accounts",
    icon: Users,
  },
  {
    title: "Manage Teachers",
    description: "Approve and manage teachers",
    icon: GraduationCap,
  },
  {
    title: "Course Management",
    description: "Create and update courses",
    icon: BookOpen,
  },
  {
    title: "Financial Reports",
    description: "Track school payments",
    icon: DollarSign,
  },
];

const activities = [
  {
    title: "New Student Registered",
    description: "25 new students joined this week",
  },
  {
    title: "Teacher Approved",
    description: "5 teacher accounts were approved",
  },
  {
    title: "New Course Published",
    description: "Computer Science course was published",
  },
];

const quickActions = [
  {
    title: "Add Student",
    icon: UserPlus,
  },
  {
    title: "Create Announcement",
    icon: Megaphone,
  },
  {
    title: "Generate Report",
    icon: FileText,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Admin Dashboard 🏫
        </h1>

        <p className="mt-2 text-slate-600">
          Manage your entire school LMS system.
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
          {quickActions.map((item) => {
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
                hover:bg-blue-50
                hover:border-blue-500
                "
              >
                <Icon size={22} className="text-blue-600" />

                {item.title}
              </button>
            );
          })}
        </div>
      </section>

      {/* Management */}

      <section>
        <h2 className="text-2xl font-bold">Management</h2>

        <div className="mt-6 grid gap-6 lg:grid-cols-4">
          {management.map((item) => {
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
                <Icon size={30} className="text-blue-600" />

                <h3 className="mt-5 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
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

              <p className="mt-1 text-slate-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
