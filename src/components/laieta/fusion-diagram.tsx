"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fusio } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { Disc3, Play, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function FusionDiagram() {
  const [activeId, setActiveId] = useState(fusio[0].id);
  const active = fusio.find((f) => f.id === activeId)!;
  const radius = 40; // genre ring radius (%)

  const goToArtistes = () => {
    document
      .getElementById("artistes")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const genres = useMemo(
    () =>
      fusio.map((f, i) => {
        const angle = (i / fusio.length) * Math.PI * 2 - Math.PI / 2;
        return {
          ...f,
          x: 50 + Math.cos(angle) * radius,
          y: 50 + Math.sin(angle) * radius,
        };
      }),
    [],
  );

  return (
    <section id="fusio" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="03"
          kicker="Fusió"
          title="De què està fet el so laietà?"
          description="Graf interactiu de relacions: clica un gènere i s'il·luminen els grups i els temes que el practiquen."
        />

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* graph */}
          <div className="relative mx-auto aspect-square w-full max-w-[560px]">
            {/* guide rings */}
            <div className="vinyl-grooves absolute inset-0 rounded-full border border-border/40 bg-secondary/20" />
            <div className="absolute inset-[14%] rounded-full border border-border/30" />
            <div className="absolute inset-[30%] rounded-full border border-border/20" />

            {/* center node */}
            <div className="absolute left-1/2 top-1/2 z-20 flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/40 bg-card text-center shadow-[0_0_60px_-15px] shadow-primary/40">
              <div className="px-2">
                <p className="text-display text-base leading-none text-primary glow-amber sm:text-lg">
                  ROCK
                </p>
                <p className="text-display text-base leading-none text-primary glow-amber sm:text-lg">
                  LAIETA
                </p>
                <p className="mt-1 font-mono text-[0.5rem] uppercase tracking-[0.15em] text-muted-foreground">
                  Ona laietana
                </p>
              </div>
            </div>

            {/* connector lines (svg) */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden
            >
              {genres.map((g) => {
                const isActive = g.id === activeId;
                return (
                  <line
                    key={g.id}
                    x1="50"
                    y1="50"
                    x2={g.x}
                    y2={g.y}
                    stroke={isActive ? g.color : "currentColor"}
                    strokeOpacity={isActive ? 0.75 : 0.12}
                    strokeWidth={isActive ? 0.7 : 0.4}
                    className="text-muted-foreground transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* genre nodes */}
            {genres.map((g) => {
              const isActive = g.id === activeId;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveId(g.id)}
                  style={{ left: `${g.x}%`, top: `${g.y}%`, color: g.color }}
                  className={cn(
                    "group absolute z-10 flex h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border bg-card/95 p-1 text-center backdrop-blur transition-all duration-300",
                    isActive
                      ? "scale-110 border-current shadow-[0_0_40px_-8px] "
                      : "border-border/60 opacity-50 hover:scale-105 hover:opacity-100 hover:border-current",
                  )}
                  aria-pressed={isActive}
                >
                  <span
                    className="absolute inset-0 rounded-full opacity-10 transition group-hover:opacity-25"
                    style={{ background: g.color }}
                  />
                  <span className="relative font-mono text-[0.6rem] font-semibold uppercase leading-tight tracking-tight text-foreground">
                    {g.nom}
                  </span>
                </button>
              );
            })}
          </div>

          {/* detail panel */}
          <div className="relative min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/50 to-transparent p-6 sm:p-8"
                style={{ boxShadow: `inset 0 0 0 1px ${active.color}22` }}
              >
                <span
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
                  style={{ background: `${active.color}22`, color: active.color }}
                >
                  Ingredient
                </span>
                <h3 className="mt-4 text-display text-3xl text-foreground sm:text-4xl">
                  {active.nom}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {active.descripcio}
                </p>

                {/* referents */}
                <div className="mt-5">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Referents
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {active.referents.map((r) => (
                      <span
                        key={r}
                        className="rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-foreground/80"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                </div>

                {/* grups that practice it (illuminated) */}
                <div className="mt-6">
                  <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <Users2 className="h-3.5 w-3.5" /> Grups que el practiquen
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <AnimatePresence mode="popLayout">
                      {active.grups.map((g, i) => (
                        <motion.button
                          key={g}
                          layout
                          initial={{ opacity: 0, scale: 0.7 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={goToArtistes}
                          className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5"
                          style={{
                            borderColor: `${active.color}66`,
                            color: active.color,
                            background: `${active.color}12`,
                          }}
                        >
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ background: active.color }}
                          />
                          {g}
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* key temes */}
                <div className="mt-6">
                  <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <Disc3 className="h-3.5 w-3.5" /> Temes clau
                  </p>
                  <ul className="mt-3 space-y-2">
                    {active.temes.map((t) => (
                      <li
                        key={t.titol}
                        className="flex items-center gap-3 rounded-lg border border-border/40 bg-card/40 px-3 py-2"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: active.color }}
                        />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-foreground">
                            {t.titol}
                          </p>
                          <p className="truncate text-[0.7rem] text-muted-foreground">
                            {t.artista}
                          </p>
                        </div>
                        <a
                          href={`https://open.spotify.com/search/${encodeURIComponent(`${t.titol} ${t.artista}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex shrink-0 items-center gap-1 font-mono text-[0.6rem] uppercase tracking-wider text-primary transition hover:underline"
                        >
                          <Play className="h-3 w-3" /> Escolta
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
