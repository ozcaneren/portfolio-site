"use client";

import { Drawer } from "vaul";
import Link from "next/link";
import Image from "next/image";
import { TfiAnchor } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { MdOutlinePushPin } from "react-icons/md";
import { PiVault } from "react-icons/pi";
import { ConnectMedia } from "./ConnectMedia";

function Vaul() {
  return (
    <div className="block md:hidden bg-white border-b border-gray-200 w-full">
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className="flex justify-start items-center h-12 mx-4 gap-x-2">
            <PiVault size={24} />
            <span className="text-center">{"Eren Ozcan"}</span>
          </button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-zinc-100 flex flex-col rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0">
            <div className="p-4 bg-white rounded-t-[10px] flex-1">
              <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
              <div className="max-w-md mx-auto">
                <div className="">
                  <div className="">
                    {/* Head Section */}
                    <div className="flex items-center justify-left my-1 px-5 h-16">
                      <Image
                        src="https://i.hizliresim.com/6voiw7b.jpg"
                        width={40}
                        height={40}
                        className="rounded-full object-cover object-center w-[45px] h-[45px]"
                        alt="avatar"
                      />
                      <div className="mx-2">
                        <h1 className="font-medium">Eren Ozcan</h1>
                        <p className="text-xs text-gray-800">
                          Full-Stack Developer
                        </p>
                      </div>
                    </div>
                    {/* Routes */}
                    <div className="flex items-center justify-center px-3">
                      <ul className="flex flex-col items-start justify-start border-blue-900 gap-y-3 w-full my-4">
                        <li className="w-full">
                          <Drawer.Trigger asChild>
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
                          </Drawer.Trigger>
                        </li>
                        <li className="w-full">
                          <Drawer.Trigger asChild>
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
                          </Drawer.Trigger>
                        </li>
                        <li className="w-full">
                          <Drawer.Trigger asChild>
                            <Link
                              href="/bookmarks"
                              className="flex h-8 justify-between items-center text-sm text-gray-800 hover:bg-gray-200 hover:rounded-md"
                            >
                              <div className="flex justify-center items-center mx-2">
                                <div>
                                  <MdOutlinePushPin size={16} />
                                </div>
                                <div className="font-medium ml-2">
                                  Bookmarks
                                </div>
                              </div>
                              <div className="mx-2 bg-gray-300 flex justify-center items-center h-5 px-2 rounded-md">
                                3
                              </div>
                            </Link>
                          </Drawer.Trigger>
                        </li>
                      </ul>
                    </div>
                    {/* Divider */}
                    <div className="border mx-6 my-1"></div>
                    {/* Social */}
                    <ConnectMedia />
                  </div>
                </div>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
}

export default Vaul;
