import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "My Next App Templete",
  description: "React開発環境の構築",
  // viewport:'width=device-width,initial-scale=1' フレームワークで出力される
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
