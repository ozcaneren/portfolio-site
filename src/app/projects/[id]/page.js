import { Projects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { IoMdLink } from "react-icons/io";

const Detail = ({ params }) => {
  const project = Projects[params.id];

  return (
    <div className="min-h-screen py-8 md:py-10 px-4 md:px-3 xl:px-0">
      <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
        {project.title}
      </h1>
      <div className="pt-10 pb-16 flex flex-col md:flex-row gap-y-6 md:gap-x-6">
        <div className="">
          <Image
            width={300}
            height={300}
            src={project.image}
            alt={project.title}
            className="w-[350px] h-[350px] md:w-[400px] md:h-[400px] rounded-2xl"
          />
        </div>
        <div className="w-full flex-1">
          <p className="font-normal text-md md:text-lg">
            <span className="font-medium">Description:</span>
            {project.description}
          </p>
          <span className="">
            <p className="font-normal text-md md:text-lg">
              <span className="font-medium">Tech-Stack:</span>
              {project.techStack}
            </p>
            <p className="font-normal text-md md:text-lg">
              <span className="font-medium">Repo Visibility:</span>
              {project.repoVisibility}
            </p>
            {project.repoVisibility === "Public" && (
              <p className="font-medium text-md md:text-lg">
                <Link href={project.repoUrl} className="flex items-center gap-1">
                  Repository
                  <div className="">
                    <IoMdLink size={20} />
                  </div>
                </Link>
              </p>
            )}
            {project.demoActive && (
              <p className="font-medium text-md md:text-lg">
                <Link href={project.demoUrl} className="flex items-center gap-1">
                  Demo
                  <div className="">
                    <IoMdLink size={20} />
                  </div>
                </Link>
              </p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Detail;
