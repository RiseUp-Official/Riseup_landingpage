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
    "Join the waitlist for RiseUp - the #1 self-improvement app. Build habits, stay motivated, and transform your life in 66 days.",
  keywords: [
    "habits",
    "productivity",
    "self-improvement",
    "mindfulness",
    "habit tracker",
    "66 days challenge",
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
