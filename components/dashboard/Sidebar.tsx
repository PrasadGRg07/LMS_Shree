"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

import { roleMenu } from "./navigation/roleMenu";

type Role = "student" | "teacher" | "parent" | "admin";

export default function Sidebar() {
  const pathname = usePathname();
  const role: Role = pathname.includes("/dashboard/teacher")
    ? "teacher"
    : pathname.includes("/dashboard/parent")
      ? "parent"
      : pathname.includes("/dashboard/admin")
        ? "admin"
        : "student";

  const menus = roleMenu[role];

  return (
    <aside
      className="
      hidden
      h-screen
      w-72
      border-r
      bg-white
      p-6
      lg:block
      "
    >
      <div
        className="
        text-2xl
        font-bold
        text-blue-600
        "
      >
        School LMS
      </div>

      <nav className="mt-10 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
              flex
              items-center
              gap-4
              rounded-xl
              px-4
              py-3
              transition
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              }
              `}
            >
              <Icon size={21} />

              {item.name}
            </Link>
          );
        })}
      </nav>

      <button
        className="
        absolute
        bottom-8
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-red-600
        hover:bg-red-50
        "
      >
        <LogOut size={21} />
        Logout
      </button>
    </aside>
  );
}
