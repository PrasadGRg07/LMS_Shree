"use client";

import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function NewsPreview() {
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
            Latest News
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
            School Updates & Events
          </h2>

          <p
            className="
mx-auto
mt-5
max-w-2xl
text-slate-600
"
          >
            Stay updated with the latest activities, announcements, and
            achievements.
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
          {news.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
