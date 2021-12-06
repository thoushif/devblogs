import PostsGrid from "../posts/posts-grid";

export default function FeaturedPosts(props) {
  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
