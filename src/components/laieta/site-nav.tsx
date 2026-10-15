"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Disc3 } from "lucide-react";
import { navegacio, moviment } from "@/lib/laieta-data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("manifest");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navegacio
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => go("manifest")}
          className="group flex items-center gap-2"
          aria-label="Inici"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <Disc3 className="h-4 w-4 animate-spin-vinyl text-primary" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-display text-lg tracking-wide text-foreground">
              {moviment.titol}
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
              {moviment.subtitol}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navegacio.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition",
                active === n.id
                  ? "bg-primary/15 text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {n.etiqueta}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground lg:hidden"
          aria-label="Menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-primary via-amber-300 to-primary"
      />

      {/* mobile menu */}
      {open ? (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl grid-cols-2 gap-1 px-4 py-3 sm:px-6">
            {navegacio.map((n) => (
              <button
                key={n.id}
                onClick={() => go(n.id)}
                className={cn(
                  "rounded-md px-3 py-2 text-left font-mono text-xs uppercase tracking-[0.15em] transition",
                  active === n.id
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {n.etiqueta}
              </button>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
