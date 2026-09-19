import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";

import { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

export default function GalleryCard({ item }: GalleryCardProps) {
  if (!item) {
    return null;
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        <p className="mt-3 leading-7 text-slate-600">{item.description}</p>

        {/* Date */}
        <div className="mt-5 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-5 w-5 text-blue-600" />

          {item.date}
        </div>

        {/* View Details */}
        <Link
          href={`/gallery/${item.slug}`}
          className="mt-6 inline-flex items-center font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
