"use client";

import { Links } from "@/lib/constants";
import { TbShare3 } from "react-icons/tb";

export function ConnectMedia() {
  return (
    <nav className="flex items-center justify-center px-4">
      <ul className="flex flex-col items-start justify-start border-blue-900 gap-y-3 w-full my-4">
        {Links.map((item) => (
          <li className="w-full" key={item.id}>
            <a
              href={item.url}
              className="flex h-8 justify-between items-center text-sm text-gray-800 hover:bg-gray-200 hover:rounded-md"
            >
              <div className="flex justify-center items-center mx-2">
                <div>{item.icon}</div>
                <div className="font-medium ml-2">{item.title}</div>
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
