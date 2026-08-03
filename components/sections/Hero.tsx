import Link from "next/link";
import { ArrowRight, GraduationCap, Users, BookOpen } from "lucide-react";
import Container from "@/components/common/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Container>
        <div className="grid min-h-[90vh] items-center gap-16 py-20 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              🎓 Modern School Management System
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 md:text-6xl">
              Transform the Way Your School
              <span className="block text-blue-600">Learns & Grows</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Manage students, teachers, parents, courses, attendance,
              assignments, exams, and communication—all in one modern platform.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/login"
                className="inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/courses"
                className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
              >
                Explore Courses
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">1200+</h3>
                <p className="text-slate-600">Students</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">75+</h3>
                <p className="text-slate-600">Teachers</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                <p className="text-slate-600">Courses</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">
                  School Dashboard
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  Live
                </span>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <Users className="h-8 w-8 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">Students</h4>
                    <p className="text-sm text-slate-500">
                      1,248 Active Students
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <GraduationCap className="h-8 w-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold">Teachers</h4>
                    <p className="text-sm text-slate-500">
                      75 Professional Teachers
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                  <div>
                    <h4 className="font-semibold">Courses</h4>
                    <p className="text-sm text-slate-500">
                      50+ Learning Programs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background */}
            <div className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-blue-200 blur-3xl" />
            <div className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-indigo-200 blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}