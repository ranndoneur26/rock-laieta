"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { obresClaue } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { ArrowDownUp, Disc3, ArrowUp, ArrowDown, Play } from "lucide-react";
import { cn } from "@/lib/utils";

type Ordre = "asc" | "desc";

export function ObresClau() {
  const [ordre, setOrdre] = useState<Ordre>("asc");

  const obres = useMemo(() => {
    const sorted = [...obresClaue].sort((a, b) => a.anySort - b.anySort);
    return ordre === "asc" ? sorted : [...sorted].reverse();
  }, [ordre]);

  const toggle = () => setOrdre((o) => (o === "asc" ? "desc" : "asc"));

  return (
    <section id="obres" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="09"
          kicker="Obres clau"
          title="Discografia i obres cabals"
          description="Vuit obres que articulen el cicle laietà, de la psicodèlia seminal de 1969 a la síntesi madura de 1977. Ordena-les cronològicament."
        />

      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        {/* toolbar */}
        <div className="flex items-center justify-between gap-3 rounded-t-2xl border border-border/60 bg-secondary/30 px-5 py-3">
          <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            <Disc3 className="h-3.5 w-3.5 text-primary" />
            Any · Títol · Artista · Rellevància
          </div>
          <button
            onClick={toggle}
            className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition hover:border-primary/60 hover:text-primary"
            aria-label="Inverteix l'ordre cronològic"
          >
            <ArrowDownUp className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">
              Any {ordre === "asc" ? "↑" : "↓"}
            </span>
            {ordre === "asc" ? (
              <ArrowUp className="h-3.5 w-3.5 sm:hidden" />
            ) : (
              <ArrowDown className="h-3.5 w-3.5 sm:hidden" />
            )}
          </button>
        </div>

        {/* list */}
        <div className="overflow-hidden rounded-b-2xl border border-border/60 bg-secondary/10">
          <AnimatePresence initial={false}>
            {obres.map((o, i) => (
              <motion.div
                key={o.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                className={cn(
                  "group relative flex items-start gap-4 px-4 py-4 transition-colors sm:px-6",
                  i !== obres.length - 1 && "border-b border-border/40",
                  "hover:bg-secondary/40",
                )}
              >
                {/* accent stripe */}
                <span
                  className="absolute inset-y-0 left-0 w-1"
                  style={{ background: o.color }}
                />
                {/* year */}
                <div className="w-16 shrink-0 pt-0.5 sm:w-24">
                  <span className="font-mono text-sm font-semibold text-primary sm:text-base">
                    {o.any}
                  </span>
                </div>
                {/* body */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-display text-xl leading-tight text-foreground sm:text-2xl">
                      {o.titol}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {o.artista}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {o.rellevancia}
                  </p>
                  <a
                    href={`https://open.spotify.com/search/${encodeURIComponent(`${o.titol} ${o.artista}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
                  >
                    <Play className="h-3 w-3" /> Escolta a Spotify →
                  </a>
                </div>
                {/* index */}
                <span className="hidden shrink-0 pt-0.5 font-mono text-[0.6rem] text-muted-foreground/50 sm:inline">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-4 text-right font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
          {obresClaue.length} obres · selecció no exhaustiva
        </p>
      </div>
    </section>
  );
}
