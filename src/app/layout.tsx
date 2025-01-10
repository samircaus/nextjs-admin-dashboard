"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import Script from 'next/script'


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* <Script id="launch" strategy="beforeInteractive" src="https://assets.adobedtm.com/6a203c8a0ff8/cc2e28cff2ef/launch-7be2e2d66423-development.js" />  */}
        <script id="targetGlobalSettings" async src="config.js"/>
        <script id="launch"  async src="https://assets.adobedtm.com/6a203c8a0ff8/cc2e28cff2ef/launch-7be2e2d66423-development.js"/>
      </head>
      <body suppressHydrationWarning={true}>
        <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div>
      </body>
    </html>
  );
}
