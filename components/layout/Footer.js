import React from "react";
import Link from "next/link";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; Thoushif </p>
      <p>
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
        <a target="_blank" href="https://linkedin.com/in/thoushifaazam">
          Linkedin
        </a>
        <a target="_blank" href="https://twitter.com/thoushif_aazam">
          Twitter
        </a>
      </p>
    </footer>
  );
}

export default Footer;
