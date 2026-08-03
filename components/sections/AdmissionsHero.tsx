import Container from "@/components/common/Container";
import { GraduationCap } from "lucide-react";

export default function AdmissionsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 py-28">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur">
            <GraduationCap size={40} />
          </div>

          <h1 className="mt-8 text-5xl font-bold md:text-6xl">Admissions</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Begin your educational journey with us. We provide a transparent,
            student-focused admission process designed to help every learner
            succeed.
          </p>
        </div>
      </Container>
    </section>
  );
}
