import Link from "next/link";
import Image from "next/image";

import Container from "@/components/common/Container";
import { news, NewsItem } from "@/data/news";

interface RelatedNewsProps {
  currentSlug: string;
}

export default function RelatedNews({ currentSlug }: RelatedNewsProps) {
  const relatedNews = news
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Related News</h2>

          <p className="mt-3 text-slate-600">
            Explore more school events, announcements, and updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {relatedNews.map((item: NewsItem) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                  {item.category}
                </span>
              </div>

              {/* Content */}

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 line-clamp-2 text-slate-600">
                  {item.description}
                </p>

                <Link
                  href={`/news/${item.slug}`}
                  className="mt-5 inline-block font-semibold text-blue-600 hover:text-blue-700"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
