"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

// Any code defined in RootLayout will be displayed on every single page

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-4 m-6">{children}</div>
        </div>

      </body>
    </html>
  );
}
