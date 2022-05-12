import classes from "./FocusCard.module.scss";
import Image from "next/image";

const FocusCard = (props) => {
  return (
    <div className={classes.FocusCard}>
      <div className={classes.IconContainer}>
        <Image src={props.icon} layout="responsive" width={80} height={80} />
      </div>
      <h5>{props.heading}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default FocusCard;
