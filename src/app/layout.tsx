import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
