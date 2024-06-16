import React from "react";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "../styles/globals.css";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folha de Pagamento",
  description: "Folha de Pagamento"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-right" />
        <div className="flex">
          <div className="flex-1 bg-[color:var(--bgSoft)] p-5 min-h-screen">
            <Sidebar />
          </div>

          <div className="flex-[4] p-5">
            <Navbar />
            {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
