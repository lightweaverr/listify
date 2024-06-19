import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { NextAuthProvider } from "@/providers/NextAuthProvider";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Listify",
  description: "Make better playlists.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body 
        className={font.className + " h-screen flex flex-col overflow-hidden items-stretch p-2 text-white bg-paper-900"}>
          <Navbar />
          <div className="grid grid-cols-10 gap-2 h-full">
            <Sidebar />
            <div className="flex flex-col col-span-8 rounded-lg bg-paper-700">
              <main className="mx-8 my-4">{children}</main>
            </div>
          </div>
        </body>
      </NextAuthProvider>
    
    </html>
  );
}
