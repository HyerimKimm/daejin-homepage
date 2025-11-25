import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "@/styles/globals.scss";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "대진 홈페이지",
  description: "대진이는 이것저것 잘만들어요~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable}`}>{children}</body>
    </html>
  );
}
