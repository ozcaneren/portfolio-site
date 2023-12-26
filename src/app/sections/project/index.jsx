"use client";

import Link from "next/link";
import { HeadingDivider, GithubProjects } from "@/components";

export function ProjectSection() {
  return (
    <section id="projects" className="">
      <HeadingDivider title="Projects" />
      <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-y-3">
        <div className="text-xl font-light leading-relaxed">
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
  );
}
