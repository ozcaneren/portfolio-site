import "./globals.css";

import { SideMenu } from "@/components/side-menu";
import { MenuContent } from "@/components/menu-content";

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  
  return (
    <html className="" lang="en">
      <body className="overflow-auto text-base text-gray-700">
        <main className="">
          <div className="lg:flex">
            <SideMenu className="hidden lg:flex">
              <MenuContent />
            </SideMenu>
            <div className="flex flex-1">
              <div className="w-full px-6 pt-8 lg:px-8 lg:pt-24">
                <div className="mx-auto w-full lg:max-w-3xl">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
