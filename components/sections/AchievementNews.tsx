import Container from "@/components/common/Container";
import NewsCard from "@/components/cards/NewsCard";
import { news } from "@/data/news";

export default function AchievementNews() {
  const achievements = news.filter((item) => item.type === "award");

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            Achievements
          </span>

          <h2 className="mt-5 text-4xl font-bold text-slate-900">
            Student Success & Awards
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Celebrating outstanding achievements of our students and school
            community.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
