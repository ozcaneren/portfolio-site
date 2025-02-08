"use client";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import { useEffect, useState } from "react";
import Link from "next/link";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const Resume = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [scale, setScale] = useState(1.5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale(0.8);
      } else {
        setScale(1.5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/ErenOzcanCV.pdf';
    link.download = 'ErenOzcanCV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <div className="flex justify-between mb-4">
        <Link 
          href="/" 
          className="px-4 py-2 bg-gray-800 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition-colors"
        >
          Back to Home
        </Link>
        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-500 transition-colors"
        >
          Download PDF
        </button>
      </div>

      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="flex-1">
          <Viewer
            fileUrl="/pdf/ErenOzcanCV.pdf"
            plugins={[defaultLayoutPluginInstance]}
            defaultScale={scale}
          />
        </div>
      </Worker>
    </main>
  );
};

export default Resume;
