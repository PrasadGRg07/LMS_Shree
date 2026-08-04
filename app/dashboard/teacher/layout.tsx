import TeacherSidebar from "@/components/dashboard/teacher/TeacherSidebar";
import TeacherHeader from "@/components/dashboard/teacher/TeacherHeader";

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-gradient-to-br
      from-slate-50
      via-blue-50/40
      to-purple-50/40
      "
    >
      {/* Sidebar */}
      <TeacherSidebar />

      {/* Main Area */}
      <div
        className="
        flex
        flex-1
        flex-col
        "
      >
        {/* Header */}
        <TeacherHeader />

        {/* Content */}
        <main
          className="
          flex-1
          p-4
          md:p-6
          lg:p-8
          "
        >
          <div
            className="
            mx-auto
            w-full
            max-w-7xl
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
