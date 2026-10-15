"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  persones,
  personesIntro,
  type CategoriaPersona,
} from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  Briefcase,
  Palette,
  Newspaper,
  History,
  Star,
  Quote,
  Users,
  ShoppingBag,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Filtre = "Tots" | CategoriaPersona;

const iconPerCategoria: Record<CategoriaPersona, typeof Briefcase> = {
  "Gestió i producció": Briefcase,
  "Imatge i escenografia": Palette,
  "Publicacions i crònica": Newspaper,
  "Memòria i recuperació": History,
};

export function PersonesIndispensables() {
  const [filtre, setFiltre] = useState<Filtre>("Tots");

  const grups = useMemo(() => {
    const llista =
      filtre === "Tots"
        ? personesIntro.categories
        : ([filtre] as CategoriaPersona[]);
    return llista.map((cat) => ({
      categoria: cat,
      persones: persones.filter((p) => p.categoria === cat),
    }));
  }, [filtre]);

  return (
    <section id="persones" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="07"
          kicker="Persones"
          title="Les persones indispensables"
          description="Fora de l'escenari: els qui fabricaven les condicions perquè l'estrella existís."
        />

        {/* lede callout */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/30 to-transparent p-6 sm:p-8">
          <Quote className="absolute right-5 top-5 h-10 w-10 text-primary/15" />
          <p className="max-w-3xl text-balance-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {personesIntro.lede}
          </p>
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {personesIntro.subtitol}
          </p>
        </div>

        {/* filter chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(["Tots", ...personesIntro.categories] as Filtre[]).map((c) => (
            <button
              key={c}
              onClick={() => setFiltre(c)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                filtre === c
                  ? "border-transparent bg-primary text-primary-foreground"
                  : "border-border/60 text-muted-foreground hover:text-foreground",
              )}
            >
              {c === "Tots" ? (
                <Users className="h-3.5 w-3.5" />
              ) : (
                (() => {
                  const Icon = iconPerCategoria[c as CategoriaPersona];
                  return <Icon className="h-3.5 w-3.5" />;
                })()
              )}
              {c}
            </button>
          ))}
        </div>

        {/* groups */}
        <div className="mt-10 space-y-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={filtre}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {grups.map((g) => {
                const Icon = iconPerCategoria[g.categoria];
                return (
                  <div key={g.categoria} className="scroll-mt-24">
                    <div className="flex items-center gap-3 border-b border-border/40 pb-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <h3 className="text-display text-2xl text-foreground sm:text-3xl">
                        {g.categoria}
                      </h3>
                      <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        {g.persones.length}{" "}
                        {g.persones.length === 1 ? "figura" : "figuras"}
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {g.persones.map((p) => (
                        <motion.article
                          key={p.id}
                          layout
                          className={cn(
                            "group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary/50 to-transparent p-5 transition hover:-translate-y-1",
                            p.destacat
                              ? "border-primary/40 hover:border-primary/70"
                              : "border-border/60 hover:border-foreground/30",
                          )}
                          style={{ ["--accent" as string]: p.color }}
                        >
                          <span
                            className="absolute inset-x-0 top-0 h-1"
                            style={{ background: p.color }}
                          />
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-xs text-primary/90">
                                {p.funcio}
                              </p>
                              <h4 className="mt-1 text-display text-xl leading-tight text-foreground">
                                {p.nom}
                              </h4>
                            </div>
                            {p.destacat ? (
                              <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
                            ) : null}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            {p.bio}
                          </p>
                          {p.tags && p.tags.length > 0 ? (
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {p.tags.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-border/50 bg-background/40 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          ) : null}
                          {p.url ? (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
                            >
                              {p.url.includes("amazon") ? (
                                <>
                                  <ShoppingBag className="h-3.5 w-3.5" /> On comprar el llibre →
                                </>
                              ) : (
                                <>
                                  <ExternalLink className="h-3.5 w-3.5" /> Més informació →
                                </>
                              )}
                            </a>
                          ) : null}
                        </motion.article>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
