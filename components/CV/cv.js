import classes from "./cv.module.css";

export default function CVComponent() {
  return (
    <section className={classes.cv}>
      <iframe
        style={{ width: "100%", height: "800px" }}
        src="/static/ThoushifAazamShaik.pdf#toolbar=0"
      ></iframe>
    </section>
  );
}
