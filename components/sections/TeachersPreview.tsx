import TeacherCard from "@/components/cards/TeacherCard";
import { teachers } from "@/data/teachers";

export default function TeachersPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24">
      {/* Decorative shapes */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="
            rounded-full
            bg-blue-500/20
            px-5
            py-2
            text-sm
            font-semibold
            text-blue-300
          "
          >
            Our Teaching Team
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            text-white
            md:text-5xl
          "
          >
            Meet The People Behind Our Success
          </h2>

          <p
            className="
            mt-5
            text-lg
            leading-8
            text-slate-300
          "
          >
            Passionate educators who guide students, inspire creativity and
            create a better future.
          </p>
        </div>

        {/* Teachers */}
        <div
          className="
          mt-16
          grid
          gap-10
          md:grid-cols-2
          lg:grid-cols-3
        "
        >
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}
