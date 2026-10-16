"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Menu, X, Disc3, ChevronDown, ChevronRight, Headphones } from "lucide-react";
import { navegacioAgrupada, navegacioIds, moviment } from "@/lib/laieta-data";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [active, setActive] = useState<string>("manifest");
  const megaRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Estat scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver per marcar la secció activa
  useEffect(() => {
    const sections = navegacioIds
      .map((id) => document.getElementById(id))
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

  // Tanca megamenu quan es clica fora
  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [megaOpen]);

  // Tanca megamenu amb Escape
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [megaOpen]);

  // Bloqueja scroll del fons quan el menú mòbil és obert
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

  const go = (id: string) => {
    setMobileOpen(false);
    setMegaOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Comprova si una secció és activa dins d'un grup
  const grupHasActive = (items: { id: string }[]) =>
    items.some((i) => i.id === active);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || megaOpen || mobileOpen
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Logo */}
        <button
          onClick={() => go("manifest")}
          className="group flex shrink-0 items-center gap-2"
          aria-label="Inici"
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
            <Disc3 className="h-4 w-4 animate-spin-vinyl text-primary" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-display text-base tracking-wide text-foreground sm:text-lg">
              {moviment.titol}
            </span>
            <span className="hidden font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
              {moviment.subtitol}
            </span>
          </span>
        </button>

        {/* Centre desktop — trigger megamenu + CTA */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Trigger "Explora el moviment" */}
          <div ref={megaRef} className="relative">
            <button
              type="button"
              onClick={() => setMegaOpen((v) => !v)}
              aria-expanded={megaOpen}
              aria-haspopup="true"
              className={cn(
                "group flex items-center gap-1.5 rounded-full border px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] transition",
                megaOpen
                  ? "border-primary/60 bg-primary/15 text-primary"
                  : "border-border/60 bg-secondary/40 text-foreground/85 hover:border-primary/50 hover:text-primary",
              )}
            >
              {navegacioAgrupada.trigger}
              <ChevronDown
                className={cn(
                  "h-3.5 w-3.5 transition-transform duration-200",
                  megaOpen && "rotate-180",
                )}
              />
            </button>

            {/* Megamenu */}
            <AnimatePresence>
              {megaOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute left-1/2 top-[calc(100%+8px)] z-50 w-[min(940px,calc(100vw-3rem))] -translate-x-1/2 overflow-hidden rounded-2xl border border-border/60 bg-card/95 shadow-2xl backdrop-blur-xl"
                >
                  <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-3">
                    {navegacioAgrupada.grups.map((g) => {
                      const isActive = grupHasActive(g.items);
                      return (
                        <div
                          key={g.titol}
                          className={cn(
                            "group/grp rounded-xl border p-3 transition",
                            isActive
                              ? "border-primary/40 bg-primary/10"
                              : "border-transparent bg-secondary/20 hover:bg-secondary/40",
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => go(g.items[0].id)}
                            className="block w-full text-left"
                          >
                            <div className="flex items-center gap-1.5">
                              <span
                                className={cn(
                                  "h-1.5 w-1.5 rounded-full transition",
                                  isActive
                                    ? "bg-primary"
                                    : "bg-muted-foreground/50 group-hover/grp:bg-primary",
                                )}
                              />
                              <h3 className="text-display text-sm font-medium text-foreground">
                                {g.titol}
                              </h3>
                            </div>
                            <p className="mt-0.5 text-[0.7rem] leading-snug text-muted-foreground">
                              {g.descripcio}
                            </p>
                          </button>
                          <ul className="mt-2 space-y-0.5">
                            {g.items.map((it) => (
                              <li key={it.id}>
                                <button
                                  type="button"
                                  onClick={() => go(it.id)}
                                  className={cn(
                                    "flex w-full items-center gap-1.5 rounded-md px-2 py-1 text-left text-[0.75rem] transition",
                                    active === it.id
                                      ? "bg-primary/15 font-medium text-primary"
                                      : "text-foreground/75 hover:bg-background/60 hover:text-foreground",
                                  )}
                                >
                                  <ChevronRight className="h-3 w-3 shrink-0 opacity-50" />
                                  {it.etiqueta}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* CTA "Escolta els discos" */}
          <button
            type="button"
            onClick={() => go(navegacioAgrupada.cta.id)}
            className="group flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-primary-foreground shadow-[0_0_28px_-8px] shadow-primary transition hover:bg-primary/90"
          >
            <Headphones className="h-3.5 w-3.5" />
            {navegacioAgrupada.cta.etiqueta}
          </button>
        </div>

        {/* Botó hamburguesa — mòbil */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground lg:hidden"
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Barra de progrés */}
      <motion.div
        style={{ scaleX: progress }}
        className="h-0.5 origin-left bg-gradient-to-r from-primary via-amber-300 to-primary"
      />

      {/* Menú mòbil — drawer a pantalla completa amb categories col·lapsables */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden scroll-warm"
          >
            <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
              {/* CTA prominent a dalt */}
              <button
                type="button"
                onClick={() => go(navegacioAgrupada.cta.id)}
                className="mb-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-[0_0_28px_-8px] shadow-primary"
              >
                <Headphones className="h-4 w-4" />
                {navegacioAgrupada.cta.etiqueta}
              </button>

              <p className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {navegacioAgrupada.trigger}
              </p>

              <div className="space-y-2">
                {navegacioAgrupada.grups.map((g, idx) => (
                  <MobileAccordion
                    key={g.titol}
                    titol={g.titol}
                    descripcio={g.descripcio}
                    items={g.items}
                    activeId={active}
                    defaultOpen={grupHasActive(g.items)}
                    onGo={go}
                    indexBadge={String(idx + 1).padStart(2, "0")}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/* === Acordió mòbil === */
function MobileAccordion({
  titol,
  descripcio,
  items,
  activeId,
  defaultOpen,
  onGo,
  indexBadge,
}: {
  titol: string;
  descripcio: string;
  items: { id: string; etiqueta: string }[];
  activeId: string;
  defaultOpen: boolean;
  onGo: (id: string) => void;
  indexBadge: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const hasActive = items.some((i) => i.id === activeId);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border transition",
        hasActive
          ? "border-primary/40 bg-primary/10"
          : "border-border/60 bg-secondary/20",
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-3 text-left"
      >
        <span
          className={cn(
            "font-mono text-[0.65rem] tracking-wider",
            hasActive ? "text-primary" : "text-muted-foreground",
          )}
        >
          {indexBadge}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-display text-base text-foreground">
            {titol}
          </span>
          <span className="block text-[0.72rem] leading-snug text-muted-foreground">
            {descripcio}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="border-t border-border/40 p-2">
              {items.map((it) => (
                <li key={it.id}>
                  <button
                    type="button"
                    onClick={() => onGo(it.id)}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm transition",
                      activeId === it.id
                        ? "bg-primary/15 font-medium text-primary"
                        : "text-foreground/85 hover:bg-secondary/40",
                    )}
                  >
                    <ChevronRight className="h-3.5 w-3.5 opacity-50" />
                    {it.etiqueta}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
