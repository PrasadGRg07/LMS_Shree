"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function TeacherFilters() {
  const [search, setSearch] = useState("");
  const [subject, setSubject] = useState("All");

  const subjects = [
    "All",
    "Computer Science",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
  ];

  return (
    <section className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search teachers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 py-3 pl-12 pr-4 outline-none transition focus:border-blue-500"
              />
            </div>

            {/* Subject Filter */}
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              {subjects.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Current Filter Preview */}
          <div className="mt-5 text-sm text-slate-500">
            Searching:
            <span className="ml-2 font-semibold text-blue-600">
              {search || "All Teachers"}
            </span>
            {" • "}
            Subject:
            <span className="ml-2 font-semibold text-blue-600">{subject}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
