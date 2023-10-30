import classes from "./hero.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import Typed from "typed.js";

export default function Hero() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [" Web development..", " Web design..", " Web anything.."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      cursorChar: "|",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
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
      <p>
        I blog about <span ref={el}></span>
      </p>
      <div className={classes.intro}>
        <p>
          I am a Full Stack developer, passionate about about web technologies,
          crafting clean and elegant solutions to real world problems.
        </p>
        <p>
          <small>Currently focusing on NextJS 13 with Sanity. </small>
        </p>
      </div>
    </section>
  );
}
