import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contacts/contact-form";
import CVComponent from "../components/CV/cv";

export default function Contactpage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="resume" />
      </Head>
      <CVComponent />
    </Fragment>
  );
}
