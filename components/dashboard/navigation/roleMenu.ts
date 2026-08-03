import {
  LayoutDashboard,
  BookOpen,
  Users,
  ClipboardCheck,
  Calendar,
  Award,
  Settings,
  DollarSign,
  FileText,
  MessageCircle,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  Bell,
  CreditCard,
  Library,
  Bus,
  Newspaper,
} from "lucide-react";

export const roleMenu = {
  student: [
    {
      name: "Dashboard",
      href: "/dashboard/student",
      icon: LayoutDashboard,
    },
    {
      name: "My Courses",
      href: "/dashboard/student/courses",
      icon: BookOpen,
    },
    {
      name: "Routine",
      href: "/dashboard/student/routine",
      icon: CalendarDays,
    },
    {
      name: "Assignments",
      href: "/dashboard/student/assignments",
      icon: ClipboardCheck,
    },
    {
      name: "Attendance",
      href: "/dashboard/student/attendance",
      icon: Calendar,
    },
    {
      name: "Results",
      href: "/dashboard/student/results",
      icon: Award,
    },
    {
      name: "Exams",
      href: "/dashboard/student/exams",
      icon: ClipboardList,
    },
    {
      name: "Notices",
      href: "/dashboard/student/notices",
      icon: Bell,
    },
    {
      name: "Messages",
      href: "/dashboard/student/messages",
      icon: MessageCircle,
    },
    {
      name: "Settings",
      href: "/dashboard/student/settings",
      icon: Settings,
    },
  ],

  teacher: [
    {
      name: "Dashboard",
      href: "/dashboard/teacher",
      icon: LayoutDashboard,
    },
    {
      name: "Courses",
      href: "/dashboard/teacher/courses",
      icon: BookOpen,
    },
    {
      name: "Routine",
      href: "/dashboard/teacher/routine",
      icon: CalendarDays,
    },
    {
      name: "Students",
      href: "/dashboard/teacher/students",
      icon: Users,
    },
    {
      name: "Assignments",
      href: "/dashboard/teacher/assignments",
      icon: ClipboardCheck,
    },
    {
      name: "Attendance",
      href: "/dashboard/teacher/attendance",
      icon: Calendar,
    },
    {
      name: "Grades",
      href: "/dashboard/teacher/grades",
      icon: GraduationCap,
    },
    {
      name: "Messages",
      href: "/dashboard/teacher/messages",
      icon: MessageCircle,
    },
    {
      name: "Settings",
      href: "/dashboard/teacher/settings",
      icon: Settings,
    },
  ],

  parent: [
    {
      name: "Dashboard",
      href: "/dashboard/parent",
      icon: LayoutDashboard,
    },
    {
      name: "Child Progress",
      href: "/dashboard/parent/progress",
      icon: Award,
    },
    {
      name: "Routine",
      href: "/dashboard/parent/routine",
      icon: CalendarDays,
    },
    {
      name: "Attendance",
      href: "/dashboard/parent/attendance",
      icon: Calendar,
    },
    {
      name: "Results",
      href: "/dashboard/parent/results",
      icon: GraduationCap,
    },
    {
      name: "Fees",
      href: "/dashboard/parent/fees",
      icon: CreditCard,
    },
    {
      name: "Messages",
      href: "/dashboard/parent/messages",
      icon: MessageCircle,
    },
    {
      name: "Settings",
      href: "/dashboard/parent/settings",
      icon: Settings,
    },
  ],

  admin: [
    {
      name: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      name: "Students",
      href: "/dashboard/admin/students",
      icon: Users,
    },
    {
      name: "Teachers",
      href: "/dashboard/admin/teachers",
      icon: Users,
    },
    {
      name: "Parents",
      href: "/dashboard/admin/parents",
      icon: Users,
    },
    {
      name: "Courses",
      href: "/dashboard/admin/courses",
      icon: BookOpen,
    },
    {
      name: "Routine",
      href: "/dashboard/admin/routine",
      icon: CalendarDays,
    },
    {
      name: "Attendance",
      href: "/dashboard/admin/attendance",
      icon: Calendar,
    },
    {
      name: "Examinations",
      href: "/dashboard/admin/examinations",
      icon: ClipboardList,
    },
    {
      name: "Library",
      href: "/dashboard/admin/library",
      icon: Library,
    },
    {
      name: "Transport",
      href: "/dashboard/admin/transport",
      icon: Bus,
    },
    {
      name: "News",
      href: "/dashboard/admin/news",
      icon: Newspaper,
    },
    {
      name: "Finance",
      href: "/dashboard/admin/finance",
      icon: DollarSign,
    },
    {
      name: "Reports",
      href: "/dashboard/admin/reports",
      icon: FileText,
    },
    {
      name: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};