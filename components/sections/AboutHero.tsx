import Container from "@/components/common/Container";

// ============================================================
// Constants
// ============================================================

const ABOUT_DATA = {
  badge: "About Our School",
  title: "Building Future Leaders Through Quality Education",
  description:
    "We provide a modern learning environment where students develop knowledge, creativity, confidence, and skills needed for the future.",
} as const;

// ============================================================
// Main Component
// ============================================================

export default function AboutHero() {
  return (
    <section className="bg-grey-300 from-blue-500 via-white to-indigo-800 py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            {ABOUT_DATA.badge}
          </span>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 md:text-6xl">
            {ABOUT_DATA.title}
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {ABOUT_DATA.description}
          </p>
        </div>
      </Container>
    </section>
  );
}
