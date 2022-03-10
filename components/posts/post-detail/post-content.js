import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";

export default function PostContent(props) {
  const { post } = props;
  const imagesFolder = `${props.isportfolio ? "portfolio" : "posts"}`;
  console.log(imagesFolder, "imagesFolder");
  const imagePath = `/images/${imagesFolder}/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/${imagesFolder}/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={500}
        />
      );
    },

    a(link) {
      const { node } = link;
      return (
        <a href={`${node.properties.href}`} target="_blank">
          {link.children}
        </a>
      );
    },

    p(paragraph) {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        if (image.properties.alt.startsWith("video")) {
          return (
            <div className={classes.image}>
              <video
                controls
                muted
                width={700}
                height={450}
                onMouseOver={(event) => event.target.play()}
                onMouseOut={(event) => event.target.pause()}
              >
                <source src={image.properties.src} type="video/mp4" />
              </video>
            </div>
          );
        }
        return (
          <div className={classes.image}>
            <Image
              src={`/images/${imagesFolder}/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={800}
              height={450}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} layout="intrinsic" />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
