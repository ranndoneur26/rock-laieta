import Image from "next/image";
import { zeleste } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { MapPin, CalendarDays, Music2, Tv } from "lucide-react";

export function Zeleste() {
  return (
    <section id="zeleste" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="04"
          kicker="L'epicentre"
          title="Sala Zeleste"
          description="Més que una sala de concerts: un estudi, una revista i un segell que bastiren una indústria al voltant del moviment."
        />

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* visual */}
          <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-border/60">
            <Image
              src="/laieta/zeleste.png"
              alt="Interior d'una sala de concerts barcelonina dels anys 70 amb llum ambre i siluetes de músics"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary backdrop-blur">
                <CalendarDays className="h-3.5 w-3.5" /> {zeleste.fundacio}
              </span>
            </div>
          </div>

          {/* info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-6">
              <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Ubicació
              </p>
              <p className="mt-2 text-display text-2xl text-foreground">
                {zeleste.ubicacio}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {zeleste.context}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {zeleste.pilars.map((p) => (
                <div
                  key={p.nom}
                  className="rounded-xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-4"
                >
                  <Music2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 text-display text-xl text-foreground">
                    {p.nom}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {p.descripcio}
                  </p>
                </div>
              ))}
            </div>

            <blockquote className="rounded-2xl border-l-2 border-primary bg-primary/5 p-5 text-sm italic leading-relaxed text-foreground/85">
              {zeleste.programacio}
            </blockquote>
          </div>
        </div>

        {/* BTV — 50 anys de la sala Zeleste */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-2.5">
            <div className="flex items-center gap-2">
              <Tv className="h-4 w-4 text-primary" />
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                BTV · 50 anys de la sala Zeleste
              </p>
            </div>
            <span className="font-mono text-[0.6rem] uppercase tracking-wider text-primary">
              Documental
            </span>
          </div>
          <div className="relative aspect-video w-full bg-black">
            <iframe
              src="https://cdnapisec.kaltura.com/p/2346171/sp/234617100/embedIframeJs/uiconf_id/42600891/partner_id/2346171?iframeembed=true&playerId=1_v1nt8c5x&entry_id=1_v1nt8c5x&flashvars[streamerType]=auto"
              title="50 anys de la sala Zeleste — BTV"
              allow="autoplay *; fullscreen *; encrypted-media *"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
