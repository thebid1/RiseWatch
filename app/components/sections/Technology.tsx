"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { Cpu, Clock, TrendingUp } from "lucide-react";

export function Technology() {
  return (
    <Section id="technology" className="bg-paper">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div className="surface-card rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Cpu className="h-5 w-5 text-royal" />
                <span className="section-label text-royal">Rate-of-Rise Engine</span>
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
                        ? "bg-sky border border-royal/30"
                        : "bg-paper"
                    }`}
                  >
                    <span className="text-sm text-muted w-16">{row.time}</span>
                    <span className="font-semibold text-navy">{row.level}</span>
                    <span
                      className={`text-sm font-bold ${
                        row.alert ? "text-royal" : "text-muted"
                      }`}
                    >
                      {row.change}
                    </span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-royal p-5 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.18em] opacity-80 mb-1">
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
            <div className="section-label text-royal mb-6">
              <span>04</span>
              <span className="h-px w-10 bg-royal/40" />
              The Technology
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] mb-6">
              Rate-of-Rise Prediction — Our AI Edge
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-10">
              Unlike traditional systems that use simple threshold alerts —
              which often arrive too late — R!SEWATCH stores the last 10
              water-level readings with timestamps to calculate the speed of
              the rise.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <Clock className="h-5 w-5 shrink-0 text-royal mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">Store 10 Readings</h3>
                  <p className="text-muted text-sm leading-relaxed">Every minute, a new reading is recorded with a timestamp.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <TrendingUp className="h-5 w-5 shrink-0 text-royal mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">Calculate Rise Speed</h3>
                  <p className="text-muted text-sm leading-relaxed">The system computes how fast water is rising over the recent window.</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Cpu className="h-5 w-5 shrink-0 text-royal mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy mb-1">Predict & Alert Early</h3>
                  <p className="text-muted text-sm leading-relaxed">If speed exceeds the danger threshold, it predicts time-to-flood and sends an SMS.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
