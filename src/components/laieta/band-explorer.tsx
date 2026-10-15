"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  artistes,
  musicsSessio,
  obresClaue,
  cartografia,
  type Artista,
  type CategoriaArtista,
} from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, Disc3, Star, Search, SlidersHorizontal, Share2, Network, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const categories: ("Tots" | CategoriaArtista)[] = [
  "Tots",
  "Fusió",
  "Rock progresiu",
  "Cantautor",
  "Rumba",
  "Jazz",
  "Postlaietà",
  "Instrumental",
];

export function BandExplorer() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Tots");
  const [q, setQ] = useState("");
  const [selected, setSelected] = useState<Artista | null>(null);

  const norm = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const filtered = useMemo(() => {
    return artistes.filter((a) => {
      const catOk = cat === "Tots" || a.categoria === cat;
      const qq = norm(q.trim());
      const qOk =
        !qq ||
        norm(a.nom).includes(qq) ||
        norm(a.bio).includes(qq) ||
        a.integrants.some((m) => norm(m).includes(qq)) ||
        a.albums.some((al) => norm(al.titol).includes(qq));
      return catOk && qOk;
    });
  }, [cat, q]);

  const goTo = (id: string) => {
    setSelected(null);
    setTimeout(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  };

  const related = selected
    ? {
        obres: obresClaue.filter(
          (o) =>
            o.artista.toLowerCase().includes(selected.nom.toLowerCase()) ||
            selected.nom.toLowerCase().includes(o.artista.toLowerCase()),
        ),
        fiches: cartografia.fitxes.filter(
          (f) =>
            f.nom.toLowerCase().includes(selected.nom.toLowerCase()) ||
            selected.nom.toLowerCase().includes(f.nom.toLowerCase()),
        ),
        collectius: cartografia.collectius.filter(
          (c) =>
            c.nom.toLowerCase().includes(selected.nom.toLowerCase()) ||
            selected.nom.toLowerCase().includes(c.nom.toLowerCase()),
        ),
      }
    : null;
  const hasRelated =
    related &&
    (related.obres.length > 0 ||
      related.fiches.length > 0 ||
      related.collectius.length > 0);

  return (
    <section id="artistes" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="06"
          kicker="Artistes"
          title="L'escena laietana"
          description="Vint-i-una figures i formacions cabals del rock laietà —del nucli de fusió als projectes satèl·lits i al postlaietanisme— amb biografies exhaustives. Filtra per categoria o cerca un nom."
        />

        {/* controls */}
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition",
                  cat === c
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border/60 text-muted-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cerca grup, integrant o disc…"
              className="h-10 w-full rounded-full border border-border/60 bg-secondary/40 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
            />
          </div>
        </div>

        {/* grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((a) => (
              <motion.button
                key={a.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(a)}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-br from-secondary/50 to-transparent p-5 text-left transition hover:-translate-y-1",
                  a.destacat
                    ? "border-primary/40 hover:border-primary/70"
                    : "border-border/60 hover:border-foreground/30",
                )}
                style={{ ["--accent" as string]: a.color }}
              >
                {/* top stripe */}
                <span
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: a.color }}
                />
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {a.anyInici}
                      {a.anyFi ? `–${a.anyFi}` : ""}
                    </p>
                    <h3 className="mt-1 text-display text-2xl leading-tight text-foreground">
                      {a.nom}
                    </h3>
                    <p className="text-xs text-primary/90">{a.funcio}</p>
                  </div>
                  {a.destacat ? (
                    <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
                  ) : null}
                </div>

                <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-muted-foreground">
                  {a.bio}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className="font-mono text-[0.6rem] uppercase tracking-wider"
                  >
                    {a.categoria}
                  </Badge>
                  <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground transition group-hover:text-primary">
                    {a.albums.length > 0
                      ? `${a.albums.length} disc${a.albums.length === 1 ? "" : "s"} →`
                      : "Figura de l'òrbita →"}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border/60 bg-secondary/20 px-6 py-12 text-center">
            <Search className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-display text-2xl text-foreground">Cap artista trobat</p>
            <p className="text-sm text-muted-foreground">
              No hi ha coincidències per «{q}». Prova un altre nom,
              integrant o disc.
            </p>
          </div>
        ) : null}

        {/* músics de sessió i nuclis menors (6.5.9) */}
        <div className="mt-16">
          <div className="flex items-center gap-3 border-b border-border/40 pb-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
              <SlidersHorizontal className="h-4 w-4 text-primary" />
            </span>
            <div>
              <h3 className="text-display text-2xl text-foreground sm:text-3xl">
                {musicsSessio.titol}
              </h3>
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                {musicsSessio.sub}
              </p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {musicsSessio.musics.map((m) => (
              <div
                key={m.nom}
                className="rounded-xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-4 transition hover:border-primary/50"
              >
                <p className="text-display text-lg leading-tight text-foreground">
                  {m.nom}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {m.funcio}
                </p>
                {m.url ? (
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-primary transition hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" /> Més informació →
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border-l-2 border-primary bg-primary/5 p-5 text-sm italic leading-relaxed text-foreground/85">
            {musicsSessio.valor}
          </div>
        </div>
      </div>

      {/* detail dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(o) => !o && setSelected(null)}
      >
        <DialogContent className="max-h-[88vh] max-w-2xl gap-0 overflow-hidden p-0">
          {selected ? (
            <>
              <div
                className="relative h-2 w-full"
                style={{ background: selected.color }}
              />
              <DialogHeader className="px-6 pt-5">
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="font-mono text-[0.6rem] uppercase tracking-wider"
                  >
                    {selected.categoria}
                  </Badge>
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {selected.anyInici}
                    {selected.anyFi ? `–${selected.anyFi}` : "–"}
                  </span>
                </div>
                <DialogTitle className="text-display text-4xl text-foreground">
                  {selected.nom}
                </DialogTitle>
                <DialogDescription className="text-primary">
                  {selected.funcio}
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="max-h-[55vh] px-6">
                <div className="pb-6">
                  <p className="text-sm leading-relaxed text-foreground/85">
                    {selected.bio}
                  </p>

                  <div className="mt-5">
                    <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      <Users className="h-3.5 w-3.5" /> Integrants
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.integrants.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-border/60 bg-secondary/40 px-3 py-1 text-xs text-foreground/85"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      <Disc3 className="h-3.5 w-3.5" /> Discografia
                    </p>
                    <ol className="mt-3 space-y-2.5">
                      {[...selected.albums]
                        .sort((a, b) => a.any - b.any)
                        .map((al, idx) => (
                          <li
                            key={al.titol}
                            className="flex items-center gap-3 rounded-lg border border-border/40 bg-secondary/20 px-3 py-2.5"
                          >
                            <span className="font-mono text-xs font-semibold text-primary">
                              {al.any}
                            </span>
                            <span className="h-1.5 w-1.5 rounded-full" style={{ background: selected.color }} />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">
                                {al.titol}
                              </p>
                              {al.nota ? (
                                <p className="text-[0.7rem] text-muted-foreground">
                                  {al.nota}
                                </p>
                              ) : null}
                            </div>
                            {al.segell ? (
                              <span className="hidden shrink-0 rounded-full border border-border/50 px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground sm:inline">
                                {al.segell}
                              </span>
                            ) : null}
                            <span className="font-mono text-[0.6rem] text-muted-foreground/60">
                              {String(idx + 1).padStart(2, "0")}
                            </span>
                          </li>
                        ))}
                      {selected.albums.length === 0 ? (
                        <li className="text-xs text-muted-foreground">
                          Sense discografia catalogada en aquesta reconstrucció.
                        </li>
                      ) : null}
                    </ol>
                  </div>

                  {hasRelated ? (
                    <div className="mt-6">
                      <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                        <Network className="h-3.5 w-3.5" /> Relacionat a la constel·lació
                      </p>
                      <div className="mt-3 space-y-2">
                        {related!.obres.map((o) => (
                          <button
                            key={o.id}
                            onClick={() => goTo("obres")}
                            className="flex w-full items-center gap-3 rounded-lg border border-border/40 bg-secondary/20 px-3 py-2.5 text-left transition hover:border-primary/50"
                          >
                            <Disc3 className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">
                                {o.titol} · {o.any}
                              </p>
                              <p className="text-[0.7rem] text-muted-foreground">
                                Obra clau · {o.artista}
                              </p>
                            </div>
                            <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-primary">
                              Obres →
                            </span>
                          </button>
                        ))}
                        {related!.fiches.map((f) => (
                          <button
                            key={f.id}
                            onClick={() => goTo("cartografia")}
                            className="flex w-full items-center gap-3 rounded-lg border border-border/40 bg-secondary/20 px-3 py-2.5 text-left transition hover:border-primary/50"
                          >
                            <Share2 className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">
                                {f.nom}
                              </p>
                              <p className="text-[0.7rem] text-muted-foreground">
                                Cartografia · {f.tipus}
                              </p>
                            </div>
                            <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-primary">
                              Cartografia →
                            </span>
                          </button>
                        ))}
                        {related!.collectius.map((c) => (
                          <button
                            key={c.id}
                            onClick={() => goTo("cartografia")}
                            className="flex w-full items-center gap-3 rounded-lg border border-border/40 bg-secondary/20 px-3 py-2.5 text-left transition hover:border-primary/50"
                          >
                            <Users className="h-3.5 w-3.5 shrink-0 text-primary" />
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-foreground">
                                {c.nom}
                              </p>
                              <p className="text-[0.7rem] text-muted-foreground">
                                Col·lectiu · {c.relacio}
                              </p>
                            </div>
                            <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-primary">
                              Cartografia →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </ScrollArea>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
