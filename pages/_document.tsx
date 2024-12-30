import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="preload" as="video" href="/videos/surf.mp4" type="video/mp4" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}