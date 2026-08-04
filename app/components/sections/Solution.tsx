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
    <Section id="products" className="bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <FadeIn>
            <div className="section-label text-royal mb-6">
              <span>02</span>
              <span className="h-px w-10 bg-royal/40" />
              Our Products
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] mb-6">
              R!SEWATCH
            </h2>
            <p className="text-lg text-muted leading-relaxed max-w-md">
              Our flagship product — a solar-powered, offline-first flood early
              warning system that senses, thinks, and alerts — automatically.
              Built for Nigeria's most vulnerable communities.
            </p>
            <div className="mt-10 rounded-2xl overflow-hidden border border-line">
              <img
                src="/Risewatch_Image.png"
                alt="R!SEWATCH flood early warning system device"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="gauge-ticks mt-12 hidden lg:block" />
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="surface-card group rounded-2xl p-7 h-full transition-colors duration-300 hover:bg-sky/60">
                  <feature.icon className="h-6 w-6 text-royal mb-6" />
                  <h3 className="text-xl font-semibold text-navy mb-2">
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
