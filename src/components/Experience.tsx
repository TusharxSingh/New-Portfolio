"use client";

import { Section } from "@/components/ui/Section";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experience" title="Work Experience" subtitle="My professional journey so far" className="!py-16 md:!py-20">
      <div className="relative space-y-12 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <TimelineItem key={`${exp.company}-${exp.role}`} experience={exp} index={index} />
        ))}
      </div>
    </Section>
  );
}
