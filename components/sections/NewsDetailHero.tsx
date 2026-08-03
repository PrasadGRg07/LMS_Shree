import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays, User } from "lucide-react";

import Container from "@/components/common/Container";
import { NewsItem } from "@/data/news";

interface NewsDetailHeroProps {
  item: NewsItem;
}

export default function NewsDetailHero({ item }: NewsDetailHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative z-10">
        <Container>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>

          <div className="mt-10 max-w-4xl">
            {/* Category */}

            <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
              {item.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
              {item.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">
              {item.description}
            </p>

            {/* Meta */}

            <div className="mt-8 flex flex-wrap gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />

                {item.date}
              </div>

              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />

                {item.author}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
