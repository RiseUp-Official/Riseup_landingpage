import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "RiseUp - Transform Your Life in 66 Days",
  description:
    "Build habits, stay motivated, track progress, and level up every day with RiseUp. Your ultimate habit-building and productivity app.",
  keywords: [
    "habits",
    "productivity",
    "self-improvement",
    "mindfulness",
    "habit tracker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
