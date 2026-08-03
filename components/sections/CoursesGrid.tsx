import Container from "@/components/common/Container";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              Course Catalog
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Browse All Courses
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Explore all academic subjects offered across different grades.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-100 px-6 py-4">
            <p className="text-lg font-semibold text-slate-900">
              {courses.length} Courses Available
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
