"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can enroll in this course?",
    answer:
      "This course is designed for students who meet the required grade level and want to improve their knowledge and practical skills.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Students who successfully complete the course requirements will receive a certificate of completion.",
  },
  {
    question: "Are assignments included?",
    answer:
      "Yes. The course includes assignments, activities, quizzes, and practical exercises.",
  },
  {
    question: "Can I contact the instructor?",
    answer:
      "Yes. Students can communicate with instructors through the LMS after enrollment.",
  },
];

export default function CourseFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Find answers to common questions about this course.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
