"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

import { roleMenu } from "./navigation/roleMenu";

type Role = "student" | "teacher" | "parent" | "admin";

export default function Sidebar() {
  // temporary role
  // later this comes from auth context
  const role: Role = "student";

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

          return (
            <Link
              key={item.name}
              href={item.href}
              className="
              flex
              items-center
              gap-4
              rounded-xl
              px-4
              py-3
              text-slate-700
              transition
              hover:bg-blue-50
              hover:text-blue-600
              "
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
