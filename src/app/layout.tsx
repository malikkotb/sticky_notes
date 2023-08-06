"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import Sidebar from "./components/Sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400']
});

// Any code defined in RootLayout will be displayed on every single page

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1 pt-12 pl-10 m-12">{children}</div>
        </div>

      </body>
    </html>
  );
}
