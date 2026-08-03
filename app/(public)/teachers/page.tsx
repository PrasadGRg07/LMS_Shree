import TeachersHero from "@/components/sections/TeachersHero";
import FeaturedTeachers from "@/components/sections/FeaturedTeachers";
import TeacherFilters from "@/components/sections/TeacherFilters";
import AllTeachers from "@/components/sections/AllTeachers";

export default function TeachersPage() {
  return (
    <main>
      <TeachersHero />

      <FeaturedTeachers />

      <TeacherFilters />

      <AllTeachers />
    </main>
  );
}
