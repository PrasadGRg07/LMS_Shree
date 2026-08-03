import Container from "@/components/common/Container";

export default function NewsHero() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold">
            School News
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Latest News & Announcements
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Stay updated with school announcements, upcoming events,
            achievements, notices, and important information.
          </p>
        </div>
      </Container>
    </section>
  );
}
