"use client";

export function WelcomeSection() {
  return (
    <section className="py-8 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr] lg:grid-cols-[1fr_0.7fr] gap-4 items-center">
        <div className="">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">
            <p>
              Hi, I&apos;m{" "}
              <mark className="bg-transparent text-[#084CCF]">Eren</mark> a{" "}
              <mark className="bg-transparent text-[#084CCF]">passionate</mark>{" "}
              software developer.
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
}
