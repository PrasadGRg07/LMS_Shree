"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";

import { Course } from "@/data/courses";

interface CurriculumProps {
  course: Course;
}

export default function Curriculum({ course }: CurriculumProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="curriculum" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Curriculum
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Course Curriculum
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Explore each module and see what you will learn.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {course.curriculum.map((module, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <BookOpen className="h-6 w-6 text-blue-600" />

                  <span className="text-lg font-semibold text-slate-900">
                    {module.title}
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    {module.lessons} Lessons
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {open === index && (
                <div className="border-t px-6 py-5 text-slate-600">
                  This module includes lessons, activities, quizzes, and
                  practical exercises to help students master {module.title}.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
