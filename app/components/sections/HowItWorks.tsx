"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
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

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-surface">
      <Container>
        <FadeIn className="max-w-3xl mb-16">
          <div className="section-label mb-6">
            <ScanLine className="h-4 w-4 text-accent" />
            The Process
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            From sensor reading to community alert in four seamless steps.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="surface-card rounded-2xl p-6 h-full relative overflow-hidden group hover:bg-surface-elevated transition-colors duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <step.icon className="h-16 w-16 text-accent" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-serif text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  );
}
