"use client"

import { WelcomeSection } from "@/app/sections/introduction";
import { AboutSection } from "@/app/sections/about";
import { ProjectSection } from "./sections/project";

export default function Page() {
  return (
    <div className="px-4">
      {/* <WelcomeSection />  */}
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
