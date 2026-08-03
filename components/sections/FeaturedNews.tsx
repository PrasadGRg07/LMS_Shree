import Container from "@/components/common/Container";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function FeaturedNews() {
  const featuredNews = news.filter((item) => item.featured);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Featured Updates
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Important School News
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Explore important announcements, events, and achievements from our
            school.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredNews.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
