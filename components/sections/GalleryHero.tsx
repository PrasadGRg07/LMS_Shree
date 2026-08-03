import Link from "next/link";
import { Images, ArrowRight } from "lucide-react";

import Container from "@/components/common/Container";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
            <Images className="h-5 w-5 text-blue-400" />
            School Gallery
          </div>

          <h1 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Moments That
            <span className="text-blue-400"> Inspire Learning</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Explore memories from our classrooms, events, activities,
            achievements, and campus life.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
          >
            Visit Our School
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
