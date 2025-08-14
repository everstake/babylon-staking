import type { Metadata } from "next";
import { twJoin } from "tailwind-merge";

import { Network } from "@/app/types/network";
import { network } from "@/config/network/btc";

import MetaTags from "./components/Meta/MetaTags";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Bitcoin (BTC) Staking: Stake BTC on Babylon | Everstake",
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <MetaTags />
      </head>
      <body className="font-sans">
        <Providers>
          <div
            className={twJoin(
              `relative h-full min-h-svh w-full`,
              network === Network.MAINNET
                ? "main-app-mainnet"
                : "main-app-testnet",
              "bg-primary-main",
            )}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
