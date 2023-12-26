"use client"

import { WelcomeSection } from "@/app/sections/introduction";
import { AboutSection } from "@/app/sections/about";
import { ProjectSection } from "./sections/project";

export default function Page() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <WelcomeSection /> 
      <AboutSection />
      <ProjectSection />
    </div>
  );
}
