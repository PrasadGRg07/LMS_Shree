import Hero from "@/components/sections/Hero";
import Statistics from "@/components/sections/Statistics";
import Features from "@/components/sections/Features";
import AboutPreview from "@/components/sections/AboutPreview";
import CoursesPreview from "@/components/sections/CoursesPreview";
import TeachersPreview from "@/components/sections/TeachersPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Testimonials from "@/components/sections/Testimonials";
import NewsPreview from "@/components/sections/NewsPreview";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Features />
      <AboutPreview />
      <CoursesPreview />
      <TeachersPreview />
      <GalleryPreview />
      <Testimonials />
      <NewsPreview />
      <FAQ />
      <CTA />
    </>
  );
}