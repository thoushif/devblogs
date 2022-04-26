import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contacts/contact-form";
import Hero from "../components/home-page/hero";
import { getAllPortfolioProjects, getFeaturedPosts } from "../lib/posts-util";
import AllPostsPage from "./portfolio";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      {/* <FeaturedPosts posts={props.posts} /> */}
      <AllPostsPage posts={props.allPosts} />
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
