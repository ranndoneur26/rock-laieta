"use client";

import { motion } from "framer-motion";
import { timeline, type Esdeveniment } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { Disc3, Flame, Sparkles, Sunset, Flag, Milestone, History } from "lucide-react";
import { cn } from "@/lib/utils";

const iconFor = (e: Esdeveniment["icona"]) => {
  switch (e) {
    case "antecedent":
      return History;
    case "fundacio":
      return Disc3;
    case "disc":
      return Flame;
    case "canvi":
      return Sparkles;
    case "declivi":
      return Sunset;
    case "llegat":
      return Flag;
    default:
      return Milestone;
  }
};

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="05"
          kicker="Cronologia"
          title="De la fundació al llegat"
          description="Deu moments que acompanyen l'Ona laietana del naixement de Zeleste fins al relleu al Rock Català."
        />

        <div className="relative mt-10">
          {/* center line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent md:left-1/2" />

          <ol className="space-y-6 md:space-y-0">
            {timeline.map((ev, i) => {
              const Icon = iconFor(ev.icona);
              const left = i % 2 === 0;
              return (
                <li
                  key={ev.any + ev.titol}
                  className={cn(
                    "relative md:grid md:grid-cols-2 md:gap-8",
                    "md:py-3",
                  )}
                >
                  {/* node */}
                  <div className="absolute left-6 top-1 z-10 -translate-x-1/2 md:left-1/2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-background">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                  </div>

                  {/* content card */}
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                    className={cn(
                      "ml-12 md:ml-0",
                      left ? "md:col-start-1 md:pr-12 md:text-right" : "md:col-start-2 md:pl-12",
                    )}
                  >
                    <div className="group rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:border-primary/50">
                      <div
                        className={cn(
                          "flex items-center gap-3",
                          left ? "md:justify-end" : "",
                        )}
                      >
                        <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs font-semibold text-primary">
                          {ev.any}
                        </span>
                        <Icon className="h-4 w-4 text-primary/70" />
                      </div>
                      <h3 className="mt-3 text-display text-2xl text-foreground">
                        {ev.titol}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {ev.descripcio}
                      </p>
                    </div>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
