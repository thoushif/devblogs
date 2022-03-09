import PostsGrid from "../posts/posts-grid";
import classes from "./featuredposts.module.css";
export default function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
