interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : ""}>
      {badge && (
        <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}