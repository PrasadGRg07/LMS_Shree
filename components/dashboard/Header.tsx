"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const role = pathname.includes("/dashboard/teacher")
    ? "Teacher"
    : pathname.includes("/dashboard/parent")
      ? "Parent"
      : pathname.includes("/dashboard/admin")
        ? "Admin"
        : "Student";

  return (
    <header
      className="
      flex
      h-20
      items-center
      justify-between
      border-b
      bg-white
      px-8
      "
    >
      <h1 className="text-xl font-bold text-slate-900">Welcome Back 👋</h1>

      <div
        className="
        flex
        items-center
        gap-4
        "
      >
        <div className="text-right">
          <p className="font-semibold">Mr. Sharma</p>

          <p className="text-sm text-slate-500">{role}</p>
        </div>

        <div
          className="
          h-10
          w-10
          rounded-full
          bg-blue-600
          "
        />
      </div>
    </header>
  );
}
