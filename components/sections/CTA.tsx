"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-700
          px-8
          py-16
          text-center
          shadow-xl
          md:px-16
          "
        >
          {/* Background decoration */}

          <div
            className="
            absolute
            -right-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-white/10
            "
          />

          <div
            className="
            absolute
            -bottom-24
            -left-20
            h-72
            w-72
            rounded-full
            bg-white/10
            "
          />

          <div className="relative z-10">
            <h2
              className="
              text-4xl
              font-bold
              text-white
              md:text-5xl
              "
            >
              Start Your Learning Journey Today
            </h2>

            <p
              className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              text-blue-100
              "
            >
              Access courses, manage your learning, and connect with teachers
              through our modern School LMS platform.
            </p>

            <div
              className="
              mt-8
              flex
              flex-col
              justify-center
              gap-4
              sm:flex-row
              "
            >
              <Link
                href="/login"
                className="
                rounded-xl
                bg-white
                px-8
                py-3
                font-semibold
                text-blue-700
                transition
                hover:bg-blue-50
                "
              >
                Student Login
              </Link>

              <Link
                href="/contact"
                className="
                rounded-xl
                border
                border-white/40
                px-8
                py-3
                font-semibold
                text-white
                transition
                hover:bg-white/10
                "
              >
                Contact School
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
