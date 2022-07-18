import Image from "next/image";
import classes from "./DevCard.module.scss";

const DevCard = ({ green, icon, text }) => {
  return (
    <div
      className={
        green
          ? [classes.DevCard, classes.Green].join(" ")
          : [classes.DevCard, classes.Blue].join(" ")
      }
    >
      <div className={classes.IconContainer}>
        <Image
          alt="card icon"
          src={icon}
          layout="fill"
          className={classes.Icon}
        />
      </div>
      <span className={classes.Text}>{text}</span>
    </div>
  );
};

export default DevCard;
