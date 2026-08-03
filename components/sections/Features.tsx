import {
  BookOpen,
  GraduationCap,
  Users,
  ClipboardCheck,
  ShieldCheck,
  MonitorSmartphone,
} from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  {
    icon: GraduationCap,
    title: "Smart Learning",
    description:
      "Interactive classrooms with engaging digital learning experiences.",
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description:
      "Qualified teachers with powerful classroom management tools.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance",
    description:
      "Track attendance with real-time reports and notifications.",
  },
  {
    icon: BookOpen,
    title: "Assignments",
    description:
      "Create, submit, review, and grade assignments online.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Platform",
    description:
      "Role-based access keeps student and school data protected.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive",
    description:
      "Works beautifully on desktop, tablet, and mobile devices.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionHeading
          badge="WHY CHOOSE US"
          title="Everything Your School Needs"
          description="A complete Learning Management System for students, teachers, parents, and administrators."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}