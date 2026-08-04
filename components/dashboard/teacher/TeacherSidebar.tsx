"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ChevronDown,
  GraduationCap,
  UserCircle,
  Mail,
  BookOpen,
  Star,
  Clock,
  Settings,
  LogOut,
} from "lucide-react";

import { teacherNav } from "./TeacherNav";

export default function TeacherSidebar() {
  const pathname = usePathname();

  const [openMenus, setOpenMenus] = useState<string[]>(["Courses", "Content"]);

  function toggleMenu(title: string) {
    setOpenMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  }

  return (
    <aside
      className="
      hidden
      md:flex
      h-screen
      w-72
      flex-col
      border-r
      bg-white
      "
    >
      {/* Logo */}

      <div className="p-5">
        <div
          className="
          rounded-2xl
          bg-blue-600
          p-5
          text-white
          shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-white/20
              "
            >
              <GraduationCap size={25} />
            </div>

            <div>
              <h1 className="text-xl font-bold">SJBEBS LMS</h1>

              <p className="text-sm text-blue-100">Teacher Panel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Profile */}

      <div className="px-5 pb-4">
        <div
          className="
          flex
          items-center
          gap-3
          rounded-xl
          border
          bg-gray-50
          p-3
          "
        >
          <UserCircle className="text-gray-500" size={38} />

          <div>
            <p className="text-sm font-semibold">Teacher</p>

            <p className="text-xs text-gray-500">Instructor Account</p>
          </div>
        </div>
      </div>

      {/* Navigation */}

      <nav
        className="
        flex-1
        space-y-2
        overflow-y-auto
        px-4
        "
      >
        {teacherNav.map((item) => {
          const Icon = item.icon;

          const isActive = item.href && pathname === item.href;

          const isOpen = openMenus.includes(item.title);

          return (
            <div key={item.title}>
              {/* Normal Link */}

              {item.href ? (
                <Link
                  href={item.href}
                  className={`
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition

                  ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }
                  `}
                >
                  <Icon size={20} />

                  {item.title}
                </Link>
              ) : (
                <>
                  {/* Dropdown */}

                  <button
                    onClick={() => toggleMenu(item.title)}
                    className="
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-gray-700
                    hover:bg-blue-50
                    hover:text-blue-600
                    "
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} />

                      {item.title}
                    </div>

                    <ChevronDown
                      size={16}
                      className={`
                      transition
                      ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  {/* Children */}

                  {isOpen && (
                    <div
                      className="
                      ml-6
                      mt-2
                      space-y-1
                      border-l
                      pl-3
                      "
                    >
                      {item.children?.map((child) => {
                        const childActive = pathname === child.href;

                        return (
                          <Link
                            key={child.title}
                            href={child.href}
                            className={`
                            block
                            rounded-lg
                            px-3
                            py-2
                            text-sm
                            transition

                            ${
                              childActive
                                ? "bg-blue-100 text-blue-700 font-semibold"
                                : "text-gray-600 hover:bg-gray-100"
                            }
                            `}
                          >
                            {child.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="p-5">
        <div
          className="
          rounded-xl
          border
          bg-gray-50
          p-4
          text-center
          "
        >
          <p className="text-xs text-gray-500">SJBEBS LMS</p>

          <p className="mt-1 text-sm font-medium">Teaching made simple</p>
        </div>
      </div>
    </aside>
  );
}
