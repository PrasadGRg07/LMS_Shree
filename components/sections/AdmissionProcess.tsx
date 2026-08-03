import {
  Search,
  FileText,
  ClipboardCheck,
  GraduationCap,
  CheckCircle,
} from "lucide-react";

import Container from "@/components/common/Container";

const steps = [
  {
    icon: Search,
    title: "1. Inquiry & Counseling",
    description:
      "Parents can contact the school office or submit an inquiry form to receive admission information.",
  },

  {
    icon: FileText,
    title: "2. Submit Application",
    description:
      "Complete the admission application form with accurate student and parent details.",
  },

  {
    icon: ClipboardCheck,
    title: "3. Document Verification",
    description:
      "School administration verifies submitted documents and previous academic records.",
  },

  {
    icon: GraduationCap,
    title: "4. Assessment / Interview",
    description:
      "Students may participate in an entrance assessment or interview based on grade level.",
  },

  {
    icon: CheckCircle,
    title: "5. Final Enrollment",
    description:
      "Selected students complete enrollment procedures and begin their learning journey.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Admission Process
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Simple Steps To Join Our School
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Our admission process is designed to make enrollment simple,
            transparent, and convenient for parents and students.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-3xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                <h3 className="mt-5 font-bold text-slate-900">{step.title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
