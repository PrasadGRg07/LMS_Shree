import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function TeachersHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            <GraduationCap className="h-5 w-5 text-blue-400" />
            Expert Teaching Team
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Meet Our
            <span className="text-blue-400"> Dedicated Teachers</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn from experienced educators who are passionate about helping
            students achieve academic excellence and develop practical skills
            for the future.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
            >
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
