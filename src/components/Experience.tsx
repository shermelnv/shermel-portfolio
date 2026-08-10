"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";

export function Experience() {
  return (
    <section className="relative bg-surface py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Work Experience</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            Where I&apos;ve built
          </h2>
        </motion.div>

        <div className="mt-16 space-y-8">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card group rounded-lg p-8 transition-all hover:border-border-accent"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-border-accent bg-accent/10">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] text-xl font-bold">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-muted">
                      {job.company} · {job.location}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-sm text-accent">{job.period}</p>
                  <p className="text-xs text-muted">{job.duration}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
