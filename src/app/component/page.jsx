import React from "react";
import { DesignComponents } from "@/components/design-components";


const page = () => {
  return (
    <div className="">
      <h1 className="text-2xl mb-6 leading-slacker text-sky-800">
        On this page, you will see bookmark-like components that may be useful.
      </h1>
      <div className="">
        <DesignComponents />
      </div>
    </div>
  );
};

export default page;
