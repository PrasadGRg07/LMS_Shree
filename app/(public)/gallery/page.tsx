import GalleryHero from "@/components/sections/GalleryHero";
import GalleryFilters from "@/components/sections/GalleryFilters";
import GalleryGrid from "@/components/sections/GalleryGrid";

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />

      <GalleryFilters />

      <GalleryGrid />
    </main>
  );
}
