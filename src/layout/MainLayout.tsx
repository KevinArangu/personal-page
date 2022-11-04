import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import type { MainLayoutProps } from "@/types/layouts.types";
import Head from "next/head";

export default function MainLayout({ title, children }: MainLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
      </Head>

      <main className="dark:bg-primary">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
