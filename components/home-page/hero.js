import classes from "./hero.module.css";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import Typed from "typed.js";
import Skills from "./skills";
import Link from "next/link";

export default function Hero({ focus }) {
  const ref = useRef(null);
  return (
    <section className={`${classes.hero} ${classes.heroSection}`}>
      <div className={classes.intro}>
        <h1>
          I am a Full Stack developer, passionate about Java Spring Boot and web
          technologies, crafting clean and elegant solutions to real world
          problems.
        </h1>
        <p>
          <small>Currently focusing on NextJS 13 with Sanity. </small>
        </p>
      </div>
      <svg
        fill="hsl(265, 6%, 66%)"
        height="80px"
        width="80px"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 490 490"
        onClick={() => focus()}
      >
        <path
          d="M490,165.37l-91.698-88.842L245,231.766L91.698,76.528L0,165.37l245,248.102L490,165.37z M91.219,119.611L245,275.343
    l153.781-155.732l47.717,46.237L245,369.91L43.502,165.848L91.219,119.611z"
        />
      </svg>
    </section>
  );
}
