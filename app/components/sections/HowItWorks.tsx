"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { ScrollRow } from "../ui/ScrollRow";
import { ScanLine, Brain, Send, Siren } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ScanLine,
    title: "Sense",
    description:
      "Ultrasonic sensor measures water level every minute with high accuracy.",
  },
  {
    number: "02",
    icon: Brain,
    title: "Think",
    description:
      "Arduino controller analyzes rate-of-rise and threshold breaches.",
  },
  {
    number: "03",
    icon: Send,
    title: "Send",
    description:
      "GSM module sends SMS alerts while local triggers activate in real time.",
  },
  {
    number: "04",
    icon: Siren,
    title: "Alert",
    description:
      "Siren and flashing lights warn the community instantly — no phone required.",
  },
];

const scallops = "t-60 0".repeat(23);

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="on-dark bg-navy" padded={false}>
      {/* Wave edges: the dark band is the river between two banks */}
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="block h-8 w-full text-white md:h-12"
        aria-hidden="true"
      >
        <path d={`M0 0H1440V20Q1410 40 1380 20${scallops}T0 20Z`} fill="currentColor" />
      </svg>

      <Container className="py-24 md:py-28">
        <FadeIn className="max-w-3xl mb-16 md:mb-20">
          <div className="section-label text-royal-bright mb-6">
            <span>03</span>
            <span className="h-px w-10 bg-royal-bright/40" />
            The Process
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-6">
            How R!SEWATCH Works
          </h2>
          <p className="text-lg text-muted-light leading-relaxed">
            From sensor reading to community alert in four seamless steps.
          </p>
        </FadeIn>

        <ScrollRow className="gap-10 sm:grid sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1} className="min-w-[60%] snap-start sm:min-w-0">
              <div className="group border-t border-line-dark pt-8 h-full">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif italic text-3xl text-royal-bright">
                    {step.number}
                  </span>
                  <step.icon className="h-6 w-6 text-muted-light group-hover:text-royal-bright transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-light leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </ScrollRow>

        <div className="gauge-ticks mt-20 opacity-70" />
      </Container>

      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        className="block h-8 w-full text-paper md:h-12"
        aria-hidden="true"
      >
        <path d={`M0 40H1440V20Q1410 0 1380 20${scallops}T0 20Z`} fill="currentColor" />
      </svg>
    </Section>
  );
}
