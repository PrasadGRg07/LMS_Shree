import { CheckCircle, BookOpen, Award } from "lucide-react";

import Container from "@/components/common/Container";
import { Teacher } from "@/data/teachers";

interface TeacherProfileContentProps {
  teacher: Teacher;
}

export default function TeacherProfileContent({
  teacher,
}: TeacherProfileContentProps) {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-3">
          {/* About */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              About {teacher.name}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {teacher.bio}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              With years of teaching experience, {teacher.name} helps students
              understand concepts clearly through practical examples,
              interactive learning, and personalized guidance.
            </p>

            {/* Teaching Approach */}
            <div className="mt-10 rounded-3xl bg-slate-50 p-8">
              <div className="flex items-center gap-3">
                <Award className="h-7 w-7 text-blue-600" />

                <h3 className="text-2xl font-bold text-slate-900">
                  Teaching Approach
                </h3>
              </div>

              <p className="mt-4 leading-7 text-slate-600">
                Focused on creating an engaging learning environment where
                students can build confidence, improve skills, and achieve
                academic success.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div>
            <div className="rounded-3xl border border-slate-200 p-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-7 w-7 text-blue-600" />

                <h3 className="text-2xl font-bold text-slate-900">Expertise</h3>
              </div>

              <div className="mt-6 space-y-4">
                {teacher.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />

                    <span className="text-slate-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
