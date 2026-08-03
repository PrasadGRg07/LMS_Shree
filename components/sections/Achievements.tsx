import Container from "@/components/common/Container";
import { Trophy, Users, GraduationCap, Award } from "lucide-react";

const stats = [
  {
    title: "Students",
    value: "1200+",
    icon: Users,
  },
  {
    title: "Graduates",
    value: "5000+",
    icon: GraduationCap,
  },
  {
    title: "Awards",
    value: "50+",
    icon: Trophy,
  },
  {
    title: "Achievements",
    value: "100+",
    icon: Award,
  },
];

export default function Achievements() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <h2
            className="
text-4xl
font-bold
text-slate-900
md:text-5xl
"
          >
            Our Achievements
          </h2>

          <p className="mt-4 text-slate-600">
            Recognitions and milestones that make us proud.
          </p>
        </div>

        <div
          className="
mt-14
grid
gap-8
sm:grid-cols-2
lg:grid-cols-4
"
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
rounded-3xl
bg-slate-50
p-8
text-center
transition
hover:-translate-y-2
hover:shadow-xl
"
              >
                <div
                  className="
mx-auto
flex
h-16
w-16
items-center
justify-center
rounded-2xl
bg-blue-100
text-blue-600
"
                >
                  <Icon size={32} />
                </div>

                <h3
                  className="
mt-6
text-4xl
font-bold
text-slate-900
"
                >
                  {item.value}
                </h3>

                <p className="mt-2 text-slate-600">{item.title}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
