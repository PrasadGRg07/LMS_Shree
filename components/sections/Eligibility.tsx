import Container from "@/components/common/Container";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const requirements = [
  "Students must meet the minimum age requirement for the applying grade.",
  "Previous academic records or report cards must be submitted.",
  "Applicants should demonstrate good academic performance and conduct.",
  "International students must provide valid identification and required documents.",
];

export default function Eligibility() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Eligibility
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Who Can Apply?
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We welcome motivated students who are eager to learn, grow, and
              become part of our school community.
            </p>

            <div className="mt-8 space-y-5">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-blue-600" />

                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/admissions/students.jpeg"
              alt="Students"
              width={800}
              height={600}
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
