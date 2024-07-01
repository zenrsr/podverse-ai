import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import ConvexClientProvider from "../../providers/ConvexClerkProvider";
import AudioProvider from "../../providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podverse.ai",
  description: "Generated podcasts by podverse.ai",
  icons: {
    icon: "/icons/logo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <AudioProvider>
          <body className={`${manrope.className} `}>
            {children}
            <Analytics />
          </body>
        </AudioProvider>
      </html>
    </ConvexClientProvider>
  );
}
