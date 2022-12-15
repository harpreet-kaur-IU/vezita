import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGTPA5a9Z0p_9WMrmgaJDsQMggDn0-XY0&libraries=places"></script> */}
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB_0hRUueN2OWUMFuwj6mow6kQc-O72LUo&libraries=places" strategy="beforeInteractive"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
  )
}