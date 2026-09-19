"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

import Logo from "@/components/common/Logo";

// ============================================================
// Constants
// ============================================================

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Admissions", href: "/admissions" },
  { name: "Courses", href: "/courses" },
  { name: "Teachers", href: "/teachers" },
  { name: "Gallery", href: "/gallery" },
  { name: "News", href: "/news" },
  { name: "Contact", href: "/contact" },
] as const;

// ============================================================
// Subcomponents
// ============================================================

/**
 * Desktop navigation links rendered as a horizontal pill
 */
const DesktopNav = ({
  linksRef,
}: {
  linksRef: React.MutableRefObject<HTMLAnchorElement[]>;
}) => (
  <nav className="hidden items-center gap-1 rounded-full bg-slate-50/90 p-1 md:flex">
    {NAV_ITEMS.map((item, index) => (
      <Link
        key={item.name}
        href={item.href}
        ref={(el) => {
          if (el) linksRef.current[index] = el;
        }}
        className="flex items-center rounded-full px-4 py-2.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
      >
        {item.name}
      </Link>
    ))}
  </nav>
);

/**
 * Desktop action buttons (Login / Get Started)
 */
const DesktopActions = () => (
  <div className="hidden items-center gap-3 md:flex">
    <Link
      href="/login"
      className="rounded-full px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:text-blue-700"
    >
      Login
    </Link>
    <Link
      href="/signup"
      className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 hover:bg-blue-700"
    >
      Get Started
    </Link>
  </div>
);

/**
 * Mobile hamburger menu toggle button
 */
const MobileToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="rounded-full bg-slate-100 p-3 text-slate-800 md:hidden"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
  >
    {isOpen ? <X size={22} /> : <Menu size={22} />}
  </button>
);

/**
 * Mobile dropdown menu
 */
const MobileMenu = ({ onItemClick }: { onItemClick: () => void }) => (
  <div className="mt-3 rounded-[24px] border border-slate-200 bg-white/95 p-5 shadow-[0_10px_35px_rgba(15,23,42,0.12)] md:hidden">
    <div className="flex flex-col gap-2">
      {/* Navigation Links */}
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onItemClick}
          className="rounded-xl px-4 py-3 font-medium text-slate-900 transition hover:bg-blue-50 hover:text-blue-700"
        >
          {item.name}
        </Link>
      ))}

      {/* Action Buttons */}
      <div className="mt-3 flex flex-col gap-3 border-t pt-4">
        <Link
          href="/login"
          className="rounded-xl border py-3 text-center font-medium"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="rounded-xl bg-blue-600 py-3 text-center font-medium text-white"
        >
          Create Account
        </Link>
      </div>
    </div>
  </div>
);

// ============================================================
// Main Component
// ============================================================

export default function Navbar() {
  // ─── State ──────────────────────────────────────────────────
  const [mobileOpen, setMobileOpen] = useState(false);

  // ─── Refs ───────────────────────────────────────────────────
  const navbarRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  // ─── Effects ────────────────────────────────────────────────

  // Animate navbar entrance with GSAP
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ─── Handlers ───────────────────────────────────────────────

  const handleMobileToggle = () => setMobileOpen((prev) => !prev);
  const handleMobileClose = () => setMobileOpen(false);

  // ─── Render ─────────────────────────────────────────────────

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 px-3 py-3 backdrop-blur-xl sm:px-5">
      <div ref={navbarRef} className="mx-auto max-w-7xl">
        {/* ─── Main Navbar ──────────────────────────────────── */}
        <div className="flex min-h-19 items-center justify-between rounded-[24px] border border-slate-200 bg-white/95 px-4 py-3 text-slate-900 shadow-[0_10px_35px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <DesktopNav linksRef={linksRef} />

          {/* Desktop Actions */}
          <DesktopActions />

          {/* Mobile Toggle */}
          <MobileToggle isOpen={mobileOpen} onClick={handleMobileToggle} />
        </div>

        {/* ─── Mobile Menu ──────────────────────────────────── */}
        {mobileOpen && <MobileMenu onItemClick={handleMobileClose} />}
      </div>
    </header>
  );
}
