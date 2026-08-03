import Container from "@/components/common/Container";
import TeacherCard from "@/components/cards/TeacherCard";
import { teachers } from "@/data/teachers";

export default function AllTeachers() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Faculty Members
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Our Complete Teaching Team
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Explore our dedicated teachers who support students with quality
            education, guidance, and practical knowledge.
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
