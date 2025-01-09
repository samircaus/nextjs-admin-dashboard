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
      <script id="targetGlobalSettings" async src="config.js"/>
      <script id="dtm" async src="https://assets.adobedtm.com/6a203c8a0ff8/cc2e28cff2ef/launch-7be2e2d66423-development.js"/>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
