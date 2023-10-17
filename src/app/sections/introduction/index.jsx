"use client";

import { useEffect, useState, useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";

export function WelcomeSection() {
  const ref = useRef(null);
  const introRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  let [count, setCount] = useState(0);
  const [text] = useState([
    "design modern UI",
    "develop web apps",
  ]);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount(count + 1);

      if (count === 2) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <LazyMotion features={domAnimation}>
      <section id="intro" className="py-8 md:py-10" ref={introRef}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
          <div className="py-5 md:py-10">
            <h1
              tabIndex="0"
              ref={ref}
              className="text-2xl md:text-4xl xl:text-5xl font-bold"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <p>
                Hi, I&apos;m <mark className="bg-transparent text-[#084CCF]">Eren</mark> a <mark className="bg-transparent text-[#084CCF]">passionate</mark>{" "}
                software developer.
              </p>
            </h1>

            <div className="mt-6 relative flex flex-col overflow-hidden">
              <p
                ref={ref}
                className="text-[17px] md:text-2xl transform-none opacity-100"
                style={{
                  transform: isInView ? "none" : "translateX(-200px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                I
                <span
                  className="absolute flex flex-col transition-all duration-500 ease-in-expo"
                  style={{
                    top:
                      count === 0
                        ? "0"
                        : count === 1
                        ? "-100%"
                        : count === 2
                        ? "-200%"
                        // : count === 3
                        // ? "-300%"
                        : "0",
                    left: "13px",
                  }}
                >
                  {text.map((element) => (
                    <TextElement key={element} element={element} />
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}

function TextElement({ element }) {
  const firstWord = <b>{element.split(" ").at(0)}</b>;
  const restWords = element.split(" ").slice(1).join(" ");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span
      tabIndex="0"
      ref={ref}
      className="text-[17px] md:text-2xl"
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      {firstWord} {restWords}
    </span>
  );
}
