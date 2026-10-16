"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as d3 from "d3";
import { motion, AnimatePresence } from "framer-motion";
import {
  grafoNodes,
  grafoEdges,
  grafoIntro,
  grafoStats,
  NODE_COLORS,
  EDGE_COLORS,
  NODE_LABEL,
  EDGE_LABEL,
  type NodeType,
  type EdgeType,
  type GrafoNode,
} from "@/lib/grafo-data";
import { SectionHeading } from "./section-heading";
import {
  X,
  Search,
  Music2,
  Disc3,
  MapPin,
  Building2,
  Users2,
  Filter,
  ExternalLink,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  Share2,
  Hash,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NODE_ICON: Record<NodeType, typeof Music2> = {
  banda: Music2,
  musica: Users2,
  disc: Disc3,
  sala: MapPin,
  persona: Building2,
};

const NODE_RADIUS: Record<number, number> = { 1: 8, 2: 12, 3: 16 };

type SimNode = GrafoNode & { x?: number; y?: number; fx?: number | null; fy?: number | null };
type SimLink = { source: string | SimNode; target: string | SimNode; type: EdgeType; any?: number; nota?: string };

const ALL_NODE_TYPES: NodeType[] = ["banda", "musica", "disc", "sala", "persona"];
const ALL_EDGE_TYPES: EdgeType[] = [
  "membre",
  "disc_de",
  "gravat_a",
  "actuacio",
  "colaboracio",
  "influencia",
  "manager",
  "productor",
];

interface NodeRender extends GrafoNode {
  x: number;
  y: number;
  fx?: number | null;
  fy?: number | null;
}

export function GrafoRelacions() {
  const svgRef = useRef<SVGSVGElement>(null);
  const gRef = useRef<SVGGElement>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const simulationRef = useRef<d3.Simulation<NodeRender, undefined> | null>(null);
  const nodeSelRef = useRef<d3.Selection<SVGGElement, NodeRender, SVGGElement, unknown> | null>(null);
  const linkSelRef = useRef<d3.Selection<SVGLineElement, SimLink, SVGGElement, unknown> | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>("m-gato-perez");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeNodeFilters, setActiveNodeFilters] = useState<Set<NodeType>>(
    new Set(ALL_NODE_TYPES),
  );
  const [activeEdgeFilters, setActiveEdgeFilters] = useState<Set<EdgeType>>(
    new Set(ALL_EDGE_TYPES),
  );
  const [query, setQuery] = useState("");

  const selected = useMemo(
    () => grafoNodes.find((n) => n.id === selectedId) ?? null,
    [selectedId],
  );

  // === Connexions del node seleccionat ===
  const selectedConnections = useMemo(() => {
    if (!selectedId) return { outgoing: [], incoming: [] };
    const outgoing = grafoEdges
      .filter((e) => e.source === selectedId)
      .map((e) => ({
        edge: e,
        other: grafoNodes.find((n) => n.id === e.target),
        direction: "out" as const,
      }))
      .filter((c) => c.other);
    const incoming = grafoEdges
      .filter((e) => e.target === selectedId)
      .map((e) => ({
        edge: e,
        other: grafoNodes.find((n) => n.id === e.source),
        direction: "in" as const,
      }))
      .filter((c) => c.other);
    return { outgoing, incoming };
  }, [selectedId]);

  // === Setup D3 simulation + zoom (UNA VEGADA) ===
  useEffect(() => {
    if (!svgRef.current || !gRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = d3.select(gRef.current);

    const width = svgRef.current.clientWidth || 800;
    const height = svgRef.current.clientHeight || 500;

    // Còpies per a la simulació
    const nodes: NodeRender[] = grafoNodes.map((n) => ({
      ...n,
      x: width / 2 + (Math.random() - 0.5) * 100,
      y: height / 2 + (Math.random() - 0.5) * 100,
    }));
    const links: SimLink[] = grafoEdges.map((e) => ({ ...e }));

    // Zoom
    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.3, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform.toString());
      });
    zoomRef.current = zoom;
    svg.call(zoom);

    // Simulació
    const sim = d3
      .forceSimulation<NodeRender>(nodes)
      .force(
        "link",
        d3
          .forceLink<NodeRender, SimLink>(links)
          .id((d) => d.id)
          .distance((d) => {
            // Distància segons tipus d'edge
            if (d.type === "disc_de") return 50;
            if (d.type === "membre") return 60;
            if (d.type === "gravat_a") return 70;
            return 90;
          })
          .strength(0.5),
      )
      .force("charge", d3.forceManyBody().strength(-220).distanceMax(450))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.04))
      .force("y", d3.forceY(height / 2).strength(0.04))
      .force(
        "collide",
        d3
          .forceCollide<NodeRender>()
          .radius((d) => NODE_RADIUS[d.importanca] + 6),
      );

    simulationRef.current = sim;

    // Links (línies)
    const link = g
      .selectAll<SVGLineElement, SimLink>(".edge")
      .data(links)
      .join("line")
      .attr("class", "edge")
      .attr("stroke", (d) => EDGE_COLORS[d.type])
      .attr("stroke-width", 1.2)
      .attr("stroke-opacity", 0.5)
      .attr("stroke-dasharray", (d) =>
        d.type === "influencia"
          ? "5 4"
          : d.type === "colaboracio"
            ? "6 3"
            : null,
      )
      .attr("pointer-events", "none");

    linkSelRef.current = link;

    // Nodes (grups <g>)
    const node = g
      .selectAll<SVGGElement, NodeRender>(".node")
      .data(nodes)
      .join("g")
      .attr("class", "node")
      .style("cursor", "pointer");

    // Àrea de clic invisible (més gran que el cercle visible)
    node
      .append("circle")
      .attr("class", "node-hit")
      .attr("r", (d) => NODE_RADIUS[d.importanca] + 14)
      .attr("fill", "transparent")
      .attr("stroke", "none")
      .attr("pointer-events", "all");

    // Cercle amb glow
    node
      .append("circle")
      .attr("class", "node-core")
      .attr("r", (d) => NODE_RADIUS[d.importanca])
      .attr("fill", (d) => NODE_COLORS[d.tipus])
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.6)
      .attr("stroke-opacity", 0.85)
      .style("filter", "drop-shadow(0 1px 3px rgba(0,0,0,0.45))");

    // Anell exterior (per icona "destacat")
    node
      .filter((d) => d.importanca === 3)
      .append("circle")
      .attr("r", (d) => NODE_RADIUS[d.importanca] + 4)
      .attr("fill", "none")
      .attr("stroke", (d) => NODE_COLORS[d.tipus])
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.45)
      .attr("stroke-dasharray", "2 3")
      .attr("pointer-events", "none");

    // Etiqueta de text
    node
      .append("text")
      .text((d) => (d.nom.length > 22 ? d.nom.slice(0, 20) + "…" : d.nom))
      .attr("x", (d) => NODE_RADIUS[d.importanca] + 6)
      .attr("y", 4)
      .attr("font-size", (d) => (d.importanca === 3 ? 12 : 10))
      .attr("font-family", "'Space Grotesk', sans-serif")
      .attr("font-weight", (d) => (d.importanca === 3 ? 600 : 400))
      .attr("fill", "#fff")
      .attr("fill-opacity", 0.88)
      .attr("pointer-events", "none");

    // Drag
    node.call(
      d3
        .drag<SVGGElement, NodeRender>()
        .on("start", (event, d) => {
          if (!event.active) sim.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d) => {
          if (!event.active) sim.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }),
    );

    // Interacció
    node.on("click", (event, d) => {
      event.stopPropagation();
      setSelectedId(d.id);
    });
    node.on("mouseenter", (_event, d) => {
      setHoveredId(d.id);
    });
    node.on("mouseleave", () => setHoveredId(null));

    nodeSelRef.current = node;

    // Tick
    sim.on("tick", () => {
      link
        .attr("x1", (d) => {
          const s = d.source as NodeRender;
          return s.x ?? 0;
        })
        .attr("y1", (d) => {
          const s = d.source as NodeRender;
          return s.y ?? 0;
        })
        .attr("x2", (d) => {
          const t = d.target as NodeRender;
          return t.x ?? 0;
        })
        .attr("y2", (d) => {
          const t = d.target as NodeRender;
          return t.y ?? 0;
        });
      node.attr("transform", (d) => `translate(${d.x ?? 0}, ${d.y ?? 0})`);
    });

    // Clic al fons → deselecciona
    svg.on("click", () => setSelectedId(null));

    // Hover estilo cursor
    return () => {
      sim.stop();
      svg.on(".zoom", null);
    };
  }, []);

  // === Aplicar filtres (visibilitat) ===
  useEffect(() => {
    if (!nodeSelRef.current || !linkSelRef.current) return;

    const visibleIds = new Set(
      grafoNodes.filter((n) => activeNodeFilters.has(n.tipus)).map((n) => n.id),
    );
    const visibleEdges = grafoEdges.filter(
      (e) =>
        activeEdgeFilters.has(e.type) &&
        visibleIds.has(e.source) &&
        visibleIds.has(e.target),
    );
    const visibleEdgesSet = new Set(
      visibleEdges.map((e) => `${e.source}|${e.target}|${e.type}`),
    );

    nodeSelRef.current.style("display", (d) =>
      visibleIds.has(d.id) ? null : "none",
    );

    linkSelRef.current.style("display", (d) => {
      const srcId = typeof d.source === "object" ? (d.source as NodeRender).id : d.source;
      const tgtId = typeof d.target === "object" ? (d.target as NodeRender).id : d.target;
      const key = `${srcId}|${tgtId}|${d.type}`;
      return visibleEdgesSet.has(key) ? null : "none";
    });

    // Reescalfa la simulació
    if (simulationRef.current) {
      simulationRef.current.alpha(0.6).restart();
    }
  }, [activeNodeFilters, activeEdgeFilters]);

  // === Ressaltar selecció + connexions ===
  useEffect(() => {
    if (!nodeSelRef.current || !linkSelRef.current) return;

    const connected = new Set<string>();
    if (selectedId) {
      connected.add(selectedId);
      grafoEdges.forEach((e) => {
        if (e.source === selectedId) connected.add(e.target);
        if (e.target === selectedId) connected.add(e.source);
      });
    }

    nodeSelRef.current.style("opacity", (d) => {
      if (!selectedId) return 1;
      return connected.has(d.id) ? 1 : 0.25;
    });

    nodeSelRef.current
      .select(".node-core")
      .attr("stroke-width", (d) => (d.id === selectedId ? 3.5 : 1.6))
      .attr("stroke", (d) => (d.id === selectedId ? "#fff" : connected.has(d.id) ? "#fff" : "transparent"));

    linkSelRef.current
      .attr("stroke-opacity", (d) => {
        const srcId = typeof d.source === "object" ? (d.source as NodeRender).id : d.source;
        const tgtId = typeof d.target === "object" ? (d.target as NodeRender).id : d.target;
        if (!selectedId) return 0.5;
        if (srcId === selectedId || tgtId === selectedId) return 1;
        return 0.08;
      })
      .attr("stroke-width", (d) => {
        const srcId = typeof d.source === "object" ? (d.source as NodeRender).id : d.source;
        const tgtId = typeof d.target === "object" ? (d.target as NodeRender).id : d.target;
        if (srcId === selectedId || tgtId === selectedId) return 2.4;
        return 1.2;
      });
  }, [selectedId, activeNodeFilters, activeEdgeFilters]);

  // === Ressaltar hover ===
  useEffect(() => {
    if (!nodeSelRef.current) return;
    nodeSelRef.current
      .select(".node-core")
      .attr("r", (d) =>
        d.id === hoveredId && d.id !== selectedId
          ? NODE_RADIUS[d.importanca] + 3
          : NODE_RADIUS[d.importanca],
      );
  }, [hoveredId, selectedId]);

  // === Cerca ===
  const searchResults = useMemo(() => {
    if (query.trim().length < 2) return [];
    const q = query.toLowerCase();
    return grafoNodes.filter(
      (n) =>
        n.nom.toLowerCase().includes(q) ||
        n.bio.toLowerCase().includes(q),
    ).slice(0, 8);
  }, [query]);

  // === Accions de zoom ===
  const handleZoomIn = () => {
    if (!svgRef.current || !zoomRef.current) return;
    d3.select(svgRef.current).transition().duration(250).call(zoomRef.current.scaleBy, 1.4);
  };
  const handleZoomOut = () => {
    if (!svgRef.current || !zoomRef.current) return;
    d3.select(svgRef.current).transition().duration(250).call(zoomRef.current.scaleBy, 0.7);
  };
  const handleReset = () => {
    if (!svgRef.current || !zoomRef.current) return;
    d3.select(svgRef.current).transition().duration(400).call(zoomRef.current.transform, d3.zoomIdentity);
    if (simulationRef.current) simulationRef.current.alpha(0.6).restart();
  };

  // === Toggle filtres ===
  const toggleNodeFilter = (t: NodeType) => {
    setActiveNodeFilters((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };
  const toggleEdgeFilter = (t: EdgeType) => {
    setActiveEdgeFilters((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  return (
    <section
      id="grafo-relacions"
      className="relative scroll-mt-24 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          index="08"
          kicker="Xarxa"
          title={grafoIntro.titol}
          description={grafoIntro.intro}
        />

        {/* Barra de filtres + cerca */}
        <div className="mt-8 rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur">
          {/* Cerca */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cerca un node pel nom o la bio…"
              className="w-full rounded-lg border border-border/60 bg-background/60 py-2 pl-10 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            {searchResults.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-30 mt-1 overflow-hidden rounded-lg border border-border/60 bg-card/95 shadow-xl backdrop-blur">
                {searchResults.map((r) => (
                  <li key={r.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedId(r.id);
                        setQuery("");
                      }}
                      className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-foreground/85 transition hover:bg-secondary/40"
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: NODE_COLORS[r.tipus] }}
                      />
                      <span className="flex-1 truncate">{r.nom}</span>
                      <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                        {NODE_LABEL[r.tipus]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Filtres node + edge */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <FilterGroup label="Filtres per node">
              {ALL_NODE_TYPES.map((t) => (
                <FilterChip
                  key={t}
                  active={activeNodeFilters.has(t)}
                  color={NODE_COLORS[t]}
                  label={NODE_LABEL[t]}
                  icon={NODE_ICON[t]}
                  onClick={() => toggleNodeFilter(t)}
                />
              ))}
            </FilterGroup>
            <FilterGroup label="Filtres per relació">
              {ALL_EDGE_TYPES.map((t) => (
                <FilterChip
                  key={t}
                  active={activeEdgeFilters.has(t)}
                  color={EDGE_COLORS[t]}
                  label={EDGE_LABEL[t]}
                  dashed={t === "influencia" || t === "colaboracio"}
                  onClick={() => toggleEdgeFilter(t)}
                />
              ))}
            </FilterGroup>
          </div>

          {/* Accions ràpides */}
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setActiveNodeFilters(new Set(ALL_NODE_TYPES));
                setActiveEdgeFilters(new Set(ALL_EDGE_TYPES));
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-foreground/80 transition hover:bg-secondary/60"
            >
              <Filter className="h-3 w-3" />
              Mostra-ho tot
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveNodeFilters(new Set(["musica", "banda"]));
                setActiveEdgeFilters(new Set(["membre", "colaboracio", "influencia"]));
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-foreground/80 transition hover:bg-secondary/60"
            >
              <Users2 className="h-3 w-3" />
              Només músics i bandes
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveNodeFilters(new Set(["disc", "banda"]));
                setActiveEdgeFilters(new Set(["disc_de"]));
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-foreground/80 transition hover:bg-secondary/60"
            >
              <Disc3 className="h-3 w-3" />
              Només discografia
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveNodeFilters(new Set(["banda", "sala"]));
                setActiveEdgeFilters(new Set(["actuacio"]));
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-secondary/30 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-foreground/80 transition hover:bg-secondary/60"
            >
              <MapPin className="h-3 w-3" />
              Només sales i actuacions
            </button>
          </div>
        </div>

        {/* Grafo + panell lateral */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Canvas SVG */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <div className="relative h-[560px] overflow-hidden rounded-2xl border border-border/60 bg-card/40 lg:h-[640px]">
              <svg
                ref={svgRef}
                className="h-full w-full"
                style={{ background: "radial-gradient(circle at 50% 40%, #2a1421 0%, #1c0b0e 70%)" }}
                aria-label="Grafo interactiu de connexions entre artistes"
                role="img"
              >
                <g ref={gRef} />
              </svg>

              {/* Controls zoom overlay */}
              <div className="absolute bottom-3 left-3 z-10 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={handleZoomIn}
                  aria-label="Augmentar zoom"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/90 text-foreground backdrop-blur transition hover:bg-primary/20"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleZoomOut}
                  aria-label="Disminuir zoom"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/90 text-foreground backdrop-blur transition hover:bg-primary/20"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  aria-label="Restablir"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-background/90 text-foreground backdrop-blur transition hover:bg-primary/20"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>

              {/* Llegenda overlay */}
              <div className="absolute right-3 top-3 z-10 rounded-lg border border-border/60 bg-background/90 px-3 py-2 backdrop-blur-md">
                <p className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground">
                  Llegenda
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {ALL_NODE_TYPES.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-1.5 text-[0.7rem] text-foreground/85"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: NODE_COLORS[t] }}
                      />
                      {NODE_LABEL[t]}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="absolute bottom-3 right-3 z-10 rounded-lg border border-border/60 bg-background/90 px-3 py-2 font-mono text-[0.7rem] text-muted-foreground backdrop-blur-md">
                {grafoStats.totalNodes} nodes · {grafoStats.totalEdges} relacions
              </div>
            </div>

            <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
              Clica un node per veure les seves connexions · Arrossega per moure · Roda del ratolí per zoom
            </p>
          </div>

          {/* Panell lateral */}
          <aside className="lg:col-span-4 order-1 lg:order-2">
            <div className="sticky top-20 rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur lg:max-h-[640px] lg:overflow-y-auto scroll-warm">
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                          {(() => {
                            const Icon = NODE_ICON[selected.tipus];
                            return <Icon className="h-3 w-3" />;
                          })()}
                          {NODE_LABEL[selected.tipus]}
                          {selected.subtipus ? ` · ${selected.subtipus}` : ""}
                        </p>
                        <h3 className="mt-1 text-display text-xl leading-tight text-foreground sm:text-2xl">
                          {selected.nom}
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedId(null)}
                        aria-label="Tanca"
                        className="shrink-0 rounded-full border border-border/60 p-1.5 text-muted-foreground transition hover:bg-secondary/60"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Indicador color + anys */}
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-medium"
                        style={{
                          borderColor: `${NODE_COLORS[selected.tipus]}55`,
                          color: NODE_COLORS[selected.tipus],
                          background: `${NODE_COLORS[selected.tipus]}14`,
                        }}
                      >
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ background: NODE_COLORS[selected.tipus] }}
                        />
                        {NODE_LABEL[selected.tipus]}
                      </span>
                      {selected.any && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-secondary/30 px-2.5 py-1 font-mono text-[0.65rem] text-foreground/80">
                          {selected.any}
                          {selected.anyFi ? `–${selected.anyFi}` : ""}
                        </span>
                      )}
                    </div>

                    {/* Bio */}
                    <p className="mb-4 text-sm leading-relaxed text-foreground/85">
                      {selected.bio}
                    </p>

                    {selected.linkExtern && (
                      <a
                        href={selected.linkExtern}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-4 inline-flex items-center gap-1.5 text-sm text-primary underline-offset-4 hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Més informació
                      </a>
                    )}

                    {/* Connexions */}
                    <div className="border-t border-border/40 pt-4">
                      <p className="mb-2 flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
                        <Share2 className="h-3 w-3" />
                        Connexions ({selectedConnections.outgoing.length + selectedConnections.incoming.length})
                      </p>

                      {selectedConnections.outgoing.length > 0 && (
                        <div className="mb-3">
                          <p className="mb-1 text-[0.7rem] font-medium text-foreground/70">
                            → Com a origen
                          </p>
                          <ul className="space-y-1">
                            {selectedConnections.outgoing.map((c, i) => (
                              <li key={`${c.other?.id}-${i}`}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedId(c.other!.id)}
                                  className="flex w-full items-center gap-2 rounded-md p-1.5 text-left text-xs transition hover:bg-secondary/40"
                                >
                                  <span
                                    className="h-1.5 w-6 rounded"
                                    style={{ background: EDGE_COLORS[c.edge.type] }}
                                  />
                                  <span className="min-w-0 flex-1">
                                    <span className="block truncate font-medium text-foreground/90">
                                      {c.other?.nom}
                                    </span>
                                    <span className="block text-[0.65rem] text-muted-foreground">
                                      {EDGE_LABEL[c.edge.type]}
                                      {c.edge.any ? ` · ${c.edge.any}` : ""}
                                    </span>
                                  </span>
                                  <span
                                    className="h-2 w-2 shrink-0 rounded-full"
                                    style={{ background: NODE_COLORS[c.other!.tipus] }}
                                  />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {selectedConnections.incoming.length > 0 && (
                        <div>
                          <p className="mb-1 text-[0.7rem] font-medium text-foreground/70">
                            ← Com a destí
                          </p>
                          <ul className="space-y-1">
                            {selectedConnections.incoming.map((c, i) => (
                              <li key={`${c.other?.id}-${i}`}>
                                <button
                                  type="button"
                                  onClick={() => setSelectedId(c.other!.id)}
                                  className="flex w-full items-center gap-2 rounded-md p-1.5 text-left text-xs transition hover:bg-secondary/40"
                                >
                                  <span
                                    className="h-1.5 w-6 rounded"
                                    style={{ background: EDGE_COLORS[c.edge.type] }}
                                  />
                                  <span className="min-w-0 flex-1">
                                    <span className="block truncate font-medium text-foreground/90">
                                      {c.other?.nom}
                                    </span>
                                    <span className="block text-[0.65rem] text-muted-foreground">
                                      {EDGE_LABEL[c.edge.type]}
                                      {c.edge.any ? ` · ${c.edge.any}` : ""}
                                    </span>
                                  </span>
                                  <span
                                    className="h-2 w-2 shrink-0 rounded-full"
                                    style={{ background: NODE_COLORS[c.other!.tipus] }}
                                  />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-10 text-center"
                  >
                    <Hash className="h-10 w-10 text-muted-foreground/40" />
                    <p className="mt-3 text-sm text-muted-foreground">
                      Selecciona un node del grafo
                    </p>
                    <p className="mt-1 text-[0.7rem] text-muted-foreground/70">
                      Veureu aquí les seves connexions
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

// === Subcomponents ===

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted-foreground">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function FilterChip({
  active,
  color,
  label,
  icon: Icon,
  dashed,
  onClick,
}: {
  active: boolean;
  color: string;
  label: string;
  icon?: typeof Music2;
  dashed?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.7rem] transition",
        active
          ? "border-primary/40 text-foreground"
          : "border-border/40 text-muted-foreground line-through opacity-50 hover:opacity-80",
      )}
      style={
        active
          ? {
              borderColor: `${color}55`,
              background: `${color}1a`,
            }
          : undefined
      }
    >
      {Icon ? (
        <Icon className="h-3 w-3" style={active ? { color } : undefined} />
      ) : (
        <span
          className={cn("h-2 w-2 rounded-full", dashed && "rounded-none")}
          style={{
            background: active ? color : "transparent",
            border: active ? "none" : `1px solid ${color}`,
          }}
        />
      )}
      {label}
    </button>
  );
}
