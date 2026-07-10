"use client";

import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import {
  Droplets,
  TrendingUp,
  MessageSquareWarning,
  Sun,
  Radio,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Offline-First",
    description: "Works without internet. Built for rural, disconnected communities.",
  },
  {
    icon: Droplets,
    title: "Real-Time Sensing",
    description: "Ultrasonic sensor measures water levels every minute.",
  },
  {
    icon: TrendingUp,
    title: "Predictive AI",
    description: "Rate-of-rise analysis delivers 1–3 hours of early warning.",
  },
  {
    icon: MessageSquareWarning,
    title: "Multi-Channel Alerts",
    description: "Siren, lights, and SMS alerts reach everyone instantly.",
  },
  {
    icon: Sun,
    title: "Solar Powered",
    description: "Runs entirely on solar energy for off-grid deployment.",
  },
  {
    icon: ShieldCheck,
    title: "Rugged & Reliable",
    description: "Engineered to withstand harsh weather with minimal maintenance.",
  },
];

export function Solution() {
  return (
    <Section id="solution" className="bg-background">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn className="lg:sticky lg:top-32">
            <div className="section-label mb-6">
              <ShieldCheck className="h-4 w-4 text-accent" />
              Our Solution
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
              R!SEWATCH protects communities before the flood arrives.
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A solar-powered, offline-first flood early warning system that
              senses, thinks, and alerts — automatically.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="surface-card rounded-2xl p-6 h-full hover:bg-surface-elevated transition-colors duration-300">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
