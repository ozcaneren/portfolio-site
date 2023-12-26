import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { AppHeader } from "@/components/Header";
import { AppFooter } from "@/components/Footer";
import { SideMenu } from "@/components";
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
        <div className="flex flex-row h-full">
          <SideMenu />
          <Suspense fallback={<Loading />}>
            <div className="max-w-7xl mx-auto lg:pl-60 xl:pl-72">{children}</div>
            <Analytics />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
