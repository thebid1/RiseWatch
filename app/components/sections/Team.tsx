"use client";

import Image from "next/image";
import { FadeIn } from "../FadeIn";
import { Section, Container } from "../ui/Section";
import { ScrollRow } from "../ui/ScrollRow";

const team = [
  {
    name: "Tijani Shehu Ahmad",
    role: "Founder & CEO",
    image: "/team-ceo.png",
  },
  {
    name: "Abdulrasaq Mustapha",
    role: "Partnership Lead",
    image: "/Einstein Head Shot.png",
  },
  {
    name: "Aminu Abdulwaheed",
    role: "Software Engineer",
  },
  {
    name: "Adekunle Taofiq",
    role: "Hardware Engineer",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export function Team() {
  return (
    <Section id="team" className="bg-white">
      <Container>
        <FadeIn className="max-w-3xl mb-16 md:mb-20">
          <div className="section-label text-royal mb-6">
            <span>05</span>
            <span className="h-px w-10 bg-royal/40" />
            The Team
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1.08] mb-6">
            The people building the future of resilience.
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            A dedicated team of engineers and innovators building climate
            resilience technology from within the communities most at risk.
          </p>
        </FadeIn>

        <ScrollRow className="gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 0.1} className="min-w-[60%] snap-start sm:min-w-0">
              <div className="border-t border-line pt-8">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    width={160}
                    height={160}
                    className="mb-6 h-40 w-40 rounded-full object-cover object-top border border-line"
                  />
                ) : (
                  <div className="mb-6 flex h-40 w-40 items-center justify-center rounded-full bg-navy">
                    <span className="font-serif text-4xl text-white">
                      {initials(member.name)}
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-semibold text-navy mb-1">
                  {member.name}
                </h3>
                {member.role && (
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-royal">
                    {member.role}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </ScrollRow>
      </Container>
    </Section>
  );
}
