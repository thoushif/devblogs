import classes from "./hero.module.css";
import Image from "next/image";
import ReactTyped from "react-typed";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={"/images/site/thoushif-blog-hero.jpg"}
          alt="This is me - Thoushif"
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I'm Thoushif</h1>
      <p>
        I blog about{" "}
        <ReactTyped
          loop
          typeSpeed={50}
          backSpeed={50}
          strings={[
            " Web development..",
            " Web design..",
            " Web anything.. ;)",
          ]}
          smartBackspace
          shuffle={false}
          backDelay={1000}
          fadeOut={false}
          fadeOutDelay={600}
          loopCount={0}
          showCursor
          cursorChar="|"
        />
      </p>
    </section>
  );
}
