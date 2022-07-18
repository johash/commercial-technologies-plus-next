import Image from "next/image";
import classes from "./AboutCard.module.scss";

const AboutCard = ({ title, imageUrl, light }) => {
  return (
    <div className={light ? classes.AboutCardLight : classes.AboutCard}>
      <div className={classes.ImageContainer}>
        <Image
          alt="simple mobile pos"
          src={imageUrl}
          layout="fill"
          className={classes.Image}
        />
      </div>
      <div className={classes.Body}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AboutCard;
