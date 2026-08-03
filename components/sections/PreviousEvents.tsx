import Container from "@/components/common/Container";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function PreviousEvents() {
  const previousEvents = news.filter((item) => item.type === "previous");

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-12">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
            Previous Events
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Memories & Past Programs
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Explore highlights from our previous school events, activities, and
            memorable moments.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previousEvents.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
