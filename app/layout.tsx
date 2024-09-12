import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import ReactQueryClientProvider from "@/context/ReactQueryClientProvider";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

// Definindo a fonte do Google Fonts
const outfit = Outfit({ subsets: ["latin"] });

// Metadados para SEO
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
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3470054444155641" crossOrigin="anonymous"></script>

        {/* Google Analytics */}
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
        
        {/* Script para Native Banner */}
        <Script
          async
          data-cfasync="false"
          src="//pl24337754.cpmrevenuegate.com/9f349764774e7f5ad334421d3781f0eb/invoke.js"
        />
      </head>
      <body className={`${outfit.className} flex flex-col min-h-screen justify-between bg-CustomAntiqueWhite dark:bg-CustomCharcoal transition-colors duration-1000`}>
        <ReactQueryClientProvider>
          {/* Cabeçalho global */}
          <Header/>
          
          {/* Conteúdo dinâmico */}
          {children}

          {/* Contêiner do Native Banner */}
          <div id="container-9f349764774e7f5ad334421d3781f0eb"></div>

          {/* Rodapé global */}
          <Footer/>
        </ReactQueryClientProvider>

        {/* Analytics da Vercel */}
        <Analytics />
      </body>
    </html>
  );
