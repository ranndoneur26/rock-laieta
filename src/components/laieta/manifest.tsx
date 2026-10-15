import { moviment, manifest, contextHistoric } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { Quote, Sparkles, Calendar, MapPin } from "lucide-react";

export function Manifest() {
  return (
    <section id="manifest" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="01"
          kicker="Manifest"
          title="El revulsiu que va canviar la música catalana"
          description={moviment.descripcio}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-secondary/40 p-5">
            <Calendar className="h-5 w-5 text-primary" />
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Període
            </p>
            <p className="text-display text-xl text-foreground">
              {moviment.periode}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-secondary/40 p-5">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Epicentre
            </p>
            <p className="text-display text-xl text-foreground">
              {moviment.epicentre}
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-secondary/40 p-5">
            <Sparkles className="h-5 w-5 text-primary" />
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Identitat
            </p>
            <p className="text-sm leading-relaxed text-foreground/80">
              {moviment.identitat}
            </p>
          </div>
        </div>

        {/* quotes */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {manifest.map((c, i) => (
            <figure
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-secondary/60 to-transparent p-6 transition hover:border-primary/50"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15 transition group-hover:text-primary/30" />
              <blockquote className="relative text-lg leading-relaxed text-foreground/90">
                “{c.text}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="h-px w-6 bg-primary/60" />
                {c.autor} · {c.font}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Context() {
  return (
    <section id="context" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          kicker="Context"
          title={contextHistoric.titol}
        />
        <div className="mt-8 rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 via-background to-background p-6 sm:p-10">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contextHistoric.cos.map((p, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
