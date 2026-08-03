import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, MapPin } from "lucide-react";

import Container from "@/components/common/Container";
import { GalleryItem } from "@/data/gallery";

interface GalleryDetailHeroProps {
  item: GalleryItem;
}

export default function GalleryDetailHero({ item }: GalleryDetailHeroProps) {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        {/* Back */}
        <Link
          href="/gallery"
          className="mb-8 inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Gallery
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[450px] overflow-hidden rounded-3xl">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              {item.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              {item.title}
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              {item.description}
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-blue-400" />

                {item.date}
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-400" />

                {item.location}
              </div>
            </div>

            <button className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700">
              Join Program
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
