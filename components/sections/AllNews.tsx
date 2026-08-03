import Container from "@/components/common/Container";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function AllNews() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14">
          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Latest Updates
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Read the latest school announcements, events, achievements, and
            important updates.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
