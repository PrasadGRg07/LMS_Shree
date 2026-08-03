import Container from "@/components/common/Container";

export default function ContactHero() {
  return (
    <section className="bg-slate-900 py-24">
      <Container>
        <div className="max-w-3xl">
          <span className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold text-white">
            Get In Touch With Our School
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Have questions about admissions, courses, or school programs? Our
            team is here to help you.
          </p>
        </div>
      </Container>
    </section>
  );
}
