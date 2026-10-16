"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Disc3, MapPin } from "lucide-react";
import { moviment } from "@/lib/laieta-data";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="inici"
      className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-background"
    >
      {/* background image with parallax */}
      <motion.div
        style={{ y: yImg, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/laieta/hero.png"
          alt="Textura vintage 70s amb solcs de vinil i gradients ambre i bordó"
          className="h-full w-full object-cover opacity-65"
          loading="eager"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        {/* dark mood overlays for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-transparent to-background/85" />
      </motion.div>

      {/* spinning vinyl ornament */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-[-12%] top-1/2 hidden -translate-y-1/2 md:block"
      >
        <div className="vinyl-grooves relative aspect-square w-[460px] rounded-full border border-[#64445E]/40 bg-background shadow-[0_0_120px_-20px] shadow-[#80296F]/30">
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 animate-spin-vinyl rounded-full border-4 border-background bg-[#80296F]">
            <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background" />
          </div>
        </div>
      </motion.div>

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-white">
            <Disc3 className="h-3.5 w-3.5" /> {moviment.periode}
          </span>
          <span className="hidden items-center gap-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-foreground/60 sm:inline-flex">
            <MapPin className="h-3.5 w-3.5" /> {moviment.epicentre}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="mt-6 text-display text-7xl leading-[0.85] text-foreground sm:text-8xl md:text-[9rem]"
        >
          {moviment.titol}
          <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffffff]">
            {moviment.subtitol.split("·")[0].trim()}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance-pretty text-lg leading-relaxed text-foreground/85 sm:text-xl"
        >
          {moviment.lema}.{" "}
          <span className="text-foreground/70">{moviment.identitatHero}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() =>
              document
                .getElementById("manifest")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex items-center gap-2 rounded-full bg-[#80296F] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#723667]"
          >
            Comença el viatge
            <ArrowDown className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </button>
          <button
            onClick={() =>
              document
                .getElementById("artistes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#495F4D] hover:text-white"
          >
            Explora els artistes
          </button>
        </motion.div>

        {/* marquee strip */}
        <div className="relative mt-16 overflow-hidden border-y border-foreground/15 py-3">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                {[
                  "Màquina!",
                  "Orquestra Mirasol",
                  "Companyia Elèctrica Dharma",
                  "Iceberg",
                  "Secta Sònica",
                  "Gato Pérez",
                  "Toti Soler",
                  "Jordi Sabatés",
                  "Tete Montoliu",
                  "Pegasus",
                  "Sisa",
                  "Pau Riba",
                ].map((n) => (
                  <span
                    key={n}
                    className="font-mono text-sm uppercase tracking-[0.2em] text-foreground/60"
                  >
                    {n} <span className="mx-4 text-[#80296F]/60">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-foreground/60">
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em]">
            Avall
          </span>
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-foreground/30 p-1">
            <motion.span
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-[#80296F]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
