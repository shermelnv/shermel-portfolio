"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="glow-orb -top-32 left-1/4 h-96 w-96 bg-accent/20 animate-pulse-glow" />
      <div className="glow-orb top-1/3 -right-32 h-80 w-80 bg-cyan-500/10 animate-pulse-glow" />
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-label mb-6">Available for opportunities</p>

          <h1 className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Shermel</span>
            <br />
            <span className="text-foreground">Nepth R. Vital</span>
          </h1>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-12 bg-accent" />
            <p className="text-xl font-medium text-muted sm:text-2xl">
              {profile.title}
            </p>
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline} Enterprise architecture meets modern full-stack
            craft—C#, ASP.NET Core, React, and APIs that scale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#journey"
              className="group inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-background transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_var(--glow)]"
            >
              View my journey
              <ArrowDown
                size={16}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="/Shermel-Vital-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-border-accent hover:bg-surface-elevated"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <GitHubIcon size={22} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={22} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-muted transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <span className="font-mono text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={16} className="animate-float" />
        </a>
      </motion.div>
    </section>
  );
}
