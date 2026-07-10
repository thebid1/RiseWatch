"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { Cpu, Clock, TrendingUp } from "lucide-react";

export function Technology() {
  return (
    <Section id="technology" className="bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="surface-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="h-5 w-5 text-accent" />
                <span className="section-label">Rate-of-Rise Engine</span>
              </div>

              <div className="space-y-2 mb-8">
                {[
                  { time: "10:00", level: "1.20m", change: "+0.00m" },
                  { time: "10:01", level: "1.24m", change: "+0.04m" },
                  { time: "10:02", level: "1.30m", change: "+0.06m" },
                  { time: "10:03", level: "1.39m", change: "+0.09m" },
                  { time: "10:04", level: "1.51m", change: "+0.12m", alert: true },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                      row.alert
                        ? "bg-accent/10 border border-accent/20"
                        : "bg-surface-elevated"
                    }`}
                  >
                    <span className="text-sm text-muted w-16">{row.time}</span>
                    <span className="font-semibold text-white">{row.level}</span>
                    <span
                      className={`text-sm font-bold ${
                        row.alert ? "text-accent" : "text-zinc-400"
                      }`}
                    >
                      {row.change}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-accent p-5 text-white">
                <div className="text-xs font-bold uppercase tracking-wider opacity-80 mb-1">
                  Prediction
                </div>
                <div className="text-2xl font-serif">Flood in ~2.5 hours</div>
                <div className="text-sm opacity-90 mt-1">
                  SMS alert dispatched to community leaders.
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="section-label mb-6">
              <Cpu className="h-4 w-4 text-accent" />
              The Technology
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              Rate-of-Rise Prediction — Our AI Edge
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Unlike traditional systems that use simple threshold alerts —
              which often arrive too late — R!SEWATCH stores the last 10
              water-level readings with timestamps to calculate the speed of
              the rise.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Store 10 Readings</h3>
                  <p className="text-muted text-sm">Every minute, a new reading is recorded with a timestamp.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Calculate Rise Speed</h3>
                  <p className="text-muted text-sm">The system computes how fast water is rising over the recent window.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Predict & Alert Early</h3>
                  <p className="text-muted text-sm">If speed exceeds the danger threshold, it predicts time-to-flood and sends an SMS.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
