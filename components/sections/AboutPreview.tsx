import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";

const features = [
  "Experienced & Certified Teachers",
  "Modern Smart Classrooms",
  "Digital Learning Platform",
  "Sports & Extracurricular Activities",
];

export default function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          badge="ABOUT US"
          title="Building Future Leaders Through Quality Education"
          description="We provide an innovative learning environment where students develop academically, socially, and personally."
        />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/about/school.png"
                alt="School"
                width={700}
                height={700}
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-blue-600 p-8 text-white shadow-xl">
              <h3 className="text-4xl font-bold">15+</h3>
              <p className="mt-2">Years of Excellence</p>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-4xl font-bold text-slate-900">
              Inspiring Students to Achieve Their Full Potential
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our school combines modern teaching methods, experienced faculty,
              and technology-driven education to create an engaging learning
              experience for every student.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
