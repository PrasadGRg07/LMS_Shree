import Container from "@/components/common/Container";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-100 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span
            className="
            rounded-full
            bg-blue-100
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-700
            "
          >
            About Our School
          </span>

          <h1
            className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            text-slate-900
            md:text-6xl
            "
          >
            Building Future Leaders Through Quality Education
          </h1>

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-600
            "
          >
            We provide a modern learning environment where students develop
            knowledge, creativity, confidence, and skills needed for the future.
          </p>
        </div>
      </Container>
    </section>
  );
}
