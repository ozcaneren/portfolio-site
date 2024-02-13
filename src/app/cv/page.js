"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

export default function Page() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <section className="py-8 md:py-10 px-4 md:px-3 xl:px-0">
      <div className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          CV
        </h1>
        <div className="pt-10 pb-16">
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <div className="">
              <Viewer
                fileUrl="/ErenOzcanCV.pdf"
                plugins={[defaultLayoutPluginInstance]}
                
              />
            </div>
          </Worker>
        </div>
      </div>
    </section>
  );
}
