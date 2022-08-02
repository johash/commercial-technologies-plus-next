import classes from "./BlogHeader.module.scss";
import Image from "next/image";

const BlogHeader = () => {
  return (
    <section className={classes.BlogHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Modern Solutions For Modern Problems</h1>
          <p>
            Are you aware of the latest trends in the industry? Check out our
            blog! For all the latest and greatest information you need to know
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
