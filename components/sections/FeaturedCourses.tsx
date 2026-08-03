import Container from "@/components/common/Container";
import FeaturedCourseHero from "@/components/cards/FeaturedCourseHero";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";

export default function FeaturedCourses() {
  const heroCourse = courses[0];
  const secondaryCourses = courses.slice(1, 3);

  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Featured Programs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Discover Our Most Popular Courses
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Explore our most popular academic programs taught by experienced
            teachers.
          </p>
        </div>

        <FeaturedCourseHero course={heroCourse} />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {secondaryCourses.map((item) => (
            <CourseCard key={item.id} course={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
