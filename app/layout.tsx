import type { Metadata } from "next";
import { Albert_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/Footer";
import  type  { LayoutRootProps } from "@/app/types";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "PrintForge",
  description: "3D printing platform",
};

export default function RootLayout({
  children,
}: LayoutRootProps) {
  return (
    <html lang="en">
      <body className={`${albertSans.className} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
