import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neski",
  description: "Neski transforms rental management for hostels and apartments in Sri Lanka.",
  icons: {
    icon: [
      { url: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-12.png" },
    ],
    shortcut: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-12.png",
    apple: "https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-12.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-12.png" sizes="any" />
        <link rel="apple-touch-icon" href="https://ik.imagekit.io/qetpsnccs/Neski/Untitled%20design-12.png" />
      </head>
      <body className={outfit.variable}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
