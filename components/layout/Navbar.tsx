"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Logo from "@/components/common/Logo";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Admissions",
    href: "/admissions",
  },
  {
    name: "Courses",
    href: "/courses",
  },
  {
    name: "Teachers",
    href: "/teachers",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "News",
    href: "/news",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navbarRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      w-full
      border-b
      border-slate-200/80
      bg-white/95
      px-3
      py-3
      backdrop-blur-xl
      sm:px-5
      "
    >
      <div ref={navbarRef} className="mx-auto max-w-7xl">
        <div
          className="
          flex
          min-h-19
          items-center
          justify-between
          rounded-[24px]
          border
          border-slate-200
          bg-white/95
          px-4
          py-3
          text-slate-900
          shadow-[0_10px_35px_rgba(15,23,42,0.12)]
          backdrop-blur-2xl
          sm:px-6
          "
        >
          {/* Logo */}

          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}

          <nav
            className="
            hidden
            md:flex
            items-center
            gap-1
            rounded-full
            bg-slate-50/90
            p-1
            "
          >
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                ref={(el) => {
                  if (el) linksRef.current[index] = el;
                }}
                className="
                flex
                items-center
                rounded-full
                px-4
                py-2.5
                text-sm
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:bg-blue-50
                hover:text-blue-700
                hover:shadow-sm
                "
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}

          <div
            className="
            hidden
            md:flex
            items-center
            gap-3
            "
          >
            <Link
              href="/login"
              className="
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              text-slate-900
              transition
              hover:text-blue-700
              "
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="
              rounded-full
              bg-blue-600
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/30
              transition
              hover:-translate-y-0.5
              hover:bg-blue-700
              "
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
            rounded-full
            bg-slate-100
            p-3
            text-slate-800
            md:hidden
            "
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <div
            className="
            mt-3
            rounded-[24px]
            border
            border-slate-200
            bg-white/95
            p-5
            shadow-[0_10px_35px_rgba(15,23,42,0.12)]
            md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                  rounded-xl
                  px-4
                  py-3
                  font-medium
                  text-slate-900
                  transition
                  hover:bg-blue-50
                  hover:text-blue-700
                  "
                >
                  {item.name}
                </Link>
              ))}

              <div
                className="
                mt-3
                flex
                flex-col
                gap-3
                border-t
                pt-4
                "
              >
                <Link
                  href="/login"
                  className="
                  rounded-xl
                  border
                  py-3
                  text-center
                  font-medium
                  "
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="
                  rounded-xl
                  bg-blue-600
                  py-3
                  text-center
                  font-medium
                  text-white
                  "
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
