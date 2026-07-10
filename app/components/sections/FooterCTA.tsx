"use client";

import { motion } from "framer-motion";
import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { ArrowRight, CheckCircle2, Globe, Briefcase } from "lucide-react";

export function FooterCTA() {
  return (
    <Section id="get-involved" className="bg-surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Join us in saving lives.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
              R!SEWATCH is market-ready. Pilot communities are waiting. With
              your support, we can scale fast and protect thousands.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-background border border-border px-5 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors whitespace-nowrap"
              >
                Support the Pilot
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-6">
            <FadeIn delay={0.1}>
              <div className="surface-card rounded-2xl p-8 h-full">
                <CheckCircle2 className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-2xl font-serif text-white mb-4">Now</h3>
                <ul className="space-y-3 text-muted">
                  <li>Market-ready product</li>
                  <li>Pilot communities waiting</li>
                  <li>Production ready to start</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="surface-card rounded-2xl p-8 h-full">
                <Globe className="h-8 w-8 text-accent mb-6" />
                <h3 className="text-2xl font-serif text-white mb-4">Next</h3>
                <ul className="space-y-3 text-muted">
                  <li>Scale to communities</li>
                  <li>Create local jobs</li>
                  <li>Save thousands of lives</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 md:mt-32 pt-12 border-t border-border"
        >
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1]">
            EVERY MINUTE COUNTS.{" "}
            <span className="text-accent">EVERY LIFE MATTERS.</span>
          </p>
        </motion.div>
      </Container>

      {/* Footer bottom */}
      <div className="mt-20 border-t border-border">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                R!SE<span className="text-accent">WATCH</span>
              </span>
            </div>
            <p className="text-sm text-muted text-center sm:text-left">
              © {new Date().getFullYear()} R!SEWATCH. Manufactured in Nigeria.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Briefcase className="h-4 w-4" />
              v1.0
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
