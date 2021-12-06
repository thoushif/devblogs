import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/posts-util";

function PostDetailPage(props) {
  return <PostContent post={props.postData} />;
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
