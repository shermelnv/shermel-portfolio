"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { projects } from "@/data/profile";

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">Featured Projects</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            Code that ships
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg border border-border bg-surface-elevated p-8 transition-all hover:border-border-accent"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/5 transition-all group-hover:bg-accent/10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-accent bg-accent/10">
                    <Code2 size={18} className="text-accent" />
                  </div>
                  <span className="rounded-sm bg-accent/10 px-2 py-1 font-mono text-xs uppercase tracking-wider text-accent">
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-syne)] text-2xl font-bold">
                  {project.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={tech}
                      className="font-mono text-xs text-muted"
                    >
                      {tech}
                      {i < project.tech.length - 1 && (
                        <span className="ml-4 text-accent/30">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center rounded-lg border border-dashed border-border p-8"
          >
            <div className="text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Coming Soon
              </p>
              <p className="mt-2 text-lg font-medium text-foreground">
                More projects on the way
              </p>
              <p className="mt-1 text-sm text-muted">
                Check the portfolio section for future showcases
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
