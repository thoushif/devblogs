import classes from "./logo.module.css";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <span> &lt; Thoushif /&gt;</span>
    </div>
  );
}
