import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import PPComponent from "../components/PP/privacypolicy";

function PrivacyPolicyPage() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="privacy policy" />
      </Head>
      <PPComponent />
    </Fragment>
  );
}

export default PrivacyPolicyPage;
