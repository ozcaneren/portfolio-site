"use client";

import { HeadingDivider } from "@/components";

export function AboutSection() {
  return (
    <section id="about" className="">
      <HeadingDivider title="About me" />
      <div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
        <div className="text-xl font-light leading-relaxed">
          <p>
            My name is Eren. I am studying in the Department of Business at
            Mugla Sitki Kocman University.
          </p>
          <p>
            During my high school and university years, I developed a deep
            passion for programming and constantly tried to learn new concepts
            and techniques in this field.
          </p>
          <p className="my-2.5">
            I started my web development career by learning JavaScript. Along
            the way, I discovered React and began to learn it. I have developed
            several projects from scratch to an intermediate level using React
            and Node. After that, I decided to transition to Next.js, and I am
            currently learning it in my career. (This website is one of my
            learning stages).
          </p>
        </div>
      </div>
    </section>
  );
}
