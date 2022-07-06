import classes from "./BlogHeader.module.scss";
import Image from "next/image";

const BlogHeader = () => {
  return (
    <section className={classes.BlogHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Modern Solutions For Modern Problems</h1>
          <p>
            We’re a tech startup company founded in 2016 in a beautiful country
            of Asia. We were known as the Smart Mobility Enterprise Solutions
            Provider.{" "}
          </p>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/blog-background.png"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
