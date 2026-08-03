"use client";

import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      className="
    bg-slate-50
    py-24
    "
    >
      <div
        className="
      mx-auto
      max-w-7xl
      px-6
      "
      >
        <div className="text-center">
          <span
            className="
          rounded-full
          bg-blue-100
          px-5
          py-2
          text-sm
          font-semibold
          text-blue-700
          "
          >
            Testimonials
          </span>

          <h2
            className="
          mt-6
          text-4xl
          font-bold
          text-slate-900
          md:text-5xl
          "
          >
            What Our Community Says
          </h2>

          <p
            className="
          mx-auto
          mt-5
          max-w-2xl
          text-slate-600
          "
          >
            Hear from students, parents, and teachers about their experience.
          </p>
        </div>

        <div
          className="
        mt-14
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
        "
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
