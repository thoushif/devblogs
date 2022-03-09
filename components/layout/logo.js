import classes from "./logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Image
        className={classes.logoImage}
        // layout="intrinsic"
        src={"/favicon.ico"}
        alt="This is me - Thoushif"
        width={100}
        height={100}
      />
      Thoushif's Space
    </div>
  );
}
