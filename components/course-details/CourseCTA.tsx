import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CourseCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
          Start Learning Today
        </span>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
          Ready to Begin Your Learning Journey?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Join our learning community and gain practical knowledge from
          experienced teachers through engaging lessons, assignments, and
          interactive activities.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Enroll Now
            <ArrowRight className="h-5 w-5" />
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
