"use client";

import Image from "next/image";
import { moviment, manifest, contextHistoric, type ContextIcon } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Quote,
  Sparkles,
  Calendar,
  MapPin,
  Landmark,
  Music2,
  Users2,
  Globe2,
  BookOpen,
  Theater,
  Disc3,
  Compass,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const CONTEXT_ICON_MAP: Record<ContextIcon, typeof Landmark> = {
  landmark: Landmark,
  music: Music2,
  users: Users2,
  globe: Globe2,
  book: BookOpen,
  theater: Theater,
  calendar: Calendar,
  disc: Disc3,
  compass: Compass,
};

export function Manifest() {
  return (
    <section id="manifest" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* banner */}
        <div className="relative mb-8 aspect-[16/7] w-full overflow-hidden rounded-2xl border border-border/60">
          <Image
            src="/laieta/rock-laieta-bcn.jpg"
            alt="Rock Laietà Barcelona — banner de l'Ona laietana"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
        </div>
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
  // Troba els blocs destacats per obrir-los per defecte
  const defaultOpen = contextHistoric.blocs
    .filter((b) => b.destacat)
    .map((b) => b.id);

  const goToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="context" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="02"
          kicker="Context"
          title={contextHistoric.titol}
          description={contextHistoric.intro}
        />

        {/* Subtítol i nombre de blocs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
            <BookOpen className="h-3 w-3" />
            {contextHistoric.subtitol}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {contextHistoric.blocs.length} blocs desplegables
          </span>
        </div>

        {/* Desplegable (accordion) */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card/40 backdrop-blur">
          <Accordion
            type="multiple"
            defaultValue={defaultOpen}
            className="w-full"
          >
            {contextHistoric.blocs.map((bloc, idx) => {
              const Icon = CONTEXT_ICON_MAP[bloc.icona] ?? BookOpen;
              const idxStr = String(idx + 1).padStart(2, "0");
              return (
                <AccordionItem
                  key={bloc.id}
                  value={bloc.id}
                  className="border-b border-border/40 last:border-b-0 data-[state=open]:bg-secondary/20"
                >
                  <AccordionTrigger className="group flex items-start gap-3 px-5 py-5 hover:no-underline sm:px-6">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col gap-1 text-left">
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {idxStr} · {bloc.kicker}
                        </span>
                      </span>
                      <span className="text-display text-lg leading-tight text-foreground sm:text-xl">
                        {bloc.titol}
                      </span>
                      <span className="font-mono text-[0.7rem] text-muted-foreground/70">
                        {bloc.paragrafs.length} paràgrafs
                        {bloc.enllacosExterns && bloc.enllacosExterns.length > 0
                          ? ` · ${bloc.enllacosExterns.length} referències externes`
                          : ""}
                        {bloc.enllacosInterns && bloc.enllacosInterns.length > 0
                          ? ` · ${bloc.enllacosInterns.length} enllaços interns`
                          : ""}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-6 sm:px-6">
                    <div className="mt-2 grid grid-cols-1 gap-6 lg:grid-cols-3">
                      {/* Paràgrafs */}
                      <div className="lg:col-span-2">
                        {bloc.paragrafs.map((p, i) => (
                          <p
                            key={i}
                            className={
                              i === 0
                                ? "text-sm leading-relaxed text-foreground/90 sm:text-base"
                                : "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
                            }
                          >
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Enllaços laterals */}
                      {(bloc.enllacosInterns?.length ||
                        bloc.enllacosExterns?.length) ? (
                        <aside className="lg:col-span-1">
                          {/* Interns */}
                          {bloc.enllacosInterns &&
                            bloc.enllacosInterns.length > 0 && (
                              <div className="rounded-xl border border-primary/30 bg-primary/5 p-3">
                                <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-primary">
                                  <ArrowRight className="h-3 w-3" />
                                  Llegeix dins la web
                                </p>
                                <ul className="space-y-1">
                                  {bloc.enllacosInterns.map((e) => (
                                    <li key={e.id}>
                                      <button
                                        type="button"
                                        onClick={() => goToSection(e.id)}
                                        className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-xs text-foreground/85 transition hover:bg-primary/10 hover:text-primary"
                                      >
                                        <ArrowRight className="h-3 w-3 shrink-0 opacity-50" />
                                        <span className="min-w-0 flex-1 truncate">
                                          {e.etiqueta}
                                        </span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                          {/* Externs */}
                          {bloc.enllacosExterns &&
                            bloc.enllacosExterns.length > 0 && (
                              <div className="mt-3 rounded-xl border border-border/60 bg-secondary/30 p-3">
                                <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                                  <ExternalLink className="h-3 w-3" />
                                  Referències externes
                                </p>
                                <ul className="space-y-1">
                                  {bloc.enllacosExterns.map((e) => (
                                    <li key={e.url}>
                                      <a
                                        href={e.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-2 rounded-md px-2 py-1.5 text-xs text-foreground/85 transition hover:bg-secondary/60 hover:text-foreground"
                                      >
                                        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0 opacity-50" />
                                        <span className="min-w-0 flex-1">
                                          <span className="block truncate">
                                            {e.etiqueta}
                                          </span>
                                          {e.font && (
                                            <span className="font-mono text-[0.6rem] text-muted-foreground/70">
                                              {e.font}
                                            </span>
                                          )}
                                        </span>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </aside>
                      ) : null}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Peu amb avís d'ampliació */}
        <p className="mt-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Clica cada bloc per desplegar-ne el contingut · {contextHistoric.blocs.length} vessants del context històric
        </p>
      </div>
    </section>
  );
}
