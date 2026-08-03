import Container from "@/components/common/Container";
import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 py-28 text-white">
      {/* Background Blurs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
              <GraduationCap size={18} />
              Academic Programs
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              Discover Courses
              <span className="block text-cyan-300">That Inspire Learning</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Explore our curriculum designed to build knowledge, creativity,
              critical thinking, and real-world skills from primary school to
              higher secondary education.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#courses"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
              >
                Browse Courses
              </Link>

              <Link
                href="/admissions"
                className="rounded-xl border border-white/30 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/10"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["50+", "Courses"],
                  ["1200+", "Students"],
                  ["75+", "Teachers"],
                  ["98%", "Success Rate"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl bg-white/10 p-6 text-center"
                  >
                    <BookOpen className="mx-auto mb-3 text-cyan-300" />
                    <h3 className="text-3xl font-bold">{value}</h3>
                    <p className="mt-2 text-blue-100">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
