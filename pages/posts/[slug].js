import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.postData.title}</title>
        <meta name="description" content={props.postData.excerpt} />
      </Head>
      <PostContent post={props.postData} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { slug } = context.params;
  const postData = getPostData(slug);

  return {
    props: {
      postData: postData
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles().map((fn) => fn.replace(/\.md$/, ""));
  console.log(postFileNames);
  const slugPaths = postFileNames.map((slug) => ({ params: { slug: slug } }));

  return {
    paths: slugPaths,
    fallback: true
  };
}

export default PostDetailPage;
