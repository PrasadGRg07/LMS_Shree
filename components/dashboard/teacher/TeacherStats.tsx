import { BookOpen, Users, ClipboardCheck, Star } from "lucide-react";

const stats = [
  {
    title: "Total Courses",
    value: "24",
    description: "Active courses",
    icon: BookOpen,
  },

  {
    title: "Total Students",
    value: "850",
    description: "Enrolled students",
    icon: Users,
  },

  {
    title: "Pending Assignments",
    value: "12",
    description: "Need grading",
    icon: ClipboardCheck,
  },

  {
    title: "Average Rating",
    value: "4.8",
    description: "From students",
    icon: Star,
  },
];

export default function TeacherStats() {
  return (
    <div
      className="
      grid
      gap-6
      md:grid-cols-2
      xl:grid-cols-4
    "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              rounded-xl
              border
              bg-background
              p-6
              shadow-sm
              transition
              hover:shadow-md
            "
          >
            <div
              className="
              flex
              items-center
              justify-between
            "
            >
              <div>
                <p
                  className="
                  text-sm
                  text-muted-foreground
                "
                >
                  {item.title}
                </p>

                <h2
                  className="
                  mt-2
                  text-3xl
                  font-bold
                "
                >
                  {item.value}
                </h2>

                <p
                  className="
                  mt-1
                  text-xs
                  text-muted-foreground
                "
                >
                  {item.description}
                </p>
              </div>

              <div
                className="
                rounded-lg
                bg-primary/10
                p-3
                text-primary
              "
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
