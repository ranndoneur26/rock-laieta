import { Disc3 } from "lucide-react";
import { moviment } from "@/lib/laieta-data";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                <Disc3 className="h-4 w-4 text-primary" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-display text-lg text-foreground">
                  {moviment.titol}
                </span>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {moviment.subtitol}
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {moviment.lema}. Una experiència interactiva reconstruïda a partir
              de fonts públiques, en homenatge al moviment que va obrir camí a la
              música catalana moderna.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Seccions
              </p>
              <ul className="mt-3 space-y-1.5">
                {[
                  { l: "Manifest", h: "#manifest" },
                  { l: "Context", h: "#context" },
                  { l: "Fusió", h: "#fusio" },
                  { l: "Zeleste", h: "#zeleste" },
                  { l: "Cronologia", h: "#timeline" },
                ].map((s) => (
                  <li key={s.h}>
                    <a
                      href={s.h}
                      className="text-muted-foreground transition hover:text-primary"
                    >
                      {s.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                Més
              </p>
              <ul className="mt-3 space-y-1.5">
                {[
                  { l: "Artistes", h: "#artistes" },
                  { l: "Persones", h: "#persones" },
                  { l: "Cartografia", h: "#cartografia" },
                  { l: "Obres", h: "#obres" },
                  { l: "Recopilatori", h: "#recopilatori" },
                  { l: "Doc. Visuals", h: "#doc-visuals" },
                  { l: "Llegat", h: "#llegat" },
                  { l: "Fonts", h: "#fonts" },
                ].map((s) => (
                  <li key={s.h}>
                    <a
                      href={s.h}
                      className="text-muted-foreground transition hover:text-primary"
                    >
                      {s.l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} · Reconstrucció editorial sobre
            l&apos;Ona laietana. by Van de CUl.
          </p>
          <a
            href="https://www.marcxicola.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-wider text-primary transition hover:underline"
          >
            www.marcxicola.com
          </a>
        </div>
      </div>
    </footer>
  );
}
