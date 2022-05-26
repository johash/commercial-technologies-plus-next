import classes from "./AwardsCarousel.module.scss";
import Image from "next/image";

const AwardsCarousel = () => {
  return (
    <section className={classes.AwardsCarousel}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c1.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c2.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c3.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c4.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c5.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/awards/c6.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsCarousel;
