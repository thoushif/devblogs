import classes from "./hero.module.css";
import Image from "next/image";
import ReactTyped from "react-typed";
import Particles from "react-tsparticles";

export default function Hero() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className={classes.hero}>
      <Particles
        id="tsparticles"
        url="./particles-greeny.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <div className={classes.image}>
        <Image
          src={"/images/site/thoushif-blog-hero.jpg"}
          alt="This is me - Thoushif"
          width={600}
          height={600}
        />
      </div>
      <h1>Hi, I'm Thoushif</h1>
      {/* <p>
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
      </p> */}
      <div className={classes.intro}>
        <p>
          I am a Full Stack developer, passionate about about web technologies,
          crafting clean and elegant solutions to real world problems.
        </p>
        <p>
          <small>Currently focusing on NextJS with MongoDB. </small>
        </p>
      </div>
    </section>
  );
}
