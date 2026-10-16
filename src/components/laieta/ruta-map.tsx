"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { rutaMusical, type RutaStatus } from "@/lib/laieta-data";

interface RutaMapProps {
  activeId: string | null;
  onSelect: (id: string) => void;
  showRoute: boolean;
}

const STATUS_COLORS: Record<RutaStatus, string> = {
  existent: "#5d8a5e", // verd oliva-viu (encara existeix)
  historic: "#c2410c", // taronja cremat (històric / desaparegut)
  transformat: "#7a8aa8", // blau acer (transformat)
};

const ROUTE_COLOR = "#80296F"; // magenta vintage de la paleta
const ROUTE_WEIGHT = 3;

function makeIcon(
  status: RutaStatus,
  ordre: number | undefined,
  isActive: boolean,
): L.DivIcon {
  const color = STATUS_COLORS[status];
  const size = isActive ? 40 : 30;
  const ring = isActive
    ? `box-shadow:0 0 0 8px ${color}33, 0 4px 12px rgba(0,0,0,0.45);`
    : `box-shadow:0 2px 6px rgba(0,0,0,0.35);`;
  const labelHtml = ordre
    ? `<span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:${Math.round(
        size * 0.45,
      )}px;line-height:1;color:#fff;">${ordre}</span>`
    : `<span style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:${Math.round(
        size * 0.45,
      )}px;line-height:1;color:#fff;">•</span>`;
  const html = `<div style="width:${size}px;height:${size}px;background:${color};border:2px solid #fff;border-radius:50%;display:flex;align-items:center;justify-content:center;${ring}transition:all .25s ease;cursor:pointer;">${labelHtml}</div>`;
  return L.divIcon({
    html,
    className: "ruta-marker",
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function RutaMap({
  activeId,
  onSelect,
  showRoute,
}: RutaMapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Record<string, L.Marker>>({});
  const polylineRef = useRef<L.Polyline | null>(null);
  const firstRenderRef = useRef(true);

  // Init map (once)
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [41.3855, 2.1767],
      zoom: 14,
      zoomControl: true,
      scrollWheelZoom: false,
      attributionControl: true,
    });

    // OpenStreetMap tiles (estàndard, lleugeres i llegibles)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    // Forçar recomputed de mida (necessari dins de contenidors flex/grid)
    setTimeout(() => map.invalidateSize(), 200);

    // Marcadors
    rutaMusical.locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: makeIcon(loc.status, loc.ordreRuta, false),
        title: loc.nom,
        alt: loc.nom,
      }).addTo(map);
      marker.on("click", () => onSelect(loc.id));
      markersRef.current[loc.id] = marker;
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
      polylineRef.current = null;
    };
  }, []);

  // Actualitza icona activa + vols a la posició
  useEffect(() => {
    if (!mapRef.current) return;
    Object.entries(markersRef.current).forEach(([id, marker]) => {
      const loc = rutaMusical.locations.find((l) => l.id === id);
      if (!loc) return;
      marker.setIcon(makeIcon(loc.status, loc.ordreRuta, id === activeId));
      // pujar z-index del marcador actiu
      if (id === activeId) marker.setZIndexOffset(1000);
      else marker.setZIndexOffset(0);
    });

    if (activeId) {
      const loc = rutaMusical.locations.find((l) => l.id === activeId);
      if (loc) {
        const targetZoom = loc.noRuta ? 14 : 16;
        mapRef.current.flyTo([loc.lat, loc.lng], targetZoom, {
          duration: 0.7,
        });
      }
    }
  }, [activeId]);

  // Mostra/amaga la línia de la ruta
  useEffect(() => {
    if (!mapRef.current) return;

    if (showRoute) {
      const routeStops = rutaMusical.locations
        .filter((l) => l.ordreRuta)
        .sort((a, b) => (a.ordreRuta ?? 0) - (b.ordreRuta ?? 0))
        .map((l) => [l.lat, l.lng] as [number, number]);

      if (polylineRef.current) polylineRef.current.remove();
      polylineRef.current = L.polyline(routeStops, {
        color: ROUTE_COLOR,
        weight: ROUTE_WEIGHT,
        opacity: 0.85,
        dashArray: "8 8",
        lineCap: "round",
        lineJoin: "round",
      }).addTo(mapRef.current);

      if (firstRenderRef.current) {
        // En la primera renderització, encabir la ruta dins el viewport
        if (routeStops.length > 1) {
          mapRef.current.fitBounds(polylineRef.current.getBounds(), {
            padding: [50, 50],
            maxZoom: 15,
          });
        }
        firstRenderRef.current = false;
      }
    } else if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }
  }, [showRoute]);

  return (
    <div className="relative h-full w-full">
      <div
        ref={containerRef}
        className="h-full w-full"
        style={{
          background: "#1c0b0e",
          minHeight: 360,
        }}
        aria-label="Mapa interactiu de la ruta musical per Barcelona"
        role="application"
      />
      <style jsx global>{`
        /* Marker subtle ring on hover */
        .ruta-marker > div {
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }
        .ruta-marker:hover > div {
          transform: scale(1.08);
        }
        /* Leaflet popup & controls tematitzats */
        .leaflet-container {
          background: #1c0b0e;
          font-family: var(--font-body), Georgia, serif;
        }
        .leaflet-control-attribution {
          background: rgba(28, 11, 14, 0.85) !important;
          color: rgba(255, 255, 255, 0.7) !important;
          font-size: 10px !important;
          backdrop-filter: blur(6px);
          border-radius: 6px 0 0 0;
        }
        .leaflet-control-attribution a {
          color: #fff !important;
        }
        .leaflet-control-zoom a {
          background: rgba(28, 11, 14, 0.9) !important;
          color: #fff !important;
          border: 1px solid rgba(128, 41, 111, 0.4) !important;
          backdrop-filter: blur(8px);
        }
        .leaflet-control-zoom a:hover {
          background: rgba(128, 41, 111, 0.5) !important;
        }
        .leaflet-bar {
          border: none !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
    </div>
  );
}
