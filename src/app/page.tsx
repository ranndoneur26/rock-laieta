import { SiteNav } from "@/components/laieta/site-nav";
import { Hero } from "@/components/laieta/hero";
import { Manifest, Context } from "@/components/laieta/manifest";
import { FusionDiagram } from "@/components/laieta/fusion-diagram";
import { Zeleste } from "@/components/laieta/zeleste";
import { Timeline } from "@/components/laieta/timeline";
import { BandExplorer } from "@/components/laieta/band-explorer";
import { PersonesIndispensables } from "@/components/laieta/persones-indispensables";
import { GrafoRelacions } from "@/components/laieta/grafo-relacions";
import { CartografiaMoviment } from "@/components/laieta/cartografia-moviment";
import { RutaMusical } from "@/components/laieta/ruta-musical";
import { ObresClau } from "@/components/laieta/obres-clau";
import { MosaicInteractiu } from "@/components/laieta/mosaic-interactiu";
import { Tracklist } from "@/components/laieta/tracklist";
import { DocumentsVisuals } from "@/components/laieta/documents-visuals";
import { MapaMental } from "@/components/laieta/mapa-mental";
import { Legacy } from "@/components/laieta/legacy";
import { MortOnaLaietana } from "@/components/laieta/mort-ona-laietana";
import { Sources } from "@/components/laieta/sources";
import { SiteFooter } from "@/components/laieta/site-footer";
import { BackToTop } from "@/components/laieta/back-to-top";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Manifest />
        <Context />
        <FusionDiagram />
        <Zeleste />
        <Timeline />
        <BandExplorer />
        <PersonesIndispensables />
        <GrafoRelacions />
        <CartografiaMoviment />
        <RutaMusical />
        <ObresClau />
        <MosaicInteractiu />
        <Tracklist />
        <DocumentsVisuals />
        <MapaMental />
        <Legacy />
        <MortOnaLaietana />
        <Sources />
      </main>
      <SiteFooter />
      <BackToTop />
    </div>
  );
}
