import { HeadingDivider } from "@/components";
import { AllProjects } from "@/components/AllProjects";

export default function Page() {
  return (
    <section className="py-8 md:py-10">
      <div className="">
        <HeadingDivider title="Projects" />
        <div className="pt-10 pb-16 max-w-5xl flex flex-col">
          <div className="text-xl font-light leading-relaxed">
            <AllProjects />
          </div>
        </div>
      </div>
    </section>
  );
}
