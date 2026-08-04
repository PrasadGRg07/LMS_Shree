import {
  Calendar,
  Clock,
  FileText,
  Video,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    title: "Grade React Assignment",
    type: "Assignment",
    date: "Aug 10, 2026",
    time: "10:00 AM",
    icon: FileText,
    color: "blue",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    priority: "High",
    students: "24 Students",
  },

  {
    title: "Database Quiz Review",
    type: "Quiz",
    date: "Aug 12, 2026",
    time: "2:00 PM",
    icon: Clock,
    color: "purple",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    iconBg: "bg-purple-100",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-700",
    priority: "Medium",
    students: "18 Students",
  },

  {
    title: "Live React Session",
    type: "Live Class",
    date: "Aug 15, 2026",
    time: "11:30 AM",
    icon: Video,
    color: "green",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    iconBg: "bg-green-100",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
    priority: "High",
    students: "32 Students",
  },
];

export default function UpcomingTasks() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Upcoming Tasks</h2>

        <Link
          href="/dashboard/teacher/tasks"
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

      <div className="space-y-3">
        {tasks.map((task) => {
          const Icon = task.icon;

          return (
            <div
              key={task.title}
              className="
              group
              relative
              flex
              items-center
              justify-between
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
              <div className="flex items-center gap-4">
                <div
                  className={`
                  rounded-xl
                  ${task.iconBg}
                  p-3
                  transition-all
                  duration-200
                  group-hover:scale-110
                  `}
                >
                  <Icon size={22} className={task.textColor} />
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 group-hover:text-gray-700">
                    {task.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`
                      text-xs
                      font-medium
                      px-2
                      py-0.5
                      rounded-full
                      ${task.badgeBg}
                      ${task.badgeText}
                      `}
                    >
                      {task.type}
                    </span>

                    {task.priority === "High" && (
                      <span
                        className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-medium
                        text-red-600
                        bg-red-50
                        px-2
                        py-0.5
                        rounded-full
                        "
                      >
                        <AlertCircle size={12} />

                        {task.priority}
                      </span>
                    )}

                    {task.priority === "Medium" && (
                      <span
                        className="
                        flex
                        items-center
                        gap-1
                        text-xs
                        font-medium
                        text-amber-600
                        bg-amber-50
                        px-2
                        py-0.5
                        rounded-full
                        "
                      >
                        <AlertCircle size={12} />

                        {task.priority}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-2 text-sm text-gray-600 justify-end">
                  <Calendar size={15} className="text-gray-400" />

                  <span>{task.date}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1.5 justify-end">
                  <Clock size={15} className="text-gray-400" />

                  <span>{task.time}</span>
                </div>

                <div className="mt-2">
                  <span
                    className="
                    text-xs
                    text-gray-400
                    group-hover:text-gray-600
                    transition
                    "
                  >
                    {task.students}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
