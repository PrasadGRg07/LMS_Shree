import { FileCheck, Image, CreditCard, FileUser, Award } from "lucide-react";

import Container from "@/components/common/Container";

const requirements = [
  {
    icon: FileUser,
    title: "Birth Certificate",
    description: "Official birth certificate of the student.",
  },

  {
    icon: Image,
    title: "Passport Size Photos",
    description: "Recent photographs of the student.",
  },

  {
    icon: Award,
    title: "Previous Academic Records",
    description: "Previous school certificates and report cards.",
  },

  {
    icon: CreditCard,
    title: "Parent Identification",
    description: "Parent or guardian identification documents.",
  },

  {
    icon: FileCheck,
    title: "Transfer Certificate",
    description: "Required for students transferring from another school.",
  },
];

export default function AdmissionRequirements() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Admission Requirements
          </h2>

          <p className="mt-4 text-slate-600">
            Required documents for completing the admission process.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {requirements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <Icon className="h-8 w-8 text-blue-600" />

                <h3 className="mt-5 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
