import Link from "next/link";
import { Projects } from "@/lib/constants";

export const GithubProjects = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-4">
        {Object.values(Projects).map((project) => (
          <div
            key={project.url}
            className="max-w-[26rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
          >
            <div className="mb-2 flex items-center gap-3">
              <Link
                href={project.url}
                className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
              >
                {project.title}
              </Link>
              <div className={`relative inline-block select-none whitespace-nowrap rounded-full ${project.visibility === 'Public' ? 'bg-purple-500' : project.visibility === 'Private' ? 'bg-emerald-600' : 'bg-purple-500'} py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white`}>
                <div className="mt-px">{project.visibility}</div>
              </div>
            </div>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
              {project.description}
            </p>
            <div className="mt-4 flex items-center gap-5">
              <div className="flex items-center gap-1">
                <span className="h-3 w-3 rounded-full bg-blue-400"></span>
                <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
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
