import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FacilityCard({
  title,
  description,
  icon: Icon,
}: FacilityCardProps) {
  return (
    <div
      className="
      group
      rounded-3xl
      bg-white
      p-8
      shadow-lg
      transition
      duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      "
    >
      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-blue-100
        text-blue-600
        transition
        group-hover:bg-blue-600
        group-hover:text-white
        "
      >
        <Icon size={32} />
      </div>

      <h3
        className="
        mt-6
        text-2xl
        font-bold
        text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        leading-7
        text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}
