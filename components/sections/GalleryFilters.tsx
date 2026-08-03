"use client";

import { useState } from "react";

const categories = [
  "All",
  "Campus",
  "Events",
  "Sports",
  "Classroom",
  "Achievements",
];

export default function GalleryFilters() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-slate-700 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
