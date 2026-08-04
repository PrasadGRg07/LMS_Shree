"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  User,
  Settings,
  LogOut,
  BookOpen,
  Star,
  Clock,
  Award,
  HelpCircle,
  Bell,
  ChevronDown,
} from "lucide-react";

export default function TeacherProfileMenu() {
  function handleLogout() {
    console.log("Logout clicked");
    // Later connect your auth logout function here
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
        flex
        items-center
        gap-3
        rounded-lg
        p-1.5
        outline-none
        transition
        hover:bg-gray-100
        cursor-pointer
        "
      >
        <div className="relative">
          <Avatar className="h-9 w-9 ring-2 ring-blue-100">
            <AvatarFallback className="bg-blue-600 text-white font-semibold">
              SJ
            </AvatarFallback>
          </Avatar>

          <div
            className="
            absolute
            -bottom-0.5
            -right-0.5
            h-3
            w-3
            rounded-full
            border-2
            border-white
            bg-emerald-500
            "
          />
        </div>

        <div className="hidden md:block text-left">
          <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>

          <p className="text-xs text-gray-500">Mathematics Teacher</p>
        </div>

        <ChevronDown size={16} className="hidden md:block text-gray-400" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72 p-2">
        {/* Profile Header */}

        <div className="px-3 py-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-blue-100">
              <AvatarFallback className="bg-blue-600 text-white font-semibold text-lg">
                SJ
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-sm font-semibold text-gray-900">
                Sarah Johnson
              </p>

              <p className="text-xs text-gray-500">Mathematics Teacher</p>

              <p className="text-xs text-blue-600 mt-0.5">sarah.j@sjbebs.edu</p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Stats Section */}

        <div className="px-3 py-2">
          <div className="grid grid-cols-2 gap-2">
            <div
              className="
              rounded-lg
              bg-blue-50
              p-2.5
              text-center
              "
            >
              <BookOpen size={16} className="mx-auto text-blue-600 mb-1" />

              <p className="text-sm font-bold text-blue-700">4</p>

              <p className="text-[10px] text-blue-600">Courses</p>
            </div>

            <div
              className="
              rounded-lg
              bg-amber-50
              p-2.5
              text-center
              "
            >
              <Star size={16} className="mx-auto text-amber-600 mb-1" />

              <p className="text-sm font-bold text-amber-700">4.8</p>

              <p className="text-[10px] text-amber-600">Rating</p>
            </div>

            <div
              className="
              rounded-lg
              bg-emerald-50
              p-2.5
              text-center
              "
            >
              <Award size={16} className="mx-auto text-emerald-600 mb-1" />

              <p className="text-sm font-bold text-emerald-700">12</p>

              <p className="text-[10px] text-emerald-600">Badges</p>
            </div>

            <div
              className="
              rounded-lg
              bg-purple-50
              p-2.5
              text-center
              "
            >
              <Clock size={16} className="mx-auto text-purple-600 mb-1" />

              <p className="text-sm font-bold text-purple-700">3yr</p>

              <p className="text-[10px] text-purple-600">Experience</p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* Menu Items */}

        <DropdownMenuItem
          className="
          rounded-lg
          px-3
          py-2.5
          text-sm
          cursor-pointer
          hover:bg-blue-50
          hover:text-blue-600
          "
        >
          <User className="mr-3 h-4 w-4" />

          <div className="flex flex-col">
            <span className="font-medium">View Profile</span>

            <span className="text-xs text-gray-500">Manage your account</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="
          rounded-lg
          px-3
          py-2.5
          text-sm
          cursor-pointer
          hover:bg-orange-50
          hover:text-orange-600
          "
        >
          <Bell className="mr-3 h-4 w-4" />

          <div className="flex flex-col">
            <span className="font-medium">Notifications</span>

            <span className="text-xs text-gray-500">3 new alerts</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="
          rounded-lg
          px-3
          py-2.5
          text-sm
          cursor-pointer
          hover:bg-teal-50
          hover:text-teal-600
          "
        >
          <HelpCircle className="mr-3 h-4 w-4" />

          <div className="flex flex-col">
            <span className="font-medium">Help Center</span>

            <span className="text-xs text-gray-500">FAQs & support</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem
          className="
          rounded-lg
          px-3
          py-2.5
          text-sm
          cursor-pointer
          hover:bg-gray-100
          "
        >
          <Settings className="mr-3 h-4 w-4" />

          <div className="flex flex-col">
            <span className="font-medium">Settings</span>

            <span className="text-xs text-gray-500">Preferences & privacy</span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="
          rounded-lg
          px-3
          py-2.5
          text-sm
          text-red-600
          cursor-pointer
          hover:bg-red-50
          hover:text-red-700
          "
        >
          <LogOut className="mr-3 h-4 w-4" />

          <div className="flex flex-col">
            <span className="font-medium">Logout</span>

            <span className="text-xs text-red-400">End your session</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
