import React from "react";
import classes from "./skills.module.css";

const Skills = React.forwardRef((props, ref) => {
  const languageSkills = ["Java", "Python", "JavaScript", "TypeScript", "SQL"];
  const technologiesSkills = ["Spring Boot", "REST APIs", "Ant", "Maven"];
  const webSkills = [
    "HTML",
    "CSS",
    "JQuery",
    "Angular",
    "ReactJS",
    "Next JS",
    "Django",
    "Node.js",
  ];
  const cloudSkills = [
    "AWS",
    "EC2",
    "S3",
    "Lambda",
    "Elasticsearch",
    "Kubernetes",
    "Docker",
    "Kafka",
  ];
  const continuousDeliverySkills = ["Jenkins", "GIT"];
  const toolsSkills = ["Eclipse", "IntelliJ IDEA"];
  const noSQLSkills = ["Mongo DB", "Strapi", "Sanity IO"];

  return (
    <section ref={ref}>
      <h1 className={classes.skillsHeading}>Skills</h1>
      <div className={classes.skillGroup}>Languages</div>
      <div className={classes.skillsList}>{languageSkills.join(", ")}</div>

      <div className={classes.skillGroup}>Technologies & Tools</div>
      <div className={classes.skillsList}>{technologiesSkills.join(", ")}</div>

      <div className={classes.skillGroup}>Web</div>
      <div className={classes.skillsList}>{webSkills.join(", ")}</div>

      <div className={classes.skillGroup}>Cloud</div>
      <div className={classes.skillsList}>{cloudSkills.join(", ")}</div>

      <div className={classes.skillGroup}>Continuous Delivery tools</div>
      <div className={classes.skillsList}>
        {continuousDeliverySkills.join(", ")}
      </div>

      <div className={classes.skillGroup}>Tools & Utilities</div>
      <div className={classes.skillsList}>{toolsSkills.join(", ")}</div>

      <div className={classes.skillGroup}>No SQL DB & Headless</div>
      <div className={classes.skillsList}>{noSQLSkills.join(", ")}</div>
    </section>
  );
});

export default Skills;
