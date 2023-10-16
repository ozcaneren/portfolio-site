import "./globals.css";

import { SideMenu } from "@/components/side-menu";
import { MenuContent } from "@/components/menu-content";

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html className="overflow-hidden scroll-smooth antialiased" lang="en">
      <body className="font-sans text-base text-gray-700">
        <main>
          <div className="lg:flex">
            <SideMenu className="relative hidden lg:flex">
              <MenuContent />
            </SideMenu>
            <div className="flex flex-1">
              <div className="w-full px-6 pb-8 pt-8 lg:px-8 lg:pb-16 lg:pt-24">
                <div className="mx-auto w-full lg:mb-0 lg:max-w-3xl">
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
