"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { TECH_TABS, groupsForTab, type TechTab } from "@/lib/tech-stack";

const ACTIVE_TAB =
  "text-ink after:absolute after:-bottom-[13px] after:left-0 after:h-0.5 after:w-full after:bg-accent after:content-['']";

export function TechStack() {
  const [activeTab, setActiveTab] = useState<TechTab>("all");

  return (
    <section id="skills" className="mx-auto max-w-[1200px] px-5 py-[60px] md:px-10 md:py-[100px]">
      <SectionHeading
        number="03"
        label="Skills"
        title={
          <>
            My tech stack, <span className="text-accent">used on real briefs.</span>
          </>
        }
      >
        <div className="rounded-2xl border border-line bg-surface p-5">
          <p className="text-[0.95rem] italic leading-[1.4] text-ink">
            &quot;Technology is best when it brings people together&quot;
          </p>
          <span className="mt-3 block text-[0.8rem] text-muted">– Matt Mullenweg</span>
        </div>
      </SectionHeading>

      <div className="mb-10 flex gap-4 overflow-x-auto border-b border-line pb-3">
        {TECH_TABS.map(({ tab, label }) => (
          <button
            key={tab}
            className={`relative shrink-0 whitespace-nowrap px-2 py-1 text-base font-medium ${
              activeTab === tab ? ACTIVE_TAB : "text-muted"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        {groupsForTab(activeTab).map((group) => (
          <div key={group.category} className="mb-8">
            <h3 className="mb-4 text-[0.85rem] font-bold uppercase tracking-[0.1em] text-muted">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="inline-flex cursor-default items-center gap-2.5 rounded-[30px] border border-line bg-surface px-4 py-2 text-[0.95rem] font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                >
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="h-[18px] w-[18px] object-contain"
                    />
                  )}
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
