import Container from "@/components/common/Container";
import TeacherCard from "@/components/cards/TeacherCard";
import { teachers } from "@/data/teachers";

export default function FeaturedTeachers() {
  const featuredTeachers = teachers.filter((teacher) => teacher.featured);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Teachers
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Meet Our Expert Educators
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Our teachers bring knowledge, experience, and passion to create an
            inspiring learning environment for students.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredTeachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </Container>
    </section>
  );
}
