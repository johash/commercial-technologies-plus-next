import classes from "./TrustedPartners.module.scss";
import Image from "next/image";

const TrustedPartners = () => {
  return (
    <section className={classes.TrustedPartners}>
      <div className={classes.Container}>
        <h5>Trusted and accredited by</h5>
        <div className={classes.PartnerImages}>
          <div className={classes.Left}>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/1.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/2.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/3.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/4.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
          </div>
          <div className={classes.Right}>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/5.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/6.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/brands/7.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
