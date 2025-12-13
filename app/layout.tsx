import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import getProductList from "@/lib/api/product/getProductList";

import { Header } from "@/components/common/header";

import "@/styles/globals.scss";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "D.Atelier - 프리미엄 폐달보드 & 커스텀 금속 제품",
    template: "%s | D.Atelier",
  },
  description:
    "기구 설계 전문가가 제작하는 프리미엄 폐달보드와 다양한 커스텀 금속 제품을 만나보세요. 고품질의 맞춤형 솔루션을 제공합니다.",
  keywords: [
    "폐달보드",
    "페달보드",
    "커스텀 금속 제품",
    "기구 설계",
    "금속 가공",
    "악기 액세서리",
    "프리미엄 폐달보드",
    "맞춤 제작",
  ],
  authors: [{ name: "D.Atelier" }],
  creator: "D.Atelier",
  publisher: "D.Atelier",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    siteName: "D.Atelier",
    title: "D.Atelier - 프리미엄 폐달보드 & 커스텀 금속 제품",
    description:
      "기구 설계 전문가가 제작하는 프리미엄 폐달보드와 다양한 커스텀 금속 제품을 만나보세요. 고품질의 맞춤형 솔루션을 제공합니다.",
    images: [
      {
        url: "/pedal.png",
        width: 1200,
        height: 630,
        alt: "D.Atelier 폐달보드",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "D.Atelier - 프리미엄 폐달보드 & 커스텀 금속 제품",
    description:
      "기구 설계 전문가가 제작하는 프리미엄 폐달보드와 다양한 커스텀 금속 제품을 만나보세요.",
    // images: ["/pedal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const productList = await getProductList();

  if (!productList.success) {
    throw new Error("Product list not found");
  }

  return (
    <html lang="ko">
      <body className={`${notoSansKR.variable}`}>
        <Header productList={productList.data} />
        {children}
      </body>
    </html>
  );
}
