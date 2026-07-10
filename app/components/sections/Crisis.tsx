"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { AlertTriangle } from "lucide-react";

const stats = [
  {
    value: "+78%",
    label: "Increase in severe flooding events in Nigeria over the last decade",
  },
  {
    value: "$150B+",
    label: "Estimated annual losses from floods across African economies",
  },
  {
    value: "$0",
    label: "Compensation many rural communities receive after a flood",
  },
];

const points = [
  "Annual floods destroy lives, homes, and farmlands.",
  "Existing warnings often arrive too late or require internet.",
  "Rural communities are most vulnerable and least connected.",
];

export function Crisis() {
  return (
    <Section id="crisis" className="bg-surface">
      <Container>
        <FadeIn className="max-w-3xl mb-16">
          <div className="section-label mb-6">
            <AlertTriangle className="h-4 w-4 text-danger" />
            The Problem
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            Flooding in Nigeria is a growing crisis.
          </h2>
          <p className="text-lg sm:text-xl text-muted leading-relaxed">
            Recent disasters like Mokwa (2024), where 159 lives were lost, show
            the urgent need for early warnings that reach everyone — especially
            those without smartphones or internet.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.1} className="bg-surface p-8 md:p-10">
              <div className="display-stat font-serif text-white mb-4">
                {stat.value}
              </div>
              <p className="text-muted leading-relaxed">{stat.label}</p>
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <FadeIn key={index} delay={0.3 + index * 0.1}>
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-lg text-zinc-300 leading-relaxed">{point}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
