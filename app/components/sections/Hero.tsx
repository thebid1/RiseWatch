"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Section";
import { ArrowRight, ShieldCheck, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-24 pb-20">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-accent/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              
              <span className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-4 py-1.5 text-sm font-semibold text-muted">
                <Radio className="h-4 w-4" />
                v1.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8"
            >
              Flood early warnings, even without the internet.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-xl"
            >
              R!SEWATCH is a market-ready, solar-powered, offline-first flood
              early warning system built for Nigeria&apos;s most vulnerable communities.
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-surface border border-border px-5 py-3.5 text-white placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-base font-semibold text-white hover:bg-accent-hover transition-colors whitespace-nowrap"
              >
                Get Involved
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden surface-card aspect-square lg:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-background to-background" />
              
              {/* Abstract water visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-blue-900/40 blur-3xl" />
                  <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-accent/50 to-blue-600/30 blur-2xl" />
                  <div className="absolute inset-[30%] rounded-full bg-accent/60 glow-blue" />
                  
                  {/* Ripple rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '3s' }} />
                  </div>
                  <div className="absolute inset-[10%] flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-accent/30" />
                  </div>
                  <div className="absolute inset-[25%] flex items-center justify-center">
                    <div className="w-full h-full rounded-full border border-accent/40" />
                  </div>
                </div>
              </div>

              {/* Floating data card */}
              <div className="absolute bottom-6 left-6 right-6 elevated-card rounded-2xl p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted">Live Sensor Reading</span>
                  <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-4xl font-serif text-white">2.4m</div>
                    <div className="text-sm text-muted">Water Level</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-accent">Normal</div>
                    <div className="text-sm text-muted">~2.5 hrs safe</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
