import Container from "@/components/common/Container";
import { Target, Eye, Heart } from "lucide-react";

const items = [
  {
    title: "Our Mission",
    description:
      "To provide quality education that develops students' knowledge, creativity, confidence, and character.",
    icon: Target,
  },

  {
    title: "Our Vision",
    description:
      "To become a leading educational institution that prepares students for future challenges.",
    icon: Eye,
  },

  {
    title: "Our Values",
    description:
      "We promote integrity, respect, teamwork, responsibility, and lifelong learning.",
    icon: Heart,
  },
];

export default function MissionVision() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
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
            Our Foundation
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
            Mission, Vision & Values
          </h2>
        </div>

        <div
          className="
        mt-14
        grid
        gap-8
        md:grid-cols-3
        "
        >
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                rounded-3xl
                bg-white
                p-8
                shadow-lg
                transition
                hover:-translate-y-2
                "
              >
                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-blue-100
                  text-blue-600
                  "
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                "
                >
                  {item.title}
                </h3>

                <p
                  className="
                mt-4
                leading-7
                text-slate-600
                "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
