import classes from "./all-posts.module.css";
import PostsGrid from "./posts-grid";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <PostsGrid posts={props.posts} isporfolio={props.isportfolio} />
    </section>
  );
}

export default AllPosts;
