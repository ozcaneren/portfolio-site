import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { AppHeader } from "@/components/Header";
import { AppFooter } from "@/components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F6F5F0]">
        <AppHeader />
        <Suspense fallback={<Loading />}>
          {children}
          <Analytics />
        </Suspense>
        <AppFooter />
      </body>
    </html>
  );
}
