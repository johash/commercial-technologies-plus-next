import classes from "./InfoCard.module.scss";
import Image from "next/image";

const InfoCard = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.CardHeader}>
        <div className={classes.IconContainer}>
          <Image
            src="/assets/icons/leaf-left.png"
            alt="leaf left"
            layout="fill"
            className={classes.Icon}
          />
        </div>
        <h5>{props.heading}</h5>
        <div className={classes.IconContainer}>
          <Image
            src="/assets/icons/leaf-right.png"
            alt="leaf right"
            layout="fill"
            className={classes.Icon}
          />
        </div>
      </div>
      <span>{props.subHeading}</span>
      <p>{props.desc}</p>
    </div>
  );
};

export default InfoCard;
