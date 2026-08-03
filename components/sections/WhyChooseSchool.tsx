import Container from "@/components/common/Container";
import { BookOpen, Laptop, Users, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Quality Education",
    description:
      "Experienced teachers delivering engaging and effective lessons.",
    icon: BookOpen,
  },
  {
    title: "Modern Technology",
    description:
      "Smart classrooms, LMS access, and digital learning resources.",
    icon: Laptop,
  },
  {
    title: "Supportive Community",
    description:
      "Strong collaboration between students, teachers, and parents.",
    icon: Users,
  },
  {
    title: "Safe Environment",
    description:
      "A secure campus that promotes growth, confidence, and well-being.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseSchool() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            A Great Place to Learn and Grow
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            We combine academic excellence with modern technology and a caring
            learning environment.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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
