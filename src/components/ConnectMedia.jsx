"use client";

import { Links } from "@/lib/constants";
import { TbShare3 } from "react-icons/tb";

export function ConnectMedia() {
  return (
    <nav className="flex items-center justify-center px-3">
      <ul className="flex flex-col items-start justify-start border-blue-900 gap-y-3 w-full my-4">
        {Links.map((item) => (
          <li className="w-full" key={item.id}>
            <a
              href={item.url}
              className="flex h-10 justify-between items-center text-[#111827] dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-400/80 hover:rounded-md"
            >
              <div className="flex justify-center items-center py-2 mx-2 gap-x-2 font-medium">
                <div>{item.icon}</div>
                <div className="font-medium">{item.title}</div>
              </div>
              <div className="flex justify-center items-center h-5 px-3 rounded-md">
                <TbShare3 size={16} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
