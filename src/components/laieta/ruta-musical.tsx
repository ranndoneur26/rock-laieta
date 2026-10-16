"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { rutaMusical, type RutaStatus, type RutaTipus } from "@/lib/laieta-data";
import { SectionHeading } from "./section-heading";
import {
  MapPin,
  Navigation,
  Clock,
  Building2,
  Music2,
  ExternalLink,
  Footprints,
  Route,
  History,
  Theater,
  Disc3,
  Building,
  Users2,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mapa només al client (Leaflet no suporta SSR)
const RutaMap = dynamic(() => import("./ruta-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-card/60 text-muted-foreground">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary/30 border-t-primary" />
        <span className="font-mono text-xs uppercase tracking-wider">
          Carregant mapa…
        </span>
      </div>
    </div>
  ),
});

const STATUS_CONFIG: Record<
  RutaStatus,
  { label: string; color: string; icon: typeof History }
> = {
  existent: {
    label: "Encara existeix",
    color: "#5d8a5e",
    icon: History,
  },
  historic: {
    label: "Històric / desaparegut",
    color: "#c2410c",
    icon: Building,
  },
  transformat: {
    label: "Transformat / reutilitzat",
    color: "#7a8aa8",
    icon: MapPin,
  },
};

const TIPUS_ICON: Record<RutaTipus, typeof Music2> = {
  sala: Music2,
  estudi: Disc3,
  festival: Users2,
  teatre: Theater,
  espai_public: MapPin,
  segell: Disc3,
  club: Music2,
  discoteca: Disc3,
};

const TIPUS_LABEL: Record<RutaTipus, string> = {
  sala: "Sala de concerts",
  estudi: "Estudi de gravació",
  festival: "Festival",
  teatre: "Teatre",
  espai_public: "Espai públic",
  segell: "Segell discogràfic",
  club: "Club / Jazz club",
  discoteca: "Discoteca",
};

