import Link from "next/link";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";

import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.75), rgba(15,23,42,0.75)), url('/images/home/home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="grid min-h-screen items-center gap-16 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10">
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
              🎓 Modern School Management System
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl xl:text-7xl">
              Transform the Way Your School
              <span className="block text-blue-400">Learns & Grows</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Manage students, teachers, parents, courses, attendance,
              assignments, exams, and communication—all in one modern, powerful
              learning platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/courses"
                className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Courses
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">1200+</h3>
                <p className="mt-1 text-slate-300">Students</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">75+</h3>
                <p className="mt-1 text-slate-300">Teachers</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="mt-1 text-slate-300">Courses</p>
              </div>
            </div>
          </div>

          

            {/* Decorative Blur */}
            <div className="absolute -right-10 -top-10 -z-10 h-56 w-56 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 -z-10 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
          </div>

      </Container>
    </section>
  );
}
