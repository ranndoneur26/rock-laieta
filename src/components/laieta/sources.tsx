import { fontsDocumentals, fontsEnLinia, bibliografia } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  ExternalLink,
  BookOpen,
  Newspaper,
  Library,
  Globe,
  FileText,
  ShoppingBag,
  BookMarked,
  ChevronDown,
} from "lucide-react";

export function Sources() {
  return (
    <section id="fonts" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="17"
          kicker="Fonts"
          title="Fonts documentals consolidades"
          description="Contingut reconstruït i enriquit a partir d'aquestes fonts primàries, secundàries i recursos en línia, en homenatge al moviment."
        />

        {/* Primàries */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <BookOpen className="h-4 w-4" /> Fonts primàries
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fontsDocumentals.primaries.map((f) => (
              <a
                key={f.titol}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-transparent p-5 transition hover:-translate-y-1 hover:border-primary/60"
              >
                <span className="absolute inset-x-0 top-0 h-1 bg-primary" />
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-primary/80">
                  {f.tipus}
                </p>
                <p className="mt-3 text-display text-lg leading-tight text-foreground">
                  {f.titol}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-[0.65rem] uppercase tracking-wider text-primary">
                  <ShoppingBag className="h-3.5 w-3.5" /> On comprar →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Secundàries */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Newspaper className="h-4 w-4" /> Fonts secundàries representatives
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fontsDocumentals.secondaries.map((f) => (
              <div
                key={f.titol}
                className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:border-foreground/30"
              >
                <div className="flex items-center gap-2">
                  <Library className="h-4 w-4 text-primary/80" />
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {f.tipus}
                  </span>
                </div>
                <p className="mt-3 text-display text-lg leading-tight text-foreground">
                  {f.titol}
                </p>
                {f.autor ? (
                  <p className="mt-1 text-xs text-primary/90">{f.autor}</p>
                ) : null}
                {f.detall ? (
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {f.detall}
                  </p>
                ) : null}
                {f.url ? (
                  <a
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 pt-4 font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" /> On comprar →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Bibliografia */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <BookMarked className="h-4 w-4" /> Bibliografia utilitzada
          </h3>
          <div className="mt-4 space-y-2">
            {bibliografia.map((grup) => (
              <details key={grup.id} className="group rounded-xl border border-border/40 bg-card/40 overflow-hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3 select-none">
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[0.6rem] text-muted-foreground/60">{String(bibliografia.indexOf(grup) + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-medium text-foreground">{grup.titol}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono text-[0.6rem] text-muted-foreground/60">{grup.entrades.length}</span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition group-open:rotate-180" />
                  </span>
                </summary>
                <ol className="space-y-2 px-4 pb-4 pt-1 text-sm leading-relaxed text-foreground/80">
                  {grup.entrades.map((b, i) => (
                    <li key={b.id} className="flex gap-3 border-l-2 border-border/40 pl-3">
                      <span className="flex-1">
                        <span className="font-medium text-foreground">{b.autor}</span>
                        {b.any !== "—" ? (
                          <span className="text-muted-foreground"> ({b.any})</span>
                        ) : null}{" "}
                        <span className="italic text-foreground/85">{b.titol}</span>
                        {b.lloc ? <span className="text-muted-foreground">. {b.lloc}: </span> : <span className="text-muted-foreground">. </span>}
                        {b.editorial ? (
                          <span className="text-muted-foreground">{b.editorial}.</span>
                        ) : null}{" "}
                        <span className="font-mono text-[0.55rem] uppercase tracking-wider text-muted-foreground/60">{b.tipus}</span>
                        {b.url ? (
                          <a href={b.url} target="_blank" rel="noopener noreferrer" className="ml-1 inline-flex items-center gap-0.5 text-primary transition hover:underline">
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : null}
                      </span>
                    </li>
                  ))}
                </ol>
              </details>
            ))}
          </div>
        </div>

        {/* En línia */}
        <div className="mt-10">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Globe className="h-4 w-4" /> Recursos en línia
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {fontsEnLinia.map((f) => (
              <a
                key={f.url}
                href={f.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-start justify-between">
                  <FileText className="h-5 w-5 text-primary" />
                  <ExternalLink className="h-4 w-4 text-muted-foreground/50 transition group-hover:text-primary" />
                </div>
                <p className="mt-4 text-display text-lg leading-tight text-foreground">
                  {f.nom}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {f.descripcio}
                </p>
                <p className="mt-auto pt-4 truncate font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground/70">
                  {f.url.replace(/^https?:\/\//, "")}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
