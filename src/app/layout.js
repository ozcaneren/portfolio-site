import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SideMenu } from "@/components";
import Vaul from "@/components/Vaul";
import { Suspense } from "react";
import Loading from "./loading";
import Provider from "./ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-white dark:bg-zinc-800 flex flex-col md:flex-row h-full">
          <Provider>
            <SideMenu />
            <Vaul />
            <Suspense fallback={<Loading />}>
              <div className="bg-white dark:bg-zinc-800 mx-auto md:max-w-7xl h-full w-full min-h-screen md:mx-auto md:pl-64 xl:pl-80">
                {children}
              </div>
              <Analytics />
            </Suspense>
          </Provider>
        </div>
      </body>
    </html>
  );
}
