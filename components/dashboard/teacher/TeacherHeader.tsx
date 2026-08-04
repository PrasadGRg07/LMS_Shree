"use client";

import {
  Bell,
  Menu,
  Search,
  MessageSquare,
  HelpCircle,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";

import TeacherMobileSidebar from "./TeacherMobileSidebar";
import TeacherProfileMenu from "./TeacherProfileMenu";

export default function TeacherHeader() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(2);
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <TeacherMobileSidebar open={open} setOpen={setOpen} />

      <header
        className="
        sticky
        top-0
        z-30
        flex
        h-16
        items-center
        justify-between
        border-b
        border-gray-200
        bg-white
        px-6
        shadow-sm
        "
      >
        {/* Left Section - Mobile Menu & Title */}

        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(true)}
            className="
            rounded-lg
            p-2
            text-gray-500
            transition
            hover:bg-blue-50
            hover:text-blue-600
            md:hidden
            "
          >
            <Menu size={22} />
          </button>

          <h1 className="text-lg font-semibold text-gray-900">
            Teacher Dashboard
          </h1>
        </div>

        {/* Center Section - Search Bar */}

        <div className="hidden md:flex flex-1 justify-center mx-8">
          <div
            className="
            flex
            w-full
            max-w-md
            items-center
            gap-2
            rounded-xl
            border
            border-gray-200
            bg-gray-50
            px-4
            py-2
            transition
            focus-within:border-blue-300
            focus-within:bg-white
            focus-within:ring-2
            focus-within:ring-blue-100
            "
          >
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search courses, students..."
              className="
              w-full
              bg-transparent
              text-sm
              text-gray-700
              placeholder-gray-400
              outline-none
              "
            />
          </div>
        </div>

        {/* Right Section - Icons & Profile */}

        <div className="flex items-center gap-1">
          {/* Messages */}

          <button
            className="
            relative
            rounded-lg
            p-2.5
            text-gray-500
            transition
            hover:bg-green-50
            hover:text-green-600
            "
          >
            <MessageSquare size={20} />

            {messages > 0 && (
              <span
                className="
                absolute
                -right-0.5
                -top-0.5
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-[10px]
                font-bold
                text-white
                ring-2
                ring-white
                "
              >
                {messages}
              </span>
            )}
          </button>

          {/* Notifications */}

          <button
            className="
            relative
            rounded-lg
            p-2.5
            text-gray-500
            transition
            hover:bg-orange-50
            hover:text-orange-600
            "
          >
            <Bell size={20} />

            {notifications > 0 && (
              <>
                <span
                  className="
                  absolute
                  -right-0.5
                  -top-0.5
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-red-500
                  text-[10px]
                  font-bold
                  text-white
                  ring-2
                  ring-white
                  "
                >
                  {notifications}
                </span>

                <span
                  className="
                  absolute
                  -right-0.5
                  -top-0.5
                  h-5
                  w-5
                  animate-ping
                  rounded-full
                  bg-red-400
                  opacity-75
                  "
                />
              </>
            )}
          </button>

          {/* Help */}

          <button
            className="
            hidden
            rounded-lg
            p-2.5
            text-gray-500
            transition
            hover:bg-teal-50
            hover:text-teal-600
            md:block
            "
          >
            <HelpCircle size={20} />
          </button>

          {/* Theme Toggle */}

          <button
            onClick={() => setIsDark(!isDark)}
            className="
            rounded-lg
            p-2.5
            text-gray-500
            transition
            hover:bg-purple-50
            hover:text-purple-600
            "
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Divider */}

          <div className="mx-2 h-8 w-px bg-gray-200" />

          {/* Profile */}

          <TeacherProfileMenu />
        </div>
      </header>
    </>
  );
}
