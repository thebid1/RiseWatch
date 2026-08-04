"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Section";
import { ArrowRight } from "lucide-react";

function WaveLayer({ className = "", driftClass = "wave-drift" }: { className?: string; driftClass?: string }) {
  const wave = (
    <svg
      viewBox="0 0 240 40"
      preserveAspectRatio="none"
      className="h-full w-1/2 shrink-0"
      aria-hidden="true"
    >
      <path
        d="M0 22 Q30 10 60 22 T120 22 T180 22 T240 22 V40 H0 Z"
        fill="currentColor"
      />
    </svg>
  );
  return (
    <div className={`pointer-events-none absolute -top-[23px] left-0 h-[24px] w-full overflow-hidden ${className}`}>
      <div className={`flex h-full w-[200%] ${driftClass}`}>
        {wave}
        {wave}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="on-dark relative min-h-screen overflow-hidden bg-navy">
      {/* Depth gradient + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy to-navy" />
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-royal/25 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-royal-bright/10 blur-[140px]" />
      </div>

      <Container className="relative z-10 pt-32 pb-24 md:pt-40 md:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label text-royal-bright mb-8"
            >
              <span className="h-px w-8 bg-royal-bright/60" />
              Disaster Intelligence & Emergency Technology
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl text-white leading-[1.04] mb-8"
            >
              Building technology that saves lives{" "}
              <span className="text-royal-bright">before disaster strikes.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-light leading-relaxed mb-10 max-w-xl"
            >
              HazardZero Technology Ltd. is a Nigerian disaster intelligence
              and emergency technology company building life-saving solutions
              for communities most vulnerable to natural disasters.
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
                className="flex-1 rounded-full bg-white/5 border border-white/15 px-6 py-3.5 text-white placeholder:text-muted-light focus:outline-none focus:border-royal-bright transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-navy hover:bg-sky transition-colors whitespace-nowrap"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-light"
            >
              <span>Climate-Tech</span>
              <span className="h-1 w-1 rounded-full bg-royal-bright/60" />
              <span>Made in Nigeria</span>
              <span className="h-1 w-1 rounded-full bg-royal-bright/60" />
              <span>Community-First</span>
            </motion.div>
          </div>

          {/* Staff-gauge water visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="dark-card relative aspect-[4/5] overflow-hidden rounded-3xl">
              {/* Gauge ruler */}
              <div className="absolute inset-y-0 left-0 z-20 flex w-14 flex-col justify-between py-8 pl-5">
                {["4m", "3m", "2m", "1m"].map((mark) => (
                  <div key={mark} className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold tracking-widest text-muted-light">{mark}</span>
                    <span className="h-px w-3 bg-white/30" />
                  </div>
                ))}
              </div>
              {/* Minor ticks down the left edge */}
              <div
                className="absolute inset-y-6 left-14 w-3 opacity-60"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(255,255,255,0.25) 0 1px, transparent 1px 14px)",
                }}
              />

              {/* Flood threshold marker */}
              <div className="absolute inset-x-0 top-[30%] z-10 border-t border-dashed border-royal-bright/50">
                <span className="absolute right-4 -top-2.5 bg-navy px-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-royal-bright">
                  Flood threshold
                </span>
              </div>

              {/* Rising water */}
              <div className="water-breathe absolute inset-x-0 bottom-0">
                <WaveLayer className="text-royal-bright/50" driftClass="wave-drift-slow" />
                <WaveLayer className="text-royal" driftClass="wave-drift" />
                <div className="absolute inset-0 top-[1px] bg-gradient-to-b from-royal via-royal-dark to-navy-deep" />
              </div>

              {/* Live reading panel */}
              <div className="absolute bottom-5 left-5 right-5 z-30 rounded-2xl border border-white/15 bg-navy-deep/70 p-5 backdrop-blur-md">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-light">
                    Live sensor reading
                  </span>
                  <span className="flex h-2 w-2 rounded-full bg-royal-bright animate-pulse" />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-serif text-4xl text-white">2.4m</div>
                    <div className="text-xs text-muted-light mt-1">Water level</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-royal-bright">Normal</div>
                    <div className="text-xs text-muted-light mt-1">~2.5 hrs safe</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Staff-gauge strip along the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-line-dark">
        <div className="gauge-ticks opacity-80" />
      </div>
    </section>
  );
}
