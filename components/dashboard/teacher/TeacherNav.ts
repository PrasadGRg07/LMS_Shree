import {
  LayoutDashboard,
  BookOpen,
  FileText,
  ClipboardList,
  Users,
  CalendarCheck,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Settings,
} from "lucide-react";

export const teacherNav = [
  {
    title: "Dashboard",
    href: "/dashboard/teacher",
    icon: LayoutDashboard,
  },

  {
    title: "Courses",
    icon: BookOpen,
    children: [
      {
        title: "My Courses",
        href: "/dashboard/teacher/courses",
      },
      {
        title: "Create Course",
        href: "/dashboard/teacher/courses/create",
      },
    ],
  },

  {
    title: "Content",
    icon: FileText,
    children: [
      {
        title: "Lessons",
        href: "/dashboard/teacher/lessons",
      },
      {
        title: "Assignments",
        href: "/dashboard/teacher/assignments",
      },
      {
        title: "Quizzes",
        href: "/dashboard/teacher/quizzes",
      },
    ],
  },

  {
    title: "Students",
    href: "/dashboard/teacher/students",
    icon: Users,
  },

  {
    title: "Attendance",
    href: "/dashboard/teacher/attendance",
    icon: CalendarCheck,
  },

  {
    title: "Grades",
    href: "/dashboard/teacher/grades",
    icon: GraduationCap,
  },

  {
    title: "Analytics",
    href: "/dashboard/teacher/analytics",
    icon: BarChart3,
  },

  {
    title: "Messages",
    href: "/dashboard/teacher/messages",
    icon: MessageSquare,
  },

  {
    title: "Settings",
    href: "/dashboard/teacher/settings",
    icon: Settings,
  },
];