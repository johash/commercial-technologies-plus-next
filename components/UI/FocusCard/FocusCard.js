import { useState } from "react";
import classes from "./FocusCard.module.scss";
import Image from "next/image";

const FocusCard = (props) => {
  const [isTextShown, setIsTextShown] = useState(false);

  const toggleTextVisiblity = () => {
    setIsTextShown(!isTextShown);
  };

  return (
    <div className={classes.FocusCard}>
      <div className={classes.IconContainer}>
        <Image src={props.icon} layout="fill" className={classes.Icon} />
      </div>
      <div className={classes.Content}>
        <h5>{props.heading}</h5>
        <p>{props.description}</p>
        <div>
          <button
            className={classes.SeeMoreButton}
            onClick={toggleTextVisiblity}
          >
            {isTextShown ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
