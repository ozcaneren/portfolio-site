"use client";

import { HeadingDivider } from "@/components";

export function AboutSection() {
  return (
    <section id="about" className="py-8 md:py-10">
      <HeadingDivider title="About me" />
      <div className="pt-10 pb-8 max-w-5xl flex flex-col gap-y-3">
        <div className="text-lg font-light leading-relaxed">
          <p>
            Hi, I'm Eren. I'm a full-stack developer(heavy on the front-end).
            I'm currently working on a few projects, including a personal
            website, and a few other things.
          </p>
          <p className="mt-2">
            I'm a student at the University of Mugla Sitki Kocman, studying
            Business. I'm currently in my second year. I'm a self-taught
            developer, and I've been learning for about 1 years now. I'm
            currently learning Next.js, and I'm loving it so far. I'm also
            learning TypeScript. I'm also learning a bit of Ruby on Rails, but
            I'm not focusing on those as much as I am on the other things.
          </p>
          <p className="mt-2">
            <span className="font-medium">Tech Stack:</span> React, Next.js, TailwindCSS, Node.js, Express.js,
            MongoDB, and a few other things.
          </p>
        </div>
      </div>
    </section>
  );
}
