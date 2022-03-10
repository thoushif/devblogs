import Head from "next/head";
import { Fragment } from "react";
import CVComponent from "../components/CV/cv";

export default function Contactpage() {
  return (
    <Fragment>
      <Head>
        <title>Thoushif - CV</title>
        <meta name="description" content="resume" />
      </Head>
      <CVComponent />
    </Fragment>
  );
}
