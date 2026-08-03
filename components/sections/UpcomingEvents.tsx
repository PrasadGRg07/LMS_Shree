import Container from "@/components/common/Container";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function UpcomingEvents() {
  const events = news.filter((item) => item.type === "upcoming");

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-12">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Upcoming Events
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Upcoming School Programs
          </h2>

          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Stay informed about upcoming activities, events, and important
            school programs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
