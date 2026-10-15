"use client";

import { motion } from "framer-motion";
import { cartografia } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  Sparkles,
  Disc3,
  AlertTriangle,
  Stars,
  Users2,
  Music2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function CartografiaMoviment() {
  return (
    <section id="cartografia" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="08"
          kicker="Cartografia"
          title="Cartografia exhaustiva del moviment"
          description="Bandes, col·lectius i projectes satèl·lits: el mapa complet de la constel·lació laietana."
        />

        {/* apunt / constellation thesis */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/30 to-transparent p-6 sm:p-8"
        >
          <Stars className="absolute right-5 top-5 h-10 w-10 text-primary/15" />
          {/* decorative constellation dots */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            {[
              [12, 30],
              [22, 70],
              [80, 25],
              [88, 65],
              [45, 88],
              [65, 45],
              [35, 55],
            ].map(([x, y], i) => (
              <span
                key={i}
                className="absolute h-1 w-1 rounded-full bg-primary animate-pulse-soft"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
          <p className="relative max-w-3xl text-balance-pretty text-lg leading-relaxed text-foreground/90 sm:text-xl">
            {cartografia.apunt}
          </p>
          <p className="relative mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            L’apunt d’estructura
          </p>
        </motion.div>

        {/* Nucli discogràfic */}
        <div className="mt-14">
          <div className="flex items-center gap-3 border-b border-border/40 pb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Disc3 className="h-4 w-4 text-primary" />
            </span>
            <div>
              <h3 className="text-display text-2xl text-foreground sm:text-3xl">
                {cartografia.nucli.etiqueta}
              </h3>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {cartografia.nucli.sub}
              </p>
            </div>
          </div>

          {/* constellation cluster */}
          <div className="mt-6 rounded-2xl border border-border/60 bg-secondary/20 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="z-10 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary">
                <Sparkles className="h-4 w-4" />
                {cartografia.nucli.centre}
              </span>
              {cartografia.nucli.bandes.map((b) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-sm text-foreground/85 transition hover:border-primary/60 hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                  {b}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Fitxes complementàries */}
        <div className="mt-14">
          <div className="flex items-center gap-3 border-b border-border/40 pb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Music2 className="h-4 w-4 text-primary" />
            </span>
            <h3 className="text-display text-2xl text-foreground sm:text-3xl">
              Fitxes complementàries
            </h3>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cartografia.fitxes.map((f) => (
              <motion.article
                key={f.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary/50 to-transparent p-5 transition hover:-translate-y-1",
                  f.avis
                    ? "border-dashed border-amber-400/50 hover:border-amber-400/80"
                    : "border-border/60 hover:border-primary/50",
                )}
                style={{ ["--accent" as string]: f.color }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: f.color }}
                />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p
                      className="font-mono text-[0.6rem] uppercase tracking-[0.15em]"
                      style={{ color: f.color }}
                    >
                      {f.tipus}
                    </p>
                    <h4 className="mt-1 text-display text-xl leading-tight text-foreground">
                      {f.nom}
                    </h4>
                  </div>
                  {f.avis ? (
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-400" />
                  ) : null}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
                {f.avis ? (
                  <p className="mt-3 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3 py-2 text-[0.7rem] italic leading-relaxed text-amber-200">
                    {f.avis}
                  </p>
                ) : null}
                {f.tags && f.tags.length > 0 ? (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/50 bg-background/40 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>

        {/* Els col·lectius i els «avant la lettre» */}
        <div className="mt-14">
          <div className="flex items-center gap-3 border-b border-border/40 pb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <Users2 className="h-4 w-4 text-primary" />
            </span>
            <div>
              <h3 className="text-display text-2xl text-foreground sm:text-3xl">
                Els col·lectius i els «avant la lettre»
              </h3>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Tribus, fronteres i figures bisagra
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cartografia.collectius.map((c) => (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:-translate-y-1 hover:border-primary/50"
                style={{ ["--accent" as string]: c.color }}
              >
                <span
                  className="absolute left-0 top-0 h-full w-1"
                  style={{ background: c.color }}
                />
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-display text-xl leading-tight text-foreground">
                    {c.nom}
                  </h4>
                  <span
                    className="shrink-0 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium"
                    style={{
                      borderColor: `${c.color}55`,
                      color: c.color,
                      background: `${c.color}14`,
                    }}
                  >
                    {c.relacio}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                {c.tags && c.tags.length > 0 ? (
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/50 bg-background/40 px-2 py-0.5 text-[0.65rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
