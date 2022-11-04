import Head from "next/head";

export default function Heads() {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      <meta property="og:locale" content="en_US" />
      {/* <meta property="og:url" content="https://atlas.tailwindmade.com/" /> */}
      <meta
        name="description"
        content="Hi! my name is Kevin Arangu, i live in Venezuela and this is my developer portfolio, welcome!."
      />
      <link rel="icon" type="image/png" href="favicon.png" />
      <meta property="og:image" content="favicon.png" />
      <meta property="og:site_name" content="Kevin Arangu" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* <meta name="twitter:site" content="@tailwindmade" /> */}
      <link
        crossOrigin="crossorigin"
        href="https://fonts.gstatic.com"
        rel="preconnect"
      />
      <link
        as="style"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="preload"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
