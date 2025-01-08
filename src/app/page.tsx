import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Script from 'next/script'

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js Home for TailAdmin Dashboard Template",
};

export default function Home() {
  return (
    <>
      <script id="targetGlobalSettings"
          dangerouslySetInnerHTML={{
            __html: `
              window.targetGlobalSettings = {
                cookieDomain: "free-nextjs-admin-dashboard-h6echej2s-samircaus-projects.vercel.app"
              }
            `,
          }}
        />

      {/* <Script src="https://assets.adobedtm.com/6a203c8a0ff8/cc2e28cff2ef/launch-7be2e2d66423-development.js" strategy="beforeInteractive"/> */}
      <Script id="loaded">
        {`console.log("loaded")`}
      </Script>
      <script id="dtm" async src="https://assets.adobedtm.com/6a203c8a0ff8/cc2e28cff2ef/launch-7be2e2d66423-development.js"/>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
