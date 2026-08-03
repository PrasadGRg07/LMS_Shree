"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  { name: "Courses", href: "/courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 md:hidden"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <div className="absolute left-0 top-16 w-full border-t bg-white shadow-xl md:hidden">
          <div className="flex flex-col p-5">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b py-3"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/login"
              className="mt-4 rounded-lg bg-blue-600 py-3 text-center font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}