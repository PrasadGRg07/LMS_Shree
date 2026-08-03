import Link from "next/link";
import Container from "@/components/common/Container";
import { ArrowRight, BookOpen } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 py-24">
      {/* Background Decorations */}
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
            <BookOpen size={38} />
          </div>

          <h2 className="mt-8 text-4xl font-bold md:text-5xl">
            Join Our Learning Community
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Become part of a modern learning environment where students,
            teachers, and parents stay connected through one powerful Learning
            Management System.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
