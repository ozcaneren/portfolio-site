"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col xl:flex-row gap-12">
      <div className="w-full xl:w-1/2">
        <section className="flex flex-col items-center xl:items-start mb-12">
          <img
            src="/eren.jpg"
            alt=""
            className="w-48 h-48 rounded-full mb-6 object-cover"
          />
          <h1 className="ml-1 text-4xl font-bold mb-4">Eren Ozcan</h1>
          <div className="ml-1 max-w-3xl flex flex-col gap-y-3">
            <div className="text-lg text-center xl:text-left text-black leading-relaxed">
              <p>
                Hi, I'm Eren. I'm a full-stack developer, heavily focused on
                front-end development. Currently, I'm working on several
                projects, including a personal website, among other things.
              </p>
              <p className="mt-2">
                I'm a student at Muğla Sıtkı Koçman University, studying
                Business. I'm currently in my third year. I've been
                self-teaching development for about a year now. I'm diving into
                Next.js, and I'm thoroughly enjoying it. I'm also picking up
                TypeScript. While I'm dabbling in Ruby on Rails as well, my main
                focus is on modern technologies.
              </p>
              <p className="mt-2">
                <span className="font-medium">Tech Stack:</span> React, Next.js,
                TailwindCSS, Node.js, Express.js, MongoDB, and a few others.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full xl:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="w-full xl:w-1/2 grid grid-cols-2 gap-4">
            <div className="h-48 flex bg-gray-200 border border-gray-200 rounded-3xl">
              <div className="flex flex-col items-start justify-center p-4 md:px-4 md:py-0">
                <img src="githubicon.png" alt="" className="h-12" />
                <h1 className="mt-3">Github</h1>
                <h3 className="text-gray-700">@ozcaneren</h3>
                <Link href="https://github.com/ozcaneren">
                  <button className="cursor-pointer bg-[#666769] text-white text-sm mt-4 px-4 py-2 rounded-xl">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-48 flex bg-red-100 border border-gray-200 rounded-3xl">
              <div className="flex flex-col items-start justify-center p-4 md:px-4 md:py-0">
                <img src="instagramicon.png" alt="" className="h-12" />
                <h1 className="mt-3">Instagram</h1>
                <h3 className="text-gray-700">@erenozcan17</h3>
                <Link href="https://www.instagram.com/erenozcan17/">
                  <button className="cursor-pointer bg-[#aa3690] text-white text-sm mt-4 px-4 py-2 rounded-xl">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-48 flex bg-blue-100 border border-gray-200 rounded-3xl">
              <div className="flex flex-col items-start justify-center p-4 md:px-4 md:py-0">
                <img src="linkedinicon.jpg" alt="" className="h-12" />
                <h1 className="mt-3">Linkedin</h1>
                <h3 className="text-gray-700">@eren-ozcan</h3>
                <Link href="https://www.linkedin.com/in/eren-ozcan/">
                  <button className="cursor-pointer bg-[#2e8ec2] text-white text-sm mt-4 px-4 py-2 rounded-xl">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
            <div className="h-48 flex bg-[#d8d8d8] border border-gray-200 rounded-3xl">
              <div className="flex flex-col items-start justify-center p-4 md:px-4 md:py-0">
                <img src="xicon.png" alt="" className="h-12" />
                <h1 className="mt-3">X</h1>
                <h3 className="text-gray-700">@ozcaneren</h3>
                <Link href="https://x.com/erenozcandev">
                  <button className="cursor-pointer bg-gray-500 text-white text-sm mt-4 px-4 py-2 rounded-xl">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <Link href="/resume" className="w-1/2">
              <div className="rounded-3xl flex items-center justify-center border border-gray-200 relative group cursor-pointer">
                <img src="cv.png" alt="" className="h-[400px]" />
                <div className="absolute inset-0 backdrop-blur-[2px] bg-black/10 md:backdrop-blur-sm md:bg-black/20 flex items-center justify-center rounded-3xl transition-all duration-300 group-hover:backdrop-blur-[2px] group-hover:bg-black/10">
                  <span className="text-white text-4xl font-bold">CV</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap gap-4 justify-center items-center">
          <div className="w-full lg:w-[calc(50%-0.5rem)] h-[400px] p-4 border border-gray-200 bg-orange-100 rounded-3xl">
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="w-full flex justify-between gap-2">
                <img src="vite.png" alt="" className="h-12" />
                <h3 className="text-gray-700 font-medium text-sm">Projects</h3>
              </div>
              <h1 className="font-medium text-gray-900 text-xl">
                Ozcan Gida Product Management App
              </h1>
              <div className="mt-4 w-full text-center h-60 bg-gray-200 rounded-xl">
                <Link href="https://ozcangida.vercel.app/">
                  <img
                    src="ozcangida.png"
                    alt=""
                    className="w-full h-full object-contain bg-black rounded-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-0.5rem)] h-[400px] p-4 border border-gray-200 bg-[#f8d6e3] rounded-3xl">
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="w-full flex justify-between gap-2">
                <img src="vercel.png" alt="" className="h-12" />
                <h3 className="text-gray-700 font-medium text-sm">Projects</h3>
              </div>
              <h1 className="font-medium text-gray-900 text-xl">To-do App</h1>
              <div className="mt-4 w-full text-center h-60 bg-gray-200 rounded-xl">
                <Link href="https://todo-app-ozcaneren.vercel.app/">
                  <img
                    src="todo.png"
                    alt=""
                    className="w-full h-full object-contain bg-black rounded-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-0.5rem)] h-[400px] p-4 border border-gray-200 bg-sky-100 rounded-3xl">
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="w-full flex justify-between gap-2">
                <img src="vercel.png" alt="" className="h-12" />
                <h3 className="text-gray-700 font-medium text-sm">Projects</h3>
              </div>
              <h1 className="font-medium text-gray-900 text-xl">
                Alisraff E-commerce Website
              </h1>
              <div className="mt-4 w-full text-center h-60 bg-gray-200 rounded-xl">
                <Link href="https://effective-fiesta-two.vercel.app/">
                  <img
                    src="alisraff.png"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(50%-0.5rem)] h-[400px] p-4 border border-gray-200 bg-fuchsia-100 rounded-3xl">
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="w-full flex justify-between gap-2">
                <img src="vercel.png" alt="" className="h-12" />
                <h3 className="text-gray-700 font-medium text-sm">Projects</h3>
              </div>
              <h1 className="font-medium text-gray-900 text-xl">
                Clone Hotel Website
              </h1>
              <div className="mt-4 w-full text-center h-60 bg-gray-200 rounded-xl">
                <Link href="https://demo-hotel-website-erenozcan.vercel.app/">
                  <img
                    src="hotel.png"
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
