import "./globals.css";
import { AppHeader } from "@/components/Header";
import { AppFooter } from "@/components/Footer";

export const metadata = {
  title: "Eren Ozcan",
  description: "Eren Ozcan is a software developer based in Mugla, Turkey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F6F5F0]">
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
