import { Fragment } from "react";
import Link from "next/link";
import classes from "./404.module.css";

export default function NotFoundComponent(props) {
  return (
    <div className={classes.notFound}>
      <h1>OOPs! There is nothing here!!</h1>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </div>
  );
}
