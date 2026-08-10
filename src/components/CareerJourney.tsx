"use client";

import { motion } from "framer-motion";
import { careerMilestones } from "@/data/profile";

export function CareerJourney() {
  return (
    <section id="journey" className="relative bg-surface py-28">
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-4">Career Journey</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            From foundations to enterprise
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A timeline of growth—from university halls to shipping production
            software for real clients.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {careerMilestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-border-accent bg-surface-elevated md:left-1/2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div
                  className={`flex-1 pl-12 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="glass-card inline-block rounded-lg p-6 text-left">
                    <span className="font-mono text-sm font-bold text-accent">
                      {milestone.year}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-syne)] text-xl font-bold">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
