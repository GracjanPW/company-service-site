import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";


export const metadata: Metadata = {
  title: "FusionWorks - Engineering & Web Solutions",
  description: "Providing high-quality engineering, web development, and consultancy services."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-neutral-300">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}