import { useState, useEffect } from "react";
import classes from "./FocusCard.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../../hooks/useWindowSize";

const FocusCard = (props) => {
  const [showText, setShowText] = useState(false);
  const windowSize = useWindowSize();

  const toggleTextVisiblity = () => {
    setShowText(!showText);
  };

  return (
    <div className={classes.FocusCard}>
      <div className={classes.IconContainer}>
        <Image src={props.icon} layout="fill" className={classes.Icon} />
      </div>
      <div className={classes.Content}>
        <h5>{props.heading}</h5>
        <p>
          {showText
            ? props.description
            : windowSize.width >= 428
            ? props.description
            : props.description.slice(0, 150) + "..."}
        </p>
        <div>
          <button
            className={classes.SeeMoreButton}
            onClick={toggleTextVisiblity}
          >
            {showText ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusCard;
