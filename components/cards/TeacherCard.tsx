import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users } from "lucide-react";

import { Teacher } from "@/data/teachers";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  if (!teacher) {
    return null;
  }

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-96 overflow-hidden bg-slate-100">
        <Image
          src={teacher.image}
          alt={teacher.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-bold text-slate-900">{teacher.name}</h3>

        <p className="mt-1 font-medium text-blue-600">{teacher.subject}</p>

        {/* Qualification */}
        <p className="mt-3 text-sm text-slate-600">{teacher.qualification}</p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

            <span className="font-semibold">{teacher.rating}</span>
          </div>

          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-600" />

            <span>{teacher.students} Students</span>
          </div>
        </div>

        {/* Experience */}
        <div className="mt-5 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
          {teacher.experience}
        </div>

        {/* Skills */}
        <div className="mt-5 flex flex-wrap gap-2">
          {teacher.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Button */}
        <Link
          href={`/teachers/${teacher.slug}`}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Profile
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
