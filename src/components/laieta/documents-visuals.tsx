import {
  documentsVisuals,
  documentsVisualsEnllacos,
  galeriaVideos,
} from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { ExternalLink, Film, Youtube, Tv, Link2 } from "lucide-react";

export function DocumentsVisuals() {
  return (
    <section
      id="doc-visuals"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="11"
          kicker="Doc. Visuals"
          title="Documents visuals"
          description="Documentals i concerts en imatge: la memòria audiovisual del moviment. Podeu reproduir-los aquí o obrir-los directament a la plataforma."
        />

        {/* embeds */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {documentsVisuals.map((d) => {
            const Icon = d.tipus === "YouTube" ? Youtube : Tv;
            return (
              <article
                key={d.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card"
              >
                {/* embed */}
                <div className="relative aspect-video w-full bg-black">
                  {d.embedUrl ? (
                    <iframe
                      src={d.embedUrl}
                      title={d.titol}
                      allow={
                        d.tipus === "YouTube"
                          ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          : "encrypted-media"
                      }
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  ) : null}
                </div>
                {/* meta */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-wider"
                      style={{
                        color: d.color,
                        background: `${d.color}1a`,
                      }}
                    >
                      <Icon className="h-3 w-3" /> {d.etiqueta}
                    </span>
                  </div>
                  <h3 className="mt-3 text-display text-2xl leading-tight text-foreground">
                    {d.titol}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {d.descripcio}
                  </p>
                  <a
                    href={d.urlExtern}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Obre a {d.etiqueta}
                    →
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* galeria de vídeos dels grups */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Youtube className="h-4 w-4" /> Galeria de vídeos — en directe dels grups
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {galeriaVideos.map((v) => (
              <article
                key={v.id}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card"
              >
                <div className="relative aspect-video w-full bg-black">
                  <iframe
                    src={v.embedUrl}
                    title={v.grup}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-4">
                  <h4 className="text-display text-xl text-foreground">
                    {v.grup}
                  </h4>
                  <a
                    href={v.urlExtern}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Obre a YouTube →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* altres enllaços */}
        <div className="mt-10 rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-6 sm:p-8">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Link2 className="h-4 w-4" /> Més enllaços
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {documentsVisualsEnllacos.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border/50 bg-card/60 px-4 py-3 transition hover:-translate-y-0.5 hover:border-primary/50"
              >
                <Film className="h-4 w-4 shrink-0 text-primary/70" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">
                    {l.nom}
                  </p>
                  <p className="truncate font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                    {l.tipus}
                  </p>
                </div>
                <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50 transition group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
