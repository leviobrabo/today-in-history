import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import ReactQueryClientProvider from "@/context/ReactQueryClientProvider";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const outfit = Outfit({subsets: ["latin"]});
export const metadata: Metadata = {
  title: "Today in history",
  description: "Find out what today has to tell us historically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
        <head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-S1ZV637FGY`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-S1ZV637FGY', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </head>
        <body className={`${outfit.className} flex flex-col min-h-screen justify-between bg-CustomAntiqueWhite dark:bg-CustomCharcoal transition-colors duration-1000`}>
          <ReactQueryClientProvider>
            <Header/>
            {children}
            <Footer/>
          </ReactQueryClientProvider>
          <Analytics />
        </body>
      </html>
  );
}
