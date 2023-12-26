import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SideMenu } from "@/components";
import Vaul from "@/components/Vaul";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex flex-col md:flex-row h-full">
          <SideMenu />
          <Vaul />
          <Suspense fallback={<Loading />}>
            <div className="max-w-7xl mx-auto lg:pl-72 xl:pl-80">{children}</div>
            <Analytics />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
