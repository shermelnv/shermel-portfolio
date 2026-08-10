"use client";

const technologies = [
  "C#",
  "ASP.NET Core",
  ".NET",
  "Blazor",
  "React",
  "TypeScript",
  "Angular",
  "PostgreSQL",
  "SQL Server",
  "REST APIs",
  "Entity Framework",
  "Git",
];

export function TechStrip() {
  const items = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="flex animate-marquee gap-12 whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="font-mono text-sm uppercase tracking-widest text-muted/60"
          >
            {tech}
            <span className="mx-6 text-accent/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
