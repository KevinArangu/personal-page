import Heads from "@/components/Heads";
import { AppProvider } from "@/context/AppContext";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heads />
      <AppProvider>
        <Component {...pageProps} />
        <Analytics />
      </AppProvider>
    </>
  );
}
