"use client";

import { Projects } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { CgDetailsLess } from "react-icons/cg";

export const AllProjects = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.values(Projects).map((project) => (
          <div
            className="rounded-lg border border-[#084CCF]/30 dark:border-gray-200/20 bg-white dark:bg-zinc-700 p-4 text-sm focus:outline-none"
            key={project.repoUrl}
          >
            <div className="mb-2 flex items-center gap-3">
              <div
                onClick={() => router.push(`projects/${project.id}`)}
                className="flex items-center gap-1 cursor-pointer truncate font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500 dark:hover:text-pink-300"
              >
                {project.title}
                <span>
                  <CgDetailsLess size={20} />
                </span>
              </div>
              <div
                className={`relative inline-block select-none whitespace-nowrap rounded-full ${
                  project.repoVisibility === "Public"
                    ? "bg-purple-500"
                    : project.repoVisibility === "Private"
                    ? "bg-emerald-600"
                    : "bg-purple-500"
                } py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white`}
              >
                <div className="mt-px">{project.repoVisibility}</div>
              </div>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 dark:text-gray-300 antialiased">
              {project.description}
            </p>
            <div className="mt-4 flex items-center gap-5">
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                <p className="block font-sans text-xs font-normal text-gray-700 dark:text-gray-300 antialiased">
                  {project.techStack}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
