import type { Metadata } from "next";
import Script from "next/script";
import { Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import { THEME_SCRIPT } from "@/lib/theme";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "shortthai | URL Shortener สำหรับลิงก์สั้นแบบไทย",
  description:
    "shortthai คือระบบ URL shortener สำหรับสร้างลิงก์สั้น จำง่าย ติดตามคลิกได้ และแชร์ได้เร็วขึ้น เหมาะสำหรับธุรกิจ ร้านค้า ครีเอเตอร์ และทีมการตลาดที่ต้องการความเร็ว",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${notoSansThai.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_SCRIPT}
        </Script>
        {children}
      </body>
    </html>
  );
}
