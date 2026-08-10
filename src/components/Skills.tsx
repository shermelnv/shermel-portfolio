"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";

const categories = [
  { key: "programming" as const, label: "Programming & Frameworks" },
  { key: "databases" as const, label: "Databases" },
  { key: "tools" as const, label: "Tools" },
  { key: "practices" as const, label: "Practices" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Technical Skills</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            The stack I ship with
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="glass-card rounded-lg p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                {cat.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills[cat.key].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-border bg-surface-elevated px-3 py-1.5 text-sm text-foreground transition-colors hover:border-border-accent hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
