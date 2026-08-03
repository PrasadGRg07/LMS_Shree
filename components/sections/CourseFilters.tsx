"use client";

import { Search } from "lucide-react";

export default function CourseFilters() {
  return (
    <section className="sticky top-20 z-20 border-y border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-4 lg:grid-cols-4">
          {/* Search */}
          <div className="relative lg:col-span-2">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search courses..."
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          {/* Category */}
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Science</option>
            <option>Mathematics</option>
            <option>Languages</option>
            <option>Commerce</option>
          </select>

          {/* Grade */}
          <select className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100">
            <option>All Grades</option>
            <option>Grade 7</option>
            <option>Grade 8</option>
            <option>Grade 9</option>
            <option>Grade 10</option>
            <option>Grade 11</option>
            <option>Grade 12</option>
          </select>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-600">
            Showing <span className="font-semibold text-blue-600">6</span>{" "}
            courses
          </p>

          <button className="rounded-xl border border-slate-300 px-5 py-2 font-medium text-slate-700 transition hover:border-red-500 hover:text-red-600">
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
}
