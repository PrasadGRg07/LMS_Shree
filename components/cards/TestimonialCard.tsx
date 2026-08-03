"use client";

import { Star } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  message: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  role,
  image,
  message,
  rating,
}: TestimonialProps) {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      p-8
      shadow-lg
      transition
      duration-300
      hover:-translate-y-2
      "
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="
          h-16
          w-16
          rounded-full
          object-cover
          "
        />

        <div>
          <h3
            className="
          font-bold
          text-slate-900
          "
          >
            {name}
          </h3>

          <p
            className="
          text-sm
          text-slate-500
          "
          >
            {role}
          </p>
        </div>
      </div>

      <div className="mt-5 flex">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="
          h-5
          w-5
          fill-yellow-400
          text-yellow-400
          "
          />
        ))}
      </div>

      <p
        className="
      mt-5
      leading-7
      text-slate-600
      "
      >
        "{message}"
      </p>
    </div>
  );
}
