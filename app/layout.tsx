import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "HR Management Alight",
  description: "Alight Human Resource Management Platform",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '---font-poppins'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
