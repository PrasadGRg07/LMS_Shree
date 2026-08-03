import Container from "@/components/common/Container";
import GalleryCard from "@/components/cards/GalleryCard";
import { gallery } from "@/data/gallery";

export default function GalleryGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            Our Memories
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Explore School Life
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Discover memorable moments from our classrooms, events, activities,
            and achievements.
          </p>
        </div>

        {/* Gallery */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
