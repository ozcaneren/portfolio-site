"use client";

import { GithubProjects } from "@/components";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 md:px-3 xl:px-0">
      <section id="about" className="py-8 md:py-10">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          About me
        </h1>
        <div className="pt-10 pb-8 max-w-5xl flex flex-col gap-y-3">
          <div className="text-lg text-black dark:text-white leading-relaxed">
            <p>
              Hi, I'm Eren. I'm a full-stack developer, heavily focused on
              front-end development. Currently, I'm working on several projects,
              including a personal website, among other things.
            </p>
            <p className="mt-2">
              I'm a student at Mugla Sitki Kocman University, studying Business.
              I'm currently in my second year. I've been self-teaching
              development for about a year now. Currently, I'm diving into
              Next.js, and I'm thoroughly enjoying it. I'm also picking up
              TypeScript. While I'm dabbling in Ruby on Rails as well, my main
              focus is on the current/modern technologies.
            </p>
            <p className="mt-2">
              <span className="font-medium">Tech Stack:</span> React, Next.js,
              TailwindCSS, Node.js, Express.js, MongoDB, and a few others.
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          Projects
        </h1>
        <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-y-3">
          <div className="text-xl font-light leading-relaxed">
            <GithubProjects />
            <div className="py-4">
              <Link href="/projects">
                <span className="font-medium text-base text-[#084CCF] dark:text-[#4577d4]">
                  See more
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
