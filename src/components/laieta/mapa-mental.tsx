export function MapaMental() {
  return (
    <section
      id="mapa-mental"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-white/80">
            <span className="font-mono text-xs tracking-widest text-white">14</span>
            <span className="h-px w-8 bg-white/30" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-white/60">
              Mapa Mental
            </span>
          </div>
          <h2 className="mt-3 text-display text-4xl leading-[0.95] text-white sm:text-5xl md:text-6xl">
            Mapa mental del moviment
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            L'arbre documental de l'Ona Laietana: espais, pioners, fusió, cançó
            heterodoxa i premsa marginal. Navega pel mapa, cerca i descobreix
            les connexions del moviment.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#64445E]/40">
          <iframe
            src="/laieta/mapa-mental.html"
            className="h-[600px] w-full border-0 sm:h-[700px]"
            title="Mapa mental — Ona Laietana"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
