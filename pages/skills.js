import Head from "next/head";
import { Fragment } from "react";
import Skills from "../components/home-page/skills";

export default function SkillsPage() {
  return (
    <Fragment>
      <Head>
        <title>Skills</title>
        <meta name="description" content="Thoushif skills" />
      </Head>
      <Skills />
    </Fragment>
  );
}
