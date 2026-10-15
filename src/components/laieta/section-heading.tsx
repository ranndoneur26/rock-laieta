import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  kicker: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  index,
  kicker,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex items-center gap-3 text-primary/80">
        <span className="font-mono text-xs tracking-widest text-primary">
          {index}
        </span>
        <span className="h-px w-8 bg-primary/50" />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
          {kicker}
        </span>
      </div>
      <h2 className="text-display text-4xl leading-[0.95] text-foreground sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-balance-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
