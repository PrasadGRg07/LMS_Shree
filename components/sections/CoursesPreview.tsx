import Container from "@/components/common/Container";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export default function CoursesPreview() {
  const previewCourses = courses.slice(0, 3);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-14 text-center">
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Courses
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Explore Our Popular Courses
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600">
            Discover courses designed to help students build knowledge and
            skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  );
}
