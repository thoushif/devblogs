import classes from "./all-posts.module.css";

function PortfolioDetail(props) {
  return (
    <section className={classes.posts}>
      <h3 className={classes.posts}>Portfolio</h3>
      <p>
        I have been working on my own web projects since start of my IT career.
        I always interested in brainstroming new ideas and implementing them in
        the best way possible in latest web tech available.
      </p>
    </section>
  );
}

export default PortfolioDetail;
