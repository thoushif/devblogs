import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPortfolioProjects } from "../../lib/posts-util";

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="all thoushif blogs" />
      </Head>
      <AllPosts posts={props.posts} isportfolio />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPortfolioProjects();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
