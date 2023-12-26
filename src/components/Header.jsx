"use client";

import { ConnectMedia } from "@/components";

export function AppHeader() {
  return (
    <header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center gap-3">
          <div className="flex items-center gap-5">
            <ConnectMedia />
          </div>
        </div>
      </div>
    </header>
  );
}
