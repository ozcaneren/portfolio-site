"use client";

import { Projects } from "@/lib/constants";
import { useRouter } from "next/navigation";
import { CgDetailsLess } from "react-icons/cg";

export const AllProjects = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
        {Object.values(Projects).map((project) => (
          <div
            key={project.repoUrl}
            className="w-full h-[180px] px-2 py-1 border border-[#084CCF]/30 dark:border-gray-200/30 bg-white dark:bg-[#27272A] rounded-lg"
          >
            <div className="flex flex-col w-full h-full">
              <div className="h-1/5 flex justify-left items-center border-b border-solid border-black/40 dark:border-white/50">
                <div className="w-3/4 h-full flex justify-start items-center">
                  <span className="text-zinc-800 dark:text-gray-100 text-base font-medium">
                    {project.title}
                  </span>
                </div>
                <div className="w-1/4 h-full flex justify-end items-center">
                  <span
                    onClick={() => router.push(`projects/${project.id}`)}
                    className="cursor-pointer text-sm text-gray-600 dark:text-gray-300"
                  >
                    Details{"->"}
                  </span>
                </div>
              </div>
              <div className="h-3/5 flex justify-left items-start mt-2">
                <p className="text-zinc-700 font-medium dark:text-gray-200 text-sm">
                  {project.description}
                </p>
              </div>
              <div className="h-1/5 flex flex-row items-center">
                <div className="w-full h-full flex justify-start items-center">
                  <div className="flex justify-start items-center">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 dark:bg-cyan-500 animate-pulse"></span>
                    <div className="flex items-center mx-1">
                      <p className="block text-[13px] font-medium text-gray-700 dark:text-gray-300">
                        {project.techStack}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
