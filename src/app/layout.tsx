import React from "react";

import { Inter } from "next/font/google";
import type { Metadata } from "next";

import "../styles/globals.css";
import styles from "../components/dashboard/dashboard.module.css";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Folha de Pagamento",
  description: "Folha de Pagamento"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <Sidebar />
          </div>

          <div className={styles.content}>
            <Navbar />
              {children}
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  )
}
