"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { ScrollRow } from "../ui/ScrollRow";

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
    value: "70%+",
    label: "Of disaster-related deaths could be prevented with early warning systems",
  },
];

const points = [
  "Annual floods destroy lives, homes, and farmlands across Africa.",
  "Existing warnings often arrive too late or require internet access.",
  "Rural communities are most vulnerable and least connected.",
];

export function Crisis() {
  return (
    <Section id="about" className="bg-paper">
      <Container>
        <FadeIn className="max-w-3xl mb-16 md:mb-20">
          <div className="section-label text-royal mb-6">
            <span>01</span>
            <span className="h-px w-10 bg-royal/40" />
            About Us
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] mb-6">
            The disaster crisis demands better technology.
          </h2>
          <p className="text-lg sm:text-xl text-muted leading-relaxed">
            HazardZero Technology Ltd. was founded to bridge the gap between
            advanced technology and the communities that need it most. We build
            affordable, accessible, and resilient disaster intelligence and
            emergency technology solutions for communities across Africa.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-20">
          {stats.map((stat, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="border-t border-line pt-8"
            >
              <div className="display-stat font-serif text-navy mb-4">
                {stat.value}
              </div>
              <p className="text-muted leading-relaxed max-w-xs">{stat.label}</p>
            </FadeIn>
          ))}
        </div>

        <ScrollRow className="gap-10 md:grid md:grid-cols-3 md:gap-8">
          {points.map((point, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} className="min-w-[80%] snap-start md:min-w-0">
              <div className="flex items-start gap-5">
                <span className="font-serif italic text-2xl text-royal leading-none pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg text-navy/80 leading-relaxed">{point}</p>
              </div>
            </FadeIn>
          ))}
        </ScrollRow>
      </Container>
    </Section>
  );
}
