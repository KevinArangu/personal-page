import type { AppProps } from "next/app";
import Heads from "@/components/Heads";
import "@/styles/globals.css";
import { AppProvider } from "@/context/AppContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Heads />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
