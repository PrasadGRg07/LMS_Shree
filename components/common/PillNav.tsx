"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;

  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;

  initialLoadAnimation?: boolean;
}

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#0f172a",
  pillColor = "#ffffff",
  hoveredPillTextColor = "#ffffff",
  pillTextColor,
  initialLoadAnimation = true,
}: PillNavProps) {
  const resolvedTextColor = pillTextColor ?? baseColor;

  const [mobileOpen, setMobileOpen] = useState(false);

  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timelines = useRef<gsap.core.Timeline[]>([]);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const logoImageRef = useRef<HTMLImageElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    circleRefs.current.forEach((circle, index) => {
      if (!circle) return;

      const pill = circle.parentElement;
      if (!pill) return;

      const { width, height } = pill.getBoundingClientRect();

      const radius = ((width * width) / 4 + height * height) / (2 * height);

      const diameter = Math.ceil(radius * 2) + 2;

      const delta =
        Math.ceil(
          radius -
            Math.sqrt(Math.max(0, radius * radius - (width * width) / 4)),
        ) + 1;

      circle.style.width = `${diameter}px`;
      circle.style.height = `${diameter}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        scale: 0,
        xPercent: -50,
        transformOrigin: "50% 50%",
      });

      const label = pill.querySelector(".pill-label");
      const hoverLabel = pill.querySelector(".pill-label-hover");

      const tl = gsap.timeline({
        paused: true,
      });

      tl.to(circle, {
        scale: 1.2,
        duration: 0.5,
        ease,
      });

      if (label) {
        tl.to(
          label,
          {
            y: -height - 8,
            duration: 0.5,
            ease,
          },
          0,
        );
      }

      if (hoverLabel) {
        gsap.set(hoverLabel, {
          y: height + 10,
          opacity: 0,
        });

        tl.to(
          hoverLabel,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease,
          },
          0,
        );
      }

      timelines.current[index] = tl;
    });

    if (initialLoadAnimation) {
      if (logoRef.current) {
        gsap.fromTo(
          logoRef.current,
          {
            scale: 0,
          },
          {
            scale: 1,
            duration: 0.6,
            ease,
          },
        );
      }

      if (navRef.current) {
        gsap.fromTo(
          navRef.current,
          {
            width: 0,
          },
          {
            width: "auto",
            duration: 0.6,
            ease,
          },
        );
      }
    }
  }, [ease, initialLoadAnimation]);

  function hoverEnter(index: number) {
    timelines.current[index]?.play();
  }

  function hoverLeave(index: number) {
    timelines.current[index]?.reverse();
  }

  function rotateLogo() {
    if (!logoImageRef.current) return;

    gsap.to(logoImageRef.current, {
      rotate: 360,
      duration: 0.4,
      ease,
    });
  }

  return (
    <div className="fixed top-5 left-0 w-full z-[1000] flex justify-center">
      <nav
        className={`flex items-center gap-3 ${className}`}
        style={
          {
            "--base": baseColor,
            "--pill": pillColor,
            "--hover": hoveredPillTextColor,
            "--text": resolvedTextColor,
          } as React.CSSProperties
        }
      >
        {/* Logo */}

        <Link
          href="/"
          ref={logoRef}
          onMouseEnter={rotateLogo}
          className="
          flex items-center justify-center
          h-12 w-12 rounded-full
          overflow-hidden
          bg-[var(--base)]
          "
        >
          <img
            src={logo}
            alt={logoAlt}
            ref={logoImageRef}
            className="h-full w-full object-cover"
          />
        </Link>

        {/* Desktop */}

        <div
          ref={navRef}
          className="
          hidden md:flex
          items-center
          rounded-full
          bg-[var(--base)]
          p-1
          gap-1
          overflow-hidden
          "
        >
          {items.map((item, index) => {
            const active = activeHref === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => hoverEnter(index)}
                onMouseLeave={() => hoverLeave(index)}
                className="
                  relative
                  overflow-hidden
                  flex items-center
                  justify-center
                  rounded-full
                  px-5
                  h-10
                  font-semibold
                  text-sm
                  "
                style={{
                  background: "var(--pill)",
                  color: "var(--text)",
                }}
              >
                <span
                  ref={(el) => {
                    circleRefs.current[index] = el;
                  }}
                  className="
                    absolute
                    left-1/2
                    bottom-0
                    rounded-full
                    bg-[var(--base)]
                    pointer-events-none
                    "
                />

                <span className="relative z-10">
                  <span className="pill-label block">{item.label}</span>

                  <span
                    className="
                      pill-label-hover
                      absolute
                      left-0
                      top-0
                      text-white
                      "
                  >
                    {item.label}
                  </span>
                </span>

                {active && (
                  <span
                    className="
                        absolute
                        bottom-1
                        w-2
                        h-2
                        rounded-full
                        bg-[var(--base)]
                        "
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
          md:hidden
          h-12
          w-12
          rounded-full
          bg-[var(--base)]
          text-white
          "
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}

      {mobileOpen && (
        <div
          ref={mobileRef}
          className="
            absolute
            top-16
            w-[90%]
            rounded-3xl
            bg-white
            shadow-xl
            p-4
            md:hidden
            "
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="
                  block
                  px-5
                  py-3
                  rounded-full
                  hover:bg-slate-100
                  font-medium
                  "
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
