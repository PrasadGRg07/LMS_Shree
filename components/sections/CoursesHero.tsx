import Container from "@/components/common/Container";
import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";

// ============================================================
// Constants
// ============================================================

const COURSES_DATA = {
  badge: {
    text: "Academic Programs",
    icon: GraduationCap,
  },
  title: "Discover Courses",
  titleHighlight: "That Inspire Learning",
  description:
    "Explore our curriculum designed to build knowledge, creativity, critical thinking, and real-world skills from primary school to higher secondary education.",
} as const;

const STATS_DATA = [
  { value: "50+", label: "Courses" },
  { value: "1200+", label: "Students" },
  { value: "75+", label: "Teachers" },
  { value: "98%", label: "Success Rate" },
] as const;

// ============================================================
// Main Component
// ============================================================

export default function CoursesHero() {
  return (
    <section className="relative overflow-hidden bg-blue-900 from-blue-700 via-blue-800 to-indigo-700 py-28 text-white">
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
              <GraduationCap size={18} />
              {COURSES_DATA.badge.text}
            </span>

            {/* Title */}
            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              {COURSES_DATA.title}
              <span className="block text-white">
                {COURSES_DATA.titleHighlight}
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {COURSES_DATA.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#courses"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:shadow-lg"
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

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl shadow-2xl shadow-blue-900/30 transition duration-500 hover:shadow-blue-900/50 hover:shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {STATS_DATA.map(({ value, label }) => (
                  <div
                    key={label}
                    className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white/10 p-6 text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/20 hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 scale-0 rounded-2xl bg-blue-900 from-cyan-400/20 to-blue-400/20 transition-all duration-500 group-hover:scale-100" />

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-cyan-400/30" />

                    {/* Icon */}
                    <div className="relative mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-400/20 group-hover:shadow-lg group-hover:shadow-cyan-400/20">
                      <BookOpen
                        className="text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-200"
                        size={24}
                      />
                    </div>

                    {/* Value */}
                    <h3 className="relative text-3xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                      {value}
                    </h3>

                    {/* Label */}
                    <p className="relative mt-2 text-blue-100 transition-colors duration-500 group-hover:text-blue-50">
                      {label}
                    </p>

                    {/* Animated Underline */}
                    <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-violet-400 from-cyan-400 to-blue-400 transition-all duration-500 group-hover:w-2/3" />
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
