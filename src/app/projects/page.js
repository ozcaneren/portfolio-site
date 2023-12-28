import { HeadingDivider } from "@/components";
import { AllProjects } from "@/components/AllProjects";

export default function Page() {
  return (
    <section className="py-8 md:py-10">
      <div className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332]">
          All Projects
        </h1>
        <div className="pt-10 pb-16 flex flex-col">
          <AllProjects />
        </div>
      </div>
    </section>
  );
}
