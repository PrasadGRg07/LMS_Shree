import Link from "next/link";
import {
  PlusCircle,
  Video,
  ClipboardPlus,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Create Course",
    description: "Create a new course",
    href: "/dashboard/teacher/courses/create",
    icon: PlusCircle,
    color: "blue",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    hoverBg: "hover:bg-blue-100",
    borderColor: "hover:border-blue-200",
    iconBg: "bg-blue-100",
    count: "12 Courses",
  },

  {
    title: "Add Lesson",
    description: "Add content to courses",
    href: "/dashboard/teacher/lessons/create",
    icon: Video,
    color: "purple",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    hoverBg: "hover:bg-purple-100",
    borderColor: "hover:border-purple-200",
    iconBg: "bg-purple-100",
    count: "48 Lessons",
  },

  {
    title: "Create Assignment",
    description: "Give students tasks",
    href: "/dashboard/teacher/assignments/create",
    icon: ClipboardPlus,
    color: "orange",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    hoverBg: "hover:bg-orange-100",
    borderColor: "hover:border-orange-200",
    iconBg: "bg-orange-100",
    count: "8 Active",
  },

  {
    title: "Create Quiz",
    description: "Create assessments",
    href: "/dashboard/teacher/quizzes/create",
    icon: HelpCircle,
    color: "green",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    hoverBg: "hover:bg-green-100",
    borderColor: "hover:border-green-200",
    iconBg: "bg-green-100",
    count: "15 Quizzes",
  },
];

export default function TeacherQuickActions() {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>

        <Link
          href="/dashboard/teacher/create"
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

      <div
        className="
        grid
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className={`
              group
              rounded-xl
              border
              border-gray-200
              bg-white
              p-5
              transition-all
              duration-200
              hover:border-2
              ${action.borderColor}
              `}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`
                  rounded-xl
                  ${action.iconBg}
                  p-3
                  transition-all
                  duration-200
                  group-hover:scale-110
                  `}
                >
                  <Icon size={24} className={action.textColor} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700">
                    {action.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-0.5">
                    {action.description}
                  </p>

                  <div className="flex items-center justify-between mt-3">
                    <span
                      className={`
                      text-xs
                      font-medium
                      px-2
                      py-1
                      rounded-full
                      ${action.bgColor}
                      ${action.textColor}
                      `}
                    >
                      {action.count}
                    </span>

                    <ArrowRight
                      size={16}
                      className={`
                      ${action.textColor}
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-200
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      `}
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
