import Container from "@/components/common/Container";
import FacilityCard from "@/components/cards/FacilityCard";

import {
  Monitor,
  BookOpen,
  Laptop,
  Trophy,
  Bus,
  FlaskConical,
} from "lucide-react";

const facilities = [
  {
    title: "Smart Classrooms",
    description:
      "Modern classrooms equipped with digital learning tools to make education interactive.",
    icon: Monitor,
  },

  {
    title: "Library",
    description:
      "A rich collection of books and resources to encourage reading and research.",
    icon: BookOpen,
  },

  {
    title: "Computer Lab",
    description:
      "Advanced computer facilities helping students develop digital skills.",
    icon: Laptop,
  },

  {
    title: "Science Laboratory",
    description:
      "Well-equipped science labs for practical learning and experiments.",
    icon: FlaskConical,
  },

  {
    title: "Sports Facilities",
    description:
      "Sports activities that promote teamwork, health, and leadership.",
    icon: Trophy,
  },

  {
    title: "Transportation",
    description: "Safe and reliable transportation services for students.",
    icon: Bus,
  },
];

export default function Facilities() {
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
            Campus Facilities
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
            Everything Students Need To Learn
          </h2>

          <p
            className="
mx-auto
mt-5
max-w-2xl
text-slate-600
"
          >
            We provide modern facilities that create a comfortable and effective
            learning environment.
          </p>
        </div>

        <div
          className="
mt-14
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"
        >
          {facilities.map((facility, index) => (
            <FacilityCard
              key={index}
              title={facility.title}
              description={facility.description}
              icon={facility.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
