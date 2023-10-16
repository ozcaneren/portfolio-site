import React from "react";

const Breadcrumb = () => {
  return (
    <div>
      <div class="flex items-center justify-center from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br">
        <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
          <h1 class="font-mono font-bold text-purple-900 text-lg leading-tight border-b pb-4">
            Tailwind CSS Breadcrumb
          </h1>
          <div class="pt-8">
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
