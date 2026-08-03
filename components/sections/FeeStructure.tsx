import Container from "@/components/common/Container";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Primary School",
    fee: "$500",
    features: [
      "Quality Education",
      "Digital Classroom",
      "Library Access",
      "Sports Activities",
    ],
  },
  {
    title: "Secondary School",
    fee: "$800",
    featured: true,
    features: [
      "Advanced Curriculum",
      "Computer Lab",
      "Science Laboratory",
      "Career Counseling",
    ],
  },
  {
    title: "Higher Secondary",
    fee: "$1200",
    features: [
      "University Preparation",
      "Research Projects",
      "Leadership Programs",
      "Exam Preparation",
    ],
  },
];

export default function FeeStructure() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Tuition Fees
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Fee Structure
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Transparent tuition plans designed for every stage of learning.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                plan.featured
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.title}</h3>

              <p className="mt-4 text-5xl font-bold">
                {plan.fee}
                <span className="text-lg font-normal"> / Year</span>
              </p>

              <div className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`mt-10 w-full rounded-xl py-3 font-semibold ${
                  plan.featured
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
