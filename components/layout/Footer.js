import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <p>Copyright &copy; Thoushif </p>
      <p>
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
