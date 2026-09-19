import Container from "@/components/common/Container";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:flex-row md:items-center md:p-12">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 md:mx-0">
                <GraduationCap size={32} className="text-sky-600" />
              </div>

              <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
                Admissions
              </h1>

              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
                Begin your educational journey with us. We provide a
                transparent, student-focused admission process designed to help
                every learner succeed.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 md:justify-start justify-center">
                <a
                  href="#"
                  className="rounded-lg bg-blue-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-800 transition"
                >
                  Apply Now
                </a>
                <a
                  href="#"
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                >
                  Download Form
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/images/admissions/kids-admission.jpg"
                  alt="Kids admission"
                  width={500}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
