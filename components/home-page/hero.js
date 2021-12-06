import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/thoushif-blog-hero.jpg"}
          alt="An Image showing Thoushif"
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I'm Thoushif</h1>
      <p>I blog about web development - all areas!!!</p>
    </section>
  );
}
