import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <div class="flex items-center w-[375px] justify-center">
        <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <div class="">
            <nav aria-label="breadcrumb">
              <ol class="flex space-x-2">
                <li>
                  <a
                    href="#"
                    class="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
                  >
                    Library
                  </a>
                </li>
                <li class="text-purple-700" aria-current="page">
                  Data
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
