import Image from "next/image";
import classes from "./AboutCard.module.scss";

const AboutCard = (props) => {
  return (
    <div className={classes.AboutCard}>
      <div className={classes.ImageContainer}>
        <Image src={props.imageUrl} layout="fill" className={classes.Image} />
      </div>
      <span className={classes.Title}>{props.title}</span>
    </div>
  );
};

export default AboutCard;
