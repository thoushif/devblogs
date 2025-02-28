import Head from "next/head";
import Layout from "../components/layout/layout";
import "../styles/global.css";
import Clarity from '@microsoft/clarity';
const projectId = process.env.CLARITY_PROJECT_ID

function MyApp({ Component, pageProps }) {
  Clarity.init(projectId);
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
