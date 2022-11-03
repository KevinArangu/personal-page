import type { AppProps } from "next/app";
import Heads from "@/components/Heads";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heads />
      <Component {...pageProps} />
    </>
  );
}
