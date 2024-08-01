"use client";

import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";

import "@react-pdf-viewer/core/lib/styles/index.css";

export default function Home() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-3 xl:px-0">
      <div className="">
        <h1 className="font-extrabold text-2xl md:text-3xl text-[#232332] dark:text-slate-200">
          CV
        </h1>
        <div className="pt-10 pb-16">
          <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              <Viewer fileUrl="ErenOzcanCV.pdf" />
            </Worker>
          </div>
        </div>
      </div>
    </section>
  );
}
