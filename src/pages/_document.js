import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Questrial&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles/Home.module.css" />
        <link rel="stylesheet" href="styles/globals.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
