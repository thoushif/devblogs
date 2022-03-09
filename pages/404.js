import Head from "next/head";
import { Fragment } from "react";
import NotFoundComponent from "../components/layout/404";

export default function NotFoundPage() {
  return (
    <Fragment>
      <Head>
        <title>OOPs!!</title>
        <meta name="description" content="404 Page" />
      </Head>
      <NotFoundComponent />
    </Fragment>
  );
}
