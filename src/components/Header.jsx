"use client";

import { Logo } from "@/components/Logo";
// import { Menu } from "@/components/Menu";
import { ConnectMedia } from "@/components/ConnectMedia";

export function AppHeader() {
  return (
    <header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center gap-3">
          <Logo />
          {/* <Menu /> */}
          <div className="flex items-center gap-5">
            <ConnectMedia />
          </div>
        </div>
      </div>
    </header>
  );
}
