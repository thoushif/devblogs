import Head from "next/head";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featuredposts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <meta
          name="description"
          content="I post about my web development stories"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default HomePage;
