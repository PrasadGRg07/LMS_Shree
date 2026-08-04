"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { teacherNav } from "./TeacherNav";
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
  X,
} from "lucide-react";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function TeacherMobileSidebar({ open, setOpen }: Props) {
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
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="w-72 p-0">
        {/* Logo Section */}

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
            rounded-xl
            border
            bg-gray-50
            p-4
            "
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-100
                  ring-2
                  ring-blue-600/20
                  "
                >
                  <UserCircle className="text-blue-600" size={30} />
                </div>

                <div
                  className="
                  absolute
                  -bottom-0.5
                  -right-0.5
                  h-3.5
                  w-3.5
                  rounded-full
                  border-2
                  border-white
                  bg-emerald-500
                  "
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  Sarah Johnson
                </p>

                <p className="text-xs text-gray-500">Mathematics Teacher</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Mail size={14} />

                <span className="truncate">sarah.j@sjbebs.edu</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <BookOpen size={14} />

                <span>4 Active Courses</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Star size={14} />

                <span>4.8 Rating</span>
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Clock size={14} />

                <span>3 Years Teaching</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
              mt-4
              w-full
              rounded-lg
              border
              border-blue-200
              bg-blue-50
              px-3
              py-2
              text-xs
              font-medium
              text-blue-600
              transition
              hover:bg-blue-100
              hover:text-blue-700
              "
            >
              View Full Profile
            </button>
          </div>
        </div>

        {/* Navigation */}

        <nav
          className="
          flex-1
          space-y-2
          overflow-y-auto
          px-4
          pb-4
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
                    onClick={() => setOpen(false)}
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
                              onClick={() => setOpen(false)}
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

        {/* Bottom Actions */}

        <div className="border-t p-4 space-y-2">
          <button
            className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-gray-700
            transition
            hover:bg-gray-100
            "
          >
            <Settings size={20} />
            Settings
          </button>

          <button
            className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-red-600
            transition
            hover:bg-red-50
            "
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Footer */}

        <div className="p-5 pt-0">
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
      </SheetContent>
    </Sheet>
  );
}
