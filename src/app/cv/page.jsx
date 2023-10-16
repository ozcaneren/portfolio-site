import React from "react";
import { Download } from "lucide-react";

const page = () => {
  return (
    <div>
      <h1 className="text-xl mb-6 leading-slacker text-sky-800">
        Cirriculum Vitae
      </h1>
      <p className="flex flex-row gap-x-2 text-lg mb-2 leading-slacker">
        You can access using the link below.
        <a
          href="https://drive.google.com/file/d/1Uq165KKrps_024PawysY1lyEg_YrASNc/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
          className="text-lg leading-slacker rounded text-sky-800"
        >
          <Download />
        </a>
      </p>
    </div>
  );
};

export default page;
