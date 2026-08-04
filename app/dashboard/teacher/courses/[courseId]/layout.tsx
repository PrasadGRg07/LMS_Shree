import Link from "next/link";
import {
  BarChart3,
  BookOpen,
  FileText,
  GraduationCap,
  LayoutDashboard,
  ListChecks,
  Users,
} from "lucide-react";
import { ReactNode } from "react";

interface CourseLayoutProps {
  children: ReactNode;
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const { courseId } = await params;

  const menuItems = [
    {
      title: "Overview",
      href: `/dashboard/teacher/courses/${courseId}`,
      icon: LayoutDashboard,
    },
    {
      title: "Lessons",
      href: `/dashboard/teacher/courses/${courseId}/lessons`,
      icon: BookOpen,
    },
    {
      title: "Assignments",
      href: `/dashboard/teacher/courses/${courseId}/assignments`,
      icon: FileText,
    },
    {
      title: "Quizzes",
      href: `/dashboard/teacher/courses/${courseId}/quizzes`,
      icon: ListChecks,
    },
    {
      title: "Students",
      href: `/dashboard/teacher/courses/${courseId}/students`,
      icon: Users,
    },
    {
      title: "Analytics",
      href: `/dashboard/teacher/courses/${courseId}/analytics`,
      icon: BarChart3,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
            <GraduationCap size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Course Management
            </h1>
            <p className="text-sm text-gray-500">
              Manage your course content, students and performance
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col items-center justify-center gap-2 rounded-xl border bg-white p-4 text-center transition hover:border-black hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition group-hover:bg-black group-hover:text-white">
                <Icon size={20} />
              </div>

              <span className="text-sm font-medium text-gray-800">
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Page Content */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}
