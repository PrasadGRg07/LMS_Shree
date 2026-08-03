import Image from "next/image";
import Link from "next/link";
import { CalendarDays, User } from "lucide-react";

import { NewsItem } from "@/data/news";

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  if (!item) {
    return null;
  }

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category */}
        <div className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
          {item.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>

        <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
          {item.description}
        </p>

        {/* Meta */}
        <div className="mt-5 space-y-3 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-5 w-5 text-blue-600" />

            {item.date}
          </div>

          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-blue-600" />

            {item.author}
          </div>
        </div>

        {/* Details */}
        <Link
          href={`/news/${item.slug}`}
          className="mt-6 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}
