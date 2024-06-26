import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import Providers from "./provides";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "e-Commerce",
  description: "Generated by Waqas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100`}>
        <div className="max-w-[90%] mx-auto">
          <Providers >
           <Navbar /> {children} <Footer />
           </Providers> 
        </div>
      </body>
    </html>
  );
}
