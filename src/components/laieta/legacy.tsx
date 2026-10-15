import Image from "next/image";
import { llegat } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { ArrowRight, Music4 } from "lucide-react";

export function Legacy() {
  return (
    <section id="llegat" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="12"
          kicker="Llegat"
          title="La flama que no s'apaga"
          description={llegat.introduccio}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* visual */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/laieta/legacy.png"
              alt="Multitud d'un concert amb les mans alçades sota llums daurades"
              fill
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur">
                <Music4 className="h-3.5 w-3.5" /> 1979 → 1997 → avui
              </span>
            </div>
          </div>

          {/* heirs */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            {llegat.hereus.map((h, i) => (
              <div
                key={h.nom}
                className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:border-primary/50"
              >
                <span className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-lg text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-display text-2xl text-foreground">
                    {h.nom}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {h.descripcio}
                  </p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground/40 transition group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
