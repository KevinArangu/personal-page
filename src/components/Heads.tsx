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
      <title>Homepage | Atlas Template</title>
      <meta property="og:title" content="Homepage | Atlas Template" />
      <meta property="og:locale" content="en_US" />
      <link rel="canonical" href="https://atlas.tailwindmade.com/" />
      <meta property="og:url" content="https://atlas.tailwindmade.com/" />
      <meta
        name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
      <meta property="og:site_name" content="Atlas Template" />
      <meta
        property="og:image"
        content="https://atlas.tailwindmade.com/assets/img/social.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@tailwindmade" />
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
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      />
    </Head>
  );
}
