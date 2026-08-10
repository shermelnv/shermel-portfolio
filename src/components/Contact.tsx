"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="glow-orb bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 bg-accent/10" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Open to full-stack .NET roles, freelance projects, and
            collaborations. Reach out—I typically respond within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          <div className="glass-card rounded-lg p-10">
            <div className="grid gap-8 sm:grid-cols-3">
              <a
                href={`mailto:${profile.email}`}
                className="group flex flex-col items-center gap-3 text-center transition-colors hover:text-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border-accent bg-accent/10 transition-all group-hover:shadow-[0_0_20px_var(--glow)]">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium break-all">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="group flex flex-col items-center gap-3 text-center transition-colors hover:text-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border-accent bg-accent/10 transition-all group-hover:shadow-[0_0_20px_var(--glow)]">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium">{profile.phone}</p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border-accent bg-accent/10">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-medium">{profile.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={`mailto:${profile.email}?subject=Let's%20connect`}
                className="inline-flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-all hover:bg-accent-dim hover:shadow-[0_0_30px_var(--glow)]"
              >
                <Mail size={16} />
                Send an email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
