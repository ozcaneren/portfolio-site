import Link from "next/link";
import Image from "next/image";
import { TfiAnchor } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { ConnectMedia } from "./ConnectMedia";

export const SideMenu = () => {
  return (
    <div className="hidden md:fixed md:block h-full lg:w-72 xl:w-80 border-r border-gray-200 bg-[#f3f5f7]">
      <div className="">
        {/* Head Section */}
        <div className="flex items-center justify-left my-1 px-5 h-16">
          <Image
            src="https://cdn.discordapp.com/attachments/1171884068816826371/1189141162817232978/20230525_185754.jpg?ex=659d1502&is=658aa002&hm=b6a8495c628d09030a2d5ccf9ebadbd7b8b3b19bd87e2554fd3db7fe097ae611&"
            width={40}
            height={40}
            className="rounded-full object-cover object-center w-[45px] h-[45px]"
            alt="avatar"
          />
          <div className="mx-2">
            <h1 className="font-medium">Eren Ozcan</h1>
            <p className="text-sm text-gray-800">
              Full-Stack Developer (heavy front)
            </p>
          </div>
        </div>
        {/* Routes */}
        <div className="flex items-center justify-center px-3">
          <ul className="flex flex-col items-start justify-start border-blue-900 gap-y-3 w-full my-4">
            <li className="w-full">
              <Link
                href="/"
                className="flex h-8 justify-between items-center text-sm text-gray-800 hover:bg-gray-200 hover:rounded-md"
              >
                <div className="flex justify-center items-center mx-2">
                  <div>
                    <TfiAnchor size={16} />
                  </div>
                  <div className="font-medium ml-2">Home</div>
                </div>
                <div className="mx-2 bg-gray-300 flex justify-center items-center h-5 px-2 rounded-md">
                  1
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/projects"
                className="flex h-8 justify-between items-center text-sm text-gray-800 hover:bg-gray-200 hover:rounded-md"
              >
                <div className="flex justify-center items-center mx-2">
                  <div>
                    <FaCode size={16} />
                  </div>
                  <div className="font-medium ml-2">Projects</div>
                </div>
                <div className="mx-2 bg-gray-300 flex justify-center items-center h-5 px-2 rounded-md">
                  2
                </div>
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/bookmarks"
                className="flex h-8 justify-between items-center text-sm text-gray-800 hover:bg-gray-200 hover:rounded-md"
              >
                <div className="flex justify-center items-center mx-2">
                  <div>
                    <MdOutlinePushPin size={16} />
                  </div>
                  <div className="font-medium ml-2">Bookmarks</div>
                </div>
                <div className="mx-2 bg-gray-300 flex justify-center items-center h-5 px-2 rounded-md">
                  3
                </div>
              </Link>
            </li>
          </ul>
        </div>
        {/* Divide */}
        <div className="border mx-6 my-1"></div>
        {/* Social Links */}
        <ConnectMedia />
      </div>
    </div>
  );
};
