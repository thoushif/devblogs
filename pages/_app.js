import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initila-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
