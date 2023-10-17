import Link from "next/link";
import { Component } from "@/lib/constants";

export const DesignComponents = () => {
  return (
    <div>
      {Object.values(Component).map((component) => (
        <div
          key={component.component}
          class="px-4 bg-gray-100 mb-8 py-4 rounded-xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 "
        >
          <div class="flex flex-col items-center justify-between w-full lg:flex-row">
            <div class="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div class="max-w-xl mb-6">
                <h2 class="sm:mt-0 mt-6 tracking-tight text-black sm:text-4xl sm:leading-none max-w-lg mb-6"></h2>
                <p class="text-black text-base md:text-lg">
                  {component.title}
                </p>
              </div>
            </div>
            <div className="">
              {component.component}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

