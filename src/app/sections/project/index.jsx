"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider, GithubProjects } from "@/components";

export function ProjectSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="projects" className="">
        <HeadingDivider title="Projects" />
        <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
          <div
            tabIndex="0"
            ref={ref}
            className="text-xl font-light leading-relaxed"
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <GithubProjects />
            <div className="py-4">
              <Link href="/projects">
                <span className="font-medium text-base text-[#084CCF]">
                  See more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
