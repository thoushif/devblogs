import Head from "next/head";
import { Fragment, React, useRef } from "react";
import ContactForm from "../components/contacts/contact-form";
import Hero from "../components/home-page/hero";
import { getAllPortfolioProjects, getFeaturedPosts } from "../lib/posts-util";
import AllPostsPage from "./portfolio";
import Skills from "../components/home-page/skills";

function HomePage(props) {
  const ref = useRef(null);
  function focus() {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    console.log(ref.current);
  }

  return (
    <Fragment>
      <Hero focus={focus} />
      {/* <FeaturedPosts posts={props.posts} /> */}
      <Skills ref={ref} />
      <AllPostsPage posts={props.allPosts} />{" "}
      <Head>
        <title>Thoushif</title>
        <meta
          name="description"
          content="I post about my web development stories"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPortfolioProjects();
  return {
    props: {
      posts: featuredPosts,
      allPosts,
    },
  };
}

export default HomePage;
