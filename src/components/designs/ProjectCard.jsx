import Link from "next/link";

const ProjectCard = () => {
  return (
    <div>
      <div className="max-w-[26rem] whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
        <div className="mb-2 flex items-center gap-3">
          <Link
            href="/"
            className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors hover:text-pink-500"
          >
            Deneme
          </Link>
          <div className="relative inline-block select-none whitespace-nowrap bg-purple-500 rounded-full py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white">
            <div className="mt-px">Public</div>
          </div>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="mt-4 flex items-center gap-5">
          <div className="flex items-center gap-1">
            <span className="h-3 w-3 rounded-full bg-blue-400"></span>
            <p className="block font-sans text-xs font-normal text-gray-700 antialiased">
              React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
