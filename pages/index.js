import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featuredposts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

const DPOSTS = [
  {
    title: "getting-started-with-next-js",
    image: "getting-started-nextjs.png",
    excerpt: "getting-started-with-next-js",
    date: "2021-12-04",
    slug: "getting-started-with-next-js"
  },
  {
    title: "nextjs-file-based-routing",
    image: "nextjs-file-based-routing.png",
    excerpt: "nextjs-file-based-routing",
    date: "2021-12-03",
    slug: "nextjs-file-based-routing"
  }
];

function HomePage(props) {
  return (
    <Fragment>
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
