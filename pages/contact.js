import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contacts/contact-form";

export default function Contactpage() {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta name="description" content="contact me page for thoushif blogs" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}