export function RutaMusical() {
  const [activeId, setActiveId] = useState<string | null>("zeleste");
  const [showRoute, setShowRoute] = useState(true);

  const active =
    rutaMusical.locations.find((l) => l.id === activeId) ?? null;

  const handleSelect = (id: string) => setActiveId(id);

  const rutaStops = rutaMusical.locations
    .filter((l) => l.ordreRuta)
    .sort((a, b) => (a.ordreRuta ?? 0) - (b.ordreRuta ?? 0));
  const offRoute = rutaMusical.locations.filter((l) => l.noRuta);

  return (
    <section
      id="ruta-musical"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="10"
          kicker="Ruta"
          title={rutaMusical.titol}
          description={rutaMusical.intro}
        />

        {/* Ruta temàtica — presentació */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-secondary/30 to-transparent p-6 sm:p-8"
        >
          <Footprints className="absolute right-5 top-5 h-10 w-10 text-primary/15" />
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
              Ruta temàtica
            </span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {rutaMusical.ruta.sub}
            </span>
          </div>
          <h3 className="mt-3 text-display text-2xl text-foreground sm:text-3xl">
            {rutaMusical.ruta.titol}
          </h3>
          <p className="mt-3 max-w-3xl text-balance-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            {rutaMusical.ruta.descripcio}
          </p>
        </motion.div>

        {/* Llegenda */}
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-xl border border-border/50 bg-secondary/20 px-4 py-3">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Llegenda
          </span>
          <div className="flex flex-wrap items-center gap-4">
            {Object.entries(STATUS_CONFIG).map(([k, v]) => {
              const Icon = v.icon;
              return (
                <div
                  key={k}
                  className="flex items-center gap-2 text-xs text-foreground/85"
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded-full border border-white/30"
                    style={{ background: v.color }}
                  >
                    <Icon className="h-2.5 w-2.5 text-white" />
                  </span>
                  {v.label}
                </div>
              );
            })}
            <div className="flex items-center gap-2 text-xs text-foreground/85">
              <span
                className="inline-block h-0.5 w-6 rounded"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, #80296F 0 6px, transparent 6px 12px)",
                }}
              />
              Itinerari de la ruta
            </div>
          </div>
        </div>

        {/* Layout: sidebar + mapa + detall */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* LEFT — índex de parades */}
          <aside className="lg:col-span-4 xl:col-span-3 order-2 lg:order-1">
            <div className="rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur lg:max-h-[680px] lg:overflow-y-auto scroll-warm">
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Route className="h-4 w-4 text-primary" />
                  <h3 className="text-display text-base font-medium text-foreground">
                    {rutaMusical.ruta.titol}
                  </h3>
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                  {rutaStops.length} parades
                </span>
              </div>
              <p className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                {rutaMusical.ruta.sub}
              </p>

              <ol className="space-y-1.5">
                {rutaStops.map((loc) => {
                  const status = STATUS_CONFIG[loc.status];
                  const isActive = activeId === loc.id;
                  return (
                    <li key={loc.id}>
                      <button
                        type="button"
                        onClick={() => handleSelect(loc.id)}
                        aria-pressed={isActive}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg border p-2 text-left transition",
                          isActive
                            ? "border-primary/40 bg-primary/15"
                            : "border-transparent hover:bg-secondary/40",
                        )}
                      >
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 font-mono text-xs font-bold text-white"
                          style={{ background: status.color }}
                        >
                          {loc.ordreRuta}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-medium text-foreground">
                            {loc.nom}
                          </span>
                          <span className="block truncate text-[0.7rem] text-muted-foreground">
                            {loc.barri}
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>

              {offRoute.length > 0 && (
                <div className="mt-5 border-t border-border/40 pt-4">
                  <h4 className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Fora de la ruta principal
                  </h4>
                  <div className="space-y-1.5">
                    {offRoute.map((loc) => {
                      const status = STATUS_CONFIG[loc.status];
                      const isActive = activeId === loc.id;
                      return (
                        <button
                          key={loc.id}
                          type="button"
                          onClick={() => handleSelect(loc.id)}
                          aria-pressed={isActive}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg border p-2 text-left transition",
                            isActive
                              ? "border-primary/40 bg-primary/15"
                              : "border-transparent hover:bg-secondary/40",
                          )}
                        >
                          <span
                            className="h-2.5 w-2.5 shrink-0 rounded-full"
                            style={{ background: status.color }}
                          />
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-medium text-foreground">
                              {loc.nom}
                            </span>
                            <span className="block truncate text-[0.7rem] text-muted-foreground">
                              {loc.barri}
                            </span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={() => setShowRoute((v) => !v)}
                className="mt-4 w-full rounded-lg border border-border/60 bg-secondary/30 px-3 py-2 font-mono text-[0.7rem] uppercase tracking-[0.15em] transition hover:bg-secondary/60"
              >
                {showRoute ? "Amagar itinerari" : "Mostrar itinerari"}
              </button>
            </div>
          </aside>

          {/* RIGHT — mapa + detall actiu */}
          <div className="lg:col-span-8 xl:col-span-9 order-1 space-y-4 lg:order-2">
            <div className="relative h-[460px] overflow-hidden rounded-2xl border border-border/60 bg-card/40 lg:h-[560px]">
              <RutaMap
                activeId={activeId}
                onSelect={handleSelect}
                showRoute={showRoute}
              />

              {/* Llegenda overlay compacta (mòbil) */}
              <div className="pointer-events-none absolute right-3 top-3 z-[1000] rounded-lg border border-border/60 bg-background/95 px-3 py-2 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center gap-1.5"
                      title={v.label}
                    >
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ background: v.color }}
                      />
                      <span className="text-[0.7rem] text-foreground/85">
                        {v.label.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detall actiu */}
            {active && (
              <motion.article
                key={active.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-5 sm:p-6"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-5">
                  <div className="md:col-span-3">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {(() => {
                            const Icon = TIPUS_ICON[active.tipus];
                            return <Icon className="h-3 w-3" />;
                          })()}
                          {TIPUS_LABEL[active.tipus]} · {active.barri}
                        </p>
                        <h3 className="mt-1 text-display text-2xl leading-tight text-foreground sm:text-3xl">
                          {active.nom}
                        </h3>
                      </div>
                      <span
                        className="shrink-0 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium"
                        style={{
                          borderColor: `${STATUS_CONFIG[active.status].color}55`,
                          color: STATUS_CONFIG[active.status].color,
                          background: `${STATUS_CONFIG[active.status].color}14`,
                        }}
                      >
                        {STATUS_CONFIG[active.status].label}
                      </span>
                    </div>

                    <p className="mb-3 text-sm leading-relaxed text-foreground/85">
                      {active.rellevancia}
                    </p>
                    <p className="mb-4 border-l-2 border-primary/40 pl-3 text-sm italic leading-relaxed text-muted-foreground">
                      {active.contextHistoric}
                    </p>

                    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <dt className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          Adreça
                        </dt>
                        <dd className="mt-0.5 text-sm text-foreground/90">
                          {active.adreca}
                        </dd>
                      </div>
                      <div>
                        <dt className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          Anys actius
                        </dt>
                        <dd className="mt-0.5 text-sm text-foreground/90">
                          {active.anysActius}
                        </dd>
                      </div>
                    </dl>

                    {active.artistesRelacionats.length > 0 && (
                      <div className="mt-4">
                        <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                          <Music2 className="h-3 w-3" />
                          Artistes relacionats
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {active.artistesRelacionats.map((a) => (
                            <span
                              key={a}
                              className="rounded-full border border-border/60 bg-secondary/40 px-2.5 py-0.5 text-xs text-foreground/80"
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      {active.linkExtern && (
                        <a
                          href={active.linkExtern}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Més informació
                        </a>
                      )}
                      <a
                        href={`https://www.openstreetmap.org/?mlat=${active.lat}&mlon=${active.lng}#map=17/${active.lat}/${active.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                      >
                        <Navigation className="h-3.5 w-3.5" />
                        Obrir al mapa
                      </a>
                    </div>
                  </div>

                  {/* Foto històrica */}
                  <div className="md:col-span-2">
                    {active.foto ? (
                      <figure className="overflow-hidden rounded-xl border border-border/60">
                        <img
                          src={active.foto}
                          alt={active.fotoCaption ?? active.nom}
                          className="aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                        {active.fotoCaption && (
                          <figcaption className="bg-card/80 px-3 py-2 text-[0.7rem] italic leading-snug text-muted-foreground">
                            {active.fotoCaption}
                          </figcaption>
                        )}
                      </figure>
                    ) : (
                      <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-border/50 bg-secondary/20 p-4 text-center">
                        <div>
                          <Building2 className="mx-auto h-8 w-8 text-muted-foreground/60" />
                          <p className="mt-2 text-[0.7rem] text-muted-foreground">
                            Sense fotografia històrica disponible
                          </p>
                          <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground/70">
                            {active.adreca.split(",")[0]}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Coordenades + núvol d'etiquetes */}
                    <div className="mt-3 rounded-xl border border-border/50 bg-secondary/20 p-3 font-mono text-[0.7rem] text-muted-foreground">
                      <div className="flex items-center justify-between">
                        <span>Lat</span>
                        <span className="text-foreground/80">
                          {active.lat.toFixed(4)}°
                        </span>
                      </div>
                      <div className="mt-0.5 flex items-center justify-between">
                        <span>Lng</span>
                        <span className="text-foreground/80">
                          {active.lng.toFixed(4)}°
                        </span>
                      </div>
                      {active.ordreRuta && (
                        <div className="mt-0.5 flex items-center justify-between">
                          <span>Parada</span>
                          <span className="text-foreground/80">
                            {active.ordreRuta}/{rutaStops.length}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
