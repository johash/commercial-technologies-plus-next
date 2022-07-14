import Image from "next/image";
import classes from "./AboutCard.module.scss";

const AboutCard = () => {
  return (
    <div className={classes.AboutCard}>
      <div className={classes.ImageContainer}>
        <Image
          alt="simple mobile pos"
          src={"/assets/billable-mobile-pos/1.png"}
          layout="fill"
          className={classes.Image}
        />
      </div>
      <div className={classes.Body}>
        <p>Simple Mobile POS</p>
      </div>
    </div>
  );
};

export default AboutCard;
