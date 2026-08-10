"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import { profile, education } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="accent-line mx-auto mb-20 max-w-6xl opacity-50" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label mb-4">About Me</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            Engineering with intent
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} className="text-accent" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <GraduationCap size={16} className="text-accent" />
                {education[0].school}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-lg p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                At a glance
              </p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Experience
                  </dt>
                  <dd className="mt-1 text-2xl font-bold">2+ Years</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Focus
                  </dt>
                  <dd className="mt-1 text-lg font-medium">
                    Full-Stack .NET Development
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Education
                  </dt>
                  <dd className="mt-1 text-lg font-medium">
                    BS Information Technology
                  </dd>
                  <dd className="text-sm text-muted">{education[0].period}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-muted">
                    Methodology
                  </dt>
                  <dd className="mt-1 text-lg font-medium">
                    Agile / SDLC
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
