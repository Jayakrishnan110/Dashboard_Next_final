import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
// import { Avatar } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-slate-100 h-8">
          <img
            className="h-6 w-fit p-1 mt-1 ml-2"
            src="/google-logo-9834.png"
            alt="Logo"
          />
          {/* <Avatar showFallback src='https://images.unsplash.com/broken' className="h-8 w-8"/> */}
        </div>
        <div className="flex h-screen w-full bg-white-200 flex-auto">
          <Sidebar />
          <div className="flex w-full h-full ml-34 p-2">{children}</div>
        </div>
      </body>
    </html>
  );
}