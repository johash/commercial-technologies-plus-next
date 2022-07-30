import classes from "./TrustedBy.module.scss";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <section className={classes.TrustedBy}>
      <div className={classes.Container}>
        <p>TRUSTED BY</p>
        <div className={classes.LogoContainer}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/dialog.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/sampath-bank.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/slt-mobitel.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/johnkeells.png"}
              alt="dialog"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/axiata.png"}
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
