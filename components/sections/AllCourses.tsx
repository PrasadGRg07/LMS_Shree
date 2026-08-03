import Container from "@/components/common/Container";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export default function AllCourses() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            All Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore Our Academic Programs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Discover a wide range of courses designed to help students build
            strong academic foundations, practical skills, and confidence for
            future success.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
