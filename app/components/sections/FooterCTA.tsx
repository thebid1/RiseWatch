"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { ArrowRight, CheckCircle2, Globe } from "lucide-react";

export function FooterCTA() {
  return (
    <Section id="get-involved" className="on-dark bg-navy" padded={false}>
      <div className="bg-gradient-to-b from-navy-deep to-navy">
        <Container className="pt-24 md:pt-32 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="section-label text-royal-bright mb-6">
                <span>06</span>
                <span className="h-px w-10 bg-royal-bright/40" />
                Get Involved
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-[1.08] mb-6">
                Join us in saving lives.
              </h2>
              <p className="text-lg text-muted-light leading-relaxed mb-10 max-w-lg">
                R!SEWATCH is market-ready. Pilot communities are waiting. With
                your support, we can scale fast and protect thousands.
              </p>

              <form
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
                  Support the Pilot
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="dark-card rounded-2xl p-8 h-full">
                  <CheckCircle2 className="h-7 w-7 text-royal-bright mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-4">Now</h3>
                  <ul className="space-y-3 text-muted-light">
                    <li>Market-ready product</li>
                    <li>Pilot communities waiting</li>
                    <li>Production ready to start</li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="dark-card rounded-2xl p-8 h-full">
                  <Globe className="h-7 w-7 text-royal-bright mb-6" />
                  <h3 className="text-2xl font-serif text-white mb-4">Next</h3>
                  <ul className="space-y-3 text-muted-light">
                    <li>Scale to communities</li>
                    <li>Create local jobs</li>
                    <li>Save thousands of lives</li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 md:mt-32 pt-12 border-t border-line-dark"
          >
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15]">
              EVERY MINUTE COUNTS.{" "}
              <span className="italic text-royal-bright">EVERY LIFE MATTERS.</span>
            </p>
          </motion.div>
        </Container>

        {/* Footer bottom */}
        <div className="border-t border-line-dark">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-6">
              <a href="#" className="flex items-center gap-2.5" aria-label="R!SEWATCH home">
                <Image
                  src="/logo-icon-white.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                <Image
                  src="/logo-wordmark-white.png"
                  alt="R!SEWATCH — Know before the water rises"
                  width={111}
                  height={20}
                  className="h-5 w-auto"
                />
              </a>
              <p className="text-sm text-muted-light text-center">
                © {new Date().getFullYear()} R!SEWATCH. Manufactured in Nigeria.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-light">
                v1.0
              </p>
            </div>
          </Container>
        </div>
      </div>
    </Section>
  );
}
