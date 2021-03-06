import classes from "./posts-item.module.css";
import Link from "next/link";
import Image from "next/image";

export default function PostsItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagesFolder = `${props.isporfolio ? "portfolio" : "posts"}`;

  const imagePath = `/images/${imagesFolder}/${slug}/${image}`;
  const linkPath = `/${props.isporfolio ? "portfolio" : "posts"}/${slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={props.isporfolio ? 500 : 300}
              height={300}
              layout="intrinsic"
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
