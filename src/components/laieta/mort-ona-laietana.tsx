"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import {
  Play,
  Pause,
  Square,
  Volume2,
  VolumeX,
  ExternalLink,
  AlertTriangle,
  Music4,
  Skull,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AUDIO_URL = "/laieta/mort-ona-laietana.mp3";
const NOTEBOOK_URL = AUDIO_URL;

const causes = [
  {
    any: "1978–1982",
    titol: "Crisi econòmica i canvi generacional",
    descripcio:
      "La transició política espanyola va portar la crisi industrial: l'agonia del sector tèxtil barceloní, l'atur creixent i l'arribada del punk, el new wave i la post-punk van canviar el gust del públic jove. El jazz-rock virtuós que havia definit la ona ja no era el llenguatge dels nous adolescents.",
  },
  {
    any: "1979",
    titol: "La moguda madrilenya desplaça Barcelona",
    descripcio:
      "L'entrada d'Alaska i els Kaka de Luxe, el rol de la Movida Madrileña i la presència mediàtica de Madrid van desplaçar el centre cultural del país. Barcelona va deixar de ser la capital de l'underground per ser la capital de la nova cançó institucional.",
  },
  {
    any: "1980",
    titol: "Darrer Canet Rock clàssic",
    descripcio:
      "L'edició de 1980 del Canet Rock va marcar el final simbòlic del cicle. El festival deixaria de celebrar-se aquell mateix any, i amb ell tancava l'episodi dels grans concerts a l'aire lliure que havien aglutinat l'audiència massiva de la ona.",
  },
  {
    any: "1984",
    titol: "Edigsa desapareix",
    descripcio:
      "La discogràfica que havia sostingut la Nova Cançó i l'Ona Laietana des del 1961 deixa d'existir com a tal. El fons és adquirit per Picap, que continuarà reeditant el catàleg. Però el segell que havia identificat el moviment ja no és un actor viu.",
  },
  {
    any: "1985",
    titol: "Tancament de Bocaccio",
    descripcio:
      "El juliol de 1985 tanca les portes la mítica discoteca Bocaccio del carrer Muntaner 505, epicentre social de la gauche divine. Sense aquella xarxa social que havia sostingut el moviment des de 1967, l'ecosistema laietana perd la seva base burgesa-progressista.",
  },
  {
    any: "1986",
    titol: "Zeleste abandona el Born",
    descripcio:
      "El 1986, Zeleste abandona la ubicació original del carrer de la Plateria/Argenteria i migrarà a Almogàvers, després al Poble Espanyol. La sala que havia sigut epicentre del moviment des del 23 de maig de 1973 deixa de ser-ne el nucli històric.",
  },
];

