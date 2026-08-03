import Link from "next/link";
import Container from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold">SJBEB School LMS</h2>

            <p className="mt-4 leading-7 text-slate-400">
              A modern learning management platform connecting students,
              teachers, parents, and administrators.
            </p>

            <div className="mt-6 flex gap-4">
              <Link
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-blue-600
                "
              >
                f
              </Link>

              <Link
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-blue-600
                "
              >
                X
              </Link>

              <Link
                href="#"
                className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-white/10
                transition
                hover:bg-blue-600
                "
              >
                in
              </Link>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>

              <li>
                <Link href="/teachers" className="hover:text-white">
                  Teachers
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* LMS */}

          <div>
            <h3 className="text-lg font-semibold">Learning</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>Student Portal</li>

              <li>Teacher Dashboard</li>

              <li>Online Classes</li>

              <li>Assignments</li>

              <li>Exams & Results</li>
            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>📍 Kathmandu, Nepal</li>

              <li>📞 +977 9800000000</li>

              <li>✉ info@schoollms.com</li>

              <li>🕒 Sun - Fri: 9AM - 5PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="
          mt-12
          border-t
          border-white/10
          pt-8
          text-center
          text-sm
          text-slate-500
          "
        >
          © {new Date().getFullYear()} School LMS. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
