"use client";

import { gallery } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span
            className="
          rounded-full
          bg-blue-100
          px-5
          py-2
          text-sm
          font-semibold
          text-blue-700
          "
          >
            School Gallery
          </span>

          <h2
            className="
          mt-6
          text-4xl
          font-bold
          text-slate-900
          md:text-5xl
          "
          >
            Moments From Our Campus
          </h2>

          <p
            className="
          mx-auto
          mt-5
          max-w-2xl
          text-slate-600
          "
          >
            Explore memories, activities and achievements from our school.
          </p>
        </div>

        <div
          className="
        mt-14
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        "
        >
          {gallery.map((item, index) => (
            <div
              key={index}
              className="
            group
            overflow-hidden
            rounded-3xl
            shadow-lg
            "
            >
              <img
                src={item.image}
                alt={item.text}
                className="
              h-80
              w-full
              object-cover
              transition
              duration-500
              group-hover:scale-110
              "
              />

              <div
                className="
              bg-white
              p-5
              "
              >
                <h3
                  className="
                text-xl
                font-bold
                text-slate-900
                "
                >
                  {item.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
