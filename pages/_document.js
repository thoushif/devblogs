import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>



        </Head>
        <body>
          <Main />
          <NextScript />
          <Script strategy="afterInteractive" src="https://thoushif.dev/script.js"
           />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}
