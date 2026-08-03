"use client";

import { useState } from "react";

const categories = ["All", "Notice", "Events", "Announcement", "Achievement"];

export default function NewsFilters() {
  const [active, setActive] = useState("All");

  return (
    <section className="bg-slate-50 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4 px-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              active === category
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-700 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}
