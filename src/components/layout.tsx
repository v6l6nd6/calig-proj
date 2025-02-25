import React, { ReactNode } from "react";
import Head from "next/head";
import { HeaderComponent } from "./header";
import { FooterComponent } from "./footer";


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
 <div>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <HeaderComponent />
        <main className="flex-grow mt-[13vw] ">{children}</main>
        <FooterComponent />
      </div>
      </div>
  );
}
