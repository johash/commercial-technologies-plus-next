import classes from "./AwardsHeader.module.scss";
import Image from "next/image";

const AwardsHeader = () => {
  return (
    <section className={classes.AwardsHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContent}>
          <h1>Award Winning Product Development Company </h1>
          <p>
            We build great products where innovation meets uniqueness and
            commercial value.
          </p>
        </div>
        <div className={classes.ImageContent}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/six-awards.png"
              alt="awards count"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsHeader;
