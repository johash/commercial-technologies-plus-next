import Image from "next/image";
import classes from "./AboutCard.module.scss";

const AboutCard = ({ title, imageUrl }) => {
  return (
    <div className={classes.AboutCard}>
      <div className={classes.ImageWrapper}>
        <div className={classes.ImageContainer}>
          <Image
            alt="simple mobile pos"
            src={imageUrl}
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>

      <div className={classes.Body}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default AboutCard;
