import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, Users } from "lucide-react";

import Container from "@/components/common/Container";
import { Teacher } from "@/data/teachers";

interface TeacherProfileHeroProps {
  teacher: Teacher;
}

export default function TeacherProfileHero({
  teacher,
}: TeacherProfileHeroProps) {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <Container>
        <Link
          href="/teachers"
          className="mb-8 inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Teachers
        </Link>

        <div className="grid gap-10 md:grid-cols-3 items-center">
          {/* Image */}
          <div className="relative mx-auto h-96 w-full overflow-hidden rounded-3xl md:col-span-1">
            <Image
              src={teacher.image}
              alt={teacher.name}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="md:col-span-2">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
              {teacher.subject}
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-6xl">
              {teacher.name}
            </h1>

            <p className="mt-4 text-xl text-slate-300">
              {teacher.qualification}
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                {teacher.rating} Rating
              </div>

              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-400" />
                {teacher.students} Students
              </div>

              <div>{teacher.experience}</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
