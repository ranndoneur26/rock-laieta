"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  mosaicDiscs,
  mosaicIntro,
  mosaicStats,
  type MosaicDisc,
} from "@/lib/mosaic-data";
import { SectionHeading } from "./section-heading";
import {
  Disc3,
  Calendar,
  Building2,
  Quote,
  ExternalLink,
  Info,
  Sparkles,
  Headphones,
  Youtube,
  Music4,
  ScrollText,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// === Subcomponent: tile ===
function MosaicTile({
  disc,
  index,
  onClick,
}: {
  disc: MosaicDisc;
  index: number;
  onClick: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const idxStr = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-xl border border-border/60 bg-card/40 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl"
      style={{ ["--accent" as string]: disc.color }}
      aria-label={`Obrir fitxa del disc ${disc.titol} de ${disc.artista}`}
    >
      {/* Cover image (real photo from web) */}
      {!imgError && disc.fotoArtista ? (
        <img
          src={disc.fotoArtista}
          alt={`Portada de ${disc.titol} — ${disc.artista} (${disc.any})`}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        // Fallback: CSS-designed cover with album color + symbol + typography
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center"
          style={{
            background: `radial-gradient(circle at 50% 30%, ${disc.color}cc 0%, ${disc.color}55 100%)`,
          }}
        >
          <span
            className="text-display text-3xl"
            style={{ color: "#fff" }}
            aria-hidden
          >
            {disc.simbol}
          </span>
          <span className="text-display text-xs font-semibold leading-tight text-white">
            {disc.artista}
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-wider text-white/70">
            {disc.titol}
          </span>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 transition group-hover:opacity-95" />

      {/* Top-left: number badge */}
      <span className="absolute left-2 top-2 z-10 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[0.6rem] text-white/90 backdrop-blur">
        {idxStr}
      </span>

      {/* Top-right: year badge */}
      <span className="absolute right-2 top-2 z-10 rounded-full border border-white/20 bg-black/40 px-2 py-0.5 font-mono text-[0.6rem] text-white/90 backdrop-blur">
        {disc.any}
      </span>

      {/* Bottom: artist + title overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-3">
        <p className="text-display text-sm font-semibold leading-tight text-white drop-shadow">
          {disc.titol}
        </p>
        <p className="mt-0.5 truncate font-mono text-[0.65rem] uppercase tracking-wider text-white/80">
          {disc.artista}
        </p>
      </div>

      {/* Hover indicator */}
      <span className="absolute right-2 bottom-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
        <ExternalLink className="h-3.5 w-3.5" />
      </span>
    </button>
  );
}

// === Subcomponent: popup detail ===
function MosaicDetail({ disc }: { disc: MosaicDisc }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
      {/* LEFT: image */}
      <div className="md:col-span-2">
        <figure className="overflow-hidden rounded-xl border border-border/60 bg-card/40">
          {!imgError && disc.fotoArtista ? (
            <img
              src={disc.fotoArtista}
              alt={`Portada de ${disc.titol} — ${disc.artista}`}
              className="aspect-square w-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="flex aspect-square w-full items-center justify-center"
              style={{
                background: `radial-gradient(circle at 50% 30%, ${disc.color}cc 0%, ${disc.color}55 100%)`,
              }}
            >
              <span className="text-display text-6xl text-white">
                {disc.simbol}
              </span>
            </div>
          )}
          <figcaption className="bg-card/80 px-3 py-2 text-center font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
            {disc.segell ? `${disc.segell} · ` : ""}Edigsa era el segell habitual
          </figcaption>
        </figure>

        {/* Any + segell facts */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
            <p className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Any
            </p>
            <p className="mt-1 text-display text-2xl text-foreground">
              {disc.any}
            </p>
          </div>
          <div className="rounded-lg border border-border/60 bg-secondary/30 p-3">
            <p className="flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
              <Building2 className="h-3 w-3" />
              Segell
            </p>
            <p className="mt-1 text-display text-base text-foreground">
              {disc.segell ?? "—"}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: text — jerarquia visual clara */}
      <div className="md:col-span-3">
        {/* Header */}
        <p
          className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em]"
          style={{ color: disc.color }}
        >
          <Disc3 className="h-3 w-3" />
          {disc.artista}
        </p>
        <h3 className="mt-1 text-display text-2xl leading-tight text-foreground sm:text-3xl">
          {disc.titol}
        </h3>

        {/* === 1. DADES (fets verificables) === */}
        <div className="mt-4 rounded-xl border border-border/60 bg-secondary/20 p-4">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground/85">
            <Info className="h-3 w-3" />
            <span className="font-semibold">Fets</span>
            <span className="text-muted-foreground/70">· dades verificables</span>
          </p>
          <ul className="space-y-1.5">
            {disc.dades.map((d, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground/85"
              >
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                  style={{ background: disc.color }}
                />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* === 2. ANÈCDOTA (opinió / recepció) === */}
        <div className="mt-3 rounded-xl border-l-4 border-amber-500/60 bg-amber-500/5 p-4">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-amber-300/90">
            <Sparkles className="h-3 w-3" />
            <span className="font-semibold">Anècdota</span>
            <span className="text-amber-300/50">· opinió / recepció</span>
          </p>
          <p className="text-sm italic leading-relaxed text-foreground/85">
            {disc.anecdota}
          </p>
        </div>

        {/* === 3. CONTEXT HISTÒRIC === */}
        <div className="mt-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary">
            <ScrollText className="h-3 w-3" />
            <span className="font-semibold">Context històric</span>
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {disc.contextHistoric}
          </p>
        </div>

        {/* === 4. CITA HISTÒRICA (amb font) === */}
        {disc.cita && (
          <figure className="mt-3 rounded-xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-4">
            <Quote className="h-6 w-6 text-primary/40" />
            <blockquote className="relative mt-2 text-sm leading-relaxed text-foreground/90">
              “{disc.cita.text}”
            </blockquote>
            <figcaption className="mt-3 flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              <span className="h-px w-6 bg-primary/60" />
              <span className="font-semibold text-foreground/85">
                {disc.cita.autor}
              </span>
              <span className="text-muted-foreground/70">· {disc.cita.font}</span>
            </figcaption>
          </figure>
        )}

        {/* === 5. ESCOLTA === */}
        {disc.escoltar &&
          (disc.escoltar.spotify ||
            disc.escoltar.youtube ||
            disc.escoltar.bandcamp) && (
            <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4">
              <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-primary">
                <Headphones className="h-3 w-3" />
                Escolta el disc
              </p>
              <div className="flex flex-wrap gap-2">
                {disc.escoltar.spotify && (
                  <a
                    href={disc.escoltar.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary transition hover:bg-primary/25"
                  >
                    <Music4 className="h-3.5 w-3.5" />
                    Spotify
                  </a>
                )}
                {disc.escoltar.youtube && (
                  <a
                    href={disc.escoltar.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:bg-secondary/60"
                  >
                    <Youtube className="h-3.5 w-3.5" />
                    YouTube
                  </a>
                )}
                {disc.escoltar.bandcamp && (
                  <a
                    href={disc.escoltar.bandcamp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:bg-secondary/60"
                  >
                    <Disc3 className="h-3.5 w-3.5" />
                    Bandcamp
                  </a>
                )}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

// === Main component ===
export function MosaicInteractiu() {
  const [selected, setSelected] = useState<MosaicDisc | null>(null);
  const [bodyScrollable, setBodyScrollable] = useState(true);

  // Block body scroll when dialog open
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section id="mosaic" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="12"
          kicker="Mosaic"
          title={mosaicIntro.titol}
          description={mosaicIntro.intro}
        />

        {/* Stats bar */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
            <Disc3 className="h-3 w-3" />
            {mosaicIntro.subtitol}
          </span>
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            {mosaicStats.total} discs · 1970 – 1978
          </span>
        </div>

        {/* Mosaic grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {mosaicDiscs.map((disc, i) => (
            <MosaicTile
              key={disc.id}
              disc={disc}
              index={i}
              onClick={() => setSelected(disc)}
            />
          ))}
        </div>

        {/* Peu */}
        <p className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Clica una portada per obrir-ne la fitxa · Fotografies reals allotjades a CDN extern
        </p>
      </div>

      {/* Popup Dialog */}
      <Dialog
        open={!!selected}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto border-border/60 bg-card/95 backdrop-blur-xl scroll-warm">
          {selected && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>
                  {selected.titol} — {selected.artista} ({selected.any})
                </DialogTitle>
                <DialogDescription>
                  Fitxa del disc amb fotografia, anècdota, context històric i
                  enllaços per escoltar-lo.
                </DialogDescription>
              </DialogHeader>
              <MosaicDetail disc={selected} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
