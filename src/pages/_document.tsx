import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="max-h-screen overflow-hidden relative dark:bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
