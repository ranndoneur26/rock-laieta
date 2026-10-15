import { recopilatori } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import { Disc3, ListMusic, Clock } from "lucide-react";

export function Tracklist() {
  return (
    <section id="recopilatori" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="10"
          kicker="Recopilatori"
          title="Música Laietana. Zeleste"
          description={recopilatori.descripcio}
        />

        {/* meta row */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
            <Disc3 className="h-3.5 w-3.5" /> {recopilatori.segell} · {recopilatori.any}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
            <ListMusic className="h-3.5 w-3.5" /> {recopilatori.cancons} cançons
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/40 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
            <Clock className="h-3.5 w-3.5" /> {recopilatori.durada}
          </span>
        </div>

        {/* real audio: Spotify album embed (includes the full playable tracklist) */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="flex items-center justify-between border-b border-border/60 px-5 py-2.5">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              Escolta el recopilatori sencer · Spotify
            </p>
            <span className="inline-flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-wider text-primary">
              <Disc3 className="h-3.5 w-3.5" /> Àudio real
            </span>
          </div>
          <iframe
            src="https://open.spotify.com/embed/album/3iKphHnXn5xLVzabQytEfR?theme=0"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block w-full"
            title="Música Laietana. Zeleste — Spotify"
          />
        </div>
      </div>
    </section>
  );
}
