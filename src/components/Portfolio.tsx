"use client";

import { motion } from "framer-motion";
import { ExternalLink, FolderOpen, Lock } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { portfolioLinks } from "@/data/profile";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  folder: FolderOpen,
  external: ExternalLink,
};

export function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-surface py-28">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            Explore my work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Active links to GitHub and LinkedIn. Case studies and live demos
            are being prepared—check back soon.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {portfolioLinks.map((link, index) => {
            const Icon = iconMap[link.icon];
            const content = (
              <>
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-sm border ${
                      link.available
                        ? "border-border-accent bg-accent/10"
                        : "border-border bg-surface"
                    }`}
                  >
                    <Icon
                      size={22}
                      className={link.available ? "text-accent" : "text-muted"}
                    />
                  </div>
                  {!link.available && (
                    <span className="flex items-center gap-1 rounded-sm bg-surface-elevated px-2 py-1 font-mono text-xs text-muted">
                      <Lock size={10} />
                      Soon
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-[family-name:var(--font-syne)] text-xl font-bold">
                  {link.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{link.description}</p>

                {link.available && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Visit
                    <ExternalLink size={14} />
                  </span>
                )}
              </>
            );

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {link.available ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card group block h-full rounded-lg p-8 transition-all hover:border-border-accent hover:shadow-[0_0_40px_var(--glow)]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="glass-card block h-full rounded-lg p-8 opacity-60">
                    {content}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
