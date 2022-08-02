import classes from "./TrustedBy.module.scss";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className={classes.TrustedBy}>
      <div className={classes.Container}>
        <p>ACCREDITED BY</p>
        <div className={classes.LogoContainer}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/1.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/2.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/3.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/4.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/5.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/6.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/brands/7.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
