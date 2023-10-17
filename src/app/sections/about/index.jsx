"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "@/components/HeadingDivider";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LazyMotion features={domAnimation}>
      <section id="about" className="">
        <HeadingDivider title="About me" />
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
              the way, I discovered React and began to learn it. I have
              developed several projects from scratch to an intermediate level
              using React and Node. After that, I decided to transition to
              Next.js, and I am currently learning it in my career. (This
              website is one of my learning stages).
            </p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
