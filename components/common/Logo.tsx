import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="h-14 w-14 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
        <Image
          src="/images/logos/logo.jpg"
          alt="School logo"
          width={56}
          height={56}
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900">School LMS</h2>

        <p className="text-xs text-slate-500">Learn • Grow • Succeed</p>
      </div>
    </Link>
  );
}
