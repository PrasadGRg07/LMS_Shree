import CoursesHero from "@/components/sections/CoursesHero";
import FeaturedCourses from "@/components/sections/FeaturedCourses";
import CourseFilters from "@/components/sections/CourseFilters";
import AllCourses from "@/components/sections/AllCourses";
import CourseCard from "@/components/cards/CourseCard";
import { courses } from "@/data/courses";
export default function CoursesPage() {
  return (
    <>
      <CoursesHero />
      <FeaturedCourses />

      <CourseFilters />

      <AllCourses />
    </>
  );
}