export function MortOnaLaietana() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Sync state with audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
    };
    const onEnded = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentTime(0);
    };
    const onError = () => {
      setHasError(true);
      setIsLoading(false);
      setIsPlaying(false);
    };
    const onWaiting = () => setIsLoading(true);
    const onCanPlay = () => setIsLoading(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("canplay", onCanPlay);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  // Apply volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const handlePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (hasError) {
      window.open(NOTEBOOK_URL, "_blank", "noopener,noreferrer");
      return;
    }
    audio.play().catch(() => {
      setHasError(true);
      setIsLoading(false);
    });
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    setIsPaused(true);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentTime(0);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const newTime = parseFloat(e.target.value);
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (s: number) => {
    if (!isFinite(s) || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <section
      id="mort-ona-laietana"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="17"
          kicker="Declivi"
          title="Què va matar l'Ona Laietana"
          description="Cap moviment cultural no mor d'una sola causa. La fi de l'Ona Laietana —que es perllonga entre 1980 i 1986— és el resultat d'una convergència de factors: la crisi econòmica, el canvi generacional, l'arribada del punk i la moguda madrilenya, el tancament d'Edigsa i Bocaccio, i la migració de Zeleste. Escolteu l'àudio integral que ho explica, i després feu un repàs als sis moments clau del declivi."
        />

        {/* Audio player */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.5 }}
          className="mt-8 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-secondary/30 to-transparent p-5 sm:p-6"
        >
          {/* Hidden audio element */}
          <audio
            ref={audioRef}
            src={AUDIO_URL}
            preload="metadata"
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {/* Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/15">
              {hasError ? (
                <AlertTriangle className="h-6 w-6 text-primary" />
              ) : (
                <Music4
                  className={cn(
                    "h-6 w-6 text-primary transition",
                    isPlaying && "animate-pulse-soft",
                  )}
                />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                Àudio integral · MP3 local
              </p>
              <h3 className="mt-1 text-display text-lg leading-tight text-foreground sm:text-xl">
                Què va matar l'Ona Laietana
              </h3>
              <p className="text-xs text-muted-foreground/80">
                Narració integral · 8 min 31 s · format MP3 mono 64kbps (4MB)
              </p>
            </div>

            {/* Controls: play / pause / stop */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePlay}
                aria-label={hasError ? "Tornar a intentar" : "Reproduir"}
                disabled={isPlaying && !isPaused}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition disabled:opacity-40",
                  isPlaying && !isPaused && !hasError
                    ? "border-primary/30 bg-primary/15 text-primary/50"
                    : "border-primary/40 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_24px_-6px] shadow-primary",
                )}
              >
                <Play className="h-4 w-4 translate-x-0.5" fill="currentColor" />
              </button>
              <button
                type="button"
                onClick={handlePause}
                aria-label="Pausar"
                disabled={!isPlaying}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition disabled:opacity-40",
                  "border-border/60 bg-secondary/40 text-foreground hover:bg-secondary/60",
                )}
              >
                <Pause className="h-4 w-4" fill="currentColor" />
              </button>
              <button
                type="button"
                onClick={handleStop}
                aria-label="Aturar"
                disabled={!isPlaying && !isPaused}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border transition disabled:opacity-40",
                  "border-border/60 bg-secondary/40 text-foreground hover:bg-secondary/60",
                )}
              >
                <Square className="h-3.5 w-3.5" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 flex items-center gap-3">
            <span className="font-mono text-[0.65rem] tabular-nums text-muted-foreground">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              disabled={hasError}
              aria-label="Progrés de l'àudio"
              className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-secondary/60 disabled:cursor-not-allowed disabled:opacity-40 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:shadow-[0_0_8px_0_rgba(128,41,111,0.5)] [&::-moz-range-thumb]:h-3 [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-primary"
              style={{
                background: `linear-gradient(to right, var(--c-magenta) 0%, var(--c-magenta) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.15) ${(currentTime / (duration || 1)) * 100}%, rgba(255,255,255,0.15) 100%)`,
              }}
            />
            <span className="font-mono text-[0.65rem] tabular-nums text-muted-foreground">
              {formatTime(duration)}
            </span>

            {/* Volume */}
            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                onClick={() => setIsMuted((v) => !v)}
                aria-label={isMuted ? "Activar so" : "Silenciar"}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  setIsMuted(false);
                }}
                aria-label="Volum"
                className="h-1.5 w-16 cursor-pointer appearance-none rounded-full bg-secondary/60 [&::-webkit-slider-thumb]:h-2.5 [&::-webkit-slider-thumb]:w-2.5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground"
              />
            </div>
          </div>

          {/* Error fallback */}
          {hasError && (
            <div className="mt-4 rounded-xl border border-amber-400/40 bg-amber-400/10 p-3">
              <p className="text-xs leading-relaxed text-amber-200">
                <AlertTriangle className="mr-1.5 inline h-3.5 w-3.5 align-[-2px]" />
                No s'ha pogut carregar l'àudio. Comproveu la connexió i
                torneu a intentar-ho. Podeu descarregar el fitxer MP3 directament:
              </p>
              <a
                href={NOTEBOOK_URL}
                download
                className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/20 px-3 py-1.5 text-xs font-medium text-amber-200 transition hover:bg-amber-400/30"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Descarregar MP3
              </a>
            </div>
          )}

          {/* Loading state */}
          {isLoading && !hasError && (
            <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground/70">
              Carregant metadades de l'àudio…
            </p>
          )}
        </motion.div>

        {/* Causes del declivi */}
        <div className="mt-12">
          <h3 className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-primary">
            <Skull className="h-4 w-4" /> Sis moments del declivi
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((c, i) => (
              <motion.article
                key={c.titol}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-secondary/40 to-transparent p-5 transition hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-primary/60" />
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-primary">
                  {c.any}
                </p>
                <h4 className="mt-2 text-display text-lg leading-tight text-foreground">
                  {c.titol}
                </h4>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  {c.descripcio}
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Conclusió */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-primary/40 bg-primary/5 p-6 sm:p-8">
          <p className="text-balance-pretty text-base leading-relaxed text-foreground/85 sm:text-lg">
            <strong className="text-foreground">La conclusió:</strong> l'Ona
            Laietana no va morir — es va dissoldre. Els seus músics van
            nodrir la nova cançó, el pop dels 80, el flamenco-jazz, els
            arranjaments de la indústria. Pegasus (1982–1997) n'és hereu
            directe. El Rock Català dels 90 (Sopa de Cabra, Sau, Els Pets)
            no hauria existit sense aquest precedent. La ona és, en sentit
            ple, una revolució cultural latent — no morta, sinó transformada.
          </p>
        </div>
      </div>
    </section>
  );
}
