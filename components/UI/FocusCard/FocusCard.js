import { useState, useEffect } from "react";
import classes from "./FocusCard.module.scss";
import Image from "next/image";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { motion } from "framer-motion";

const FocusCard = (props) => {
  const [showText, setShowText] = useState(false);
  const windowSize = useWindowSize();

  const toggleTextVisiblity = () => {
    setShowText(!showText);
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.4 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
      className={classes.FocusCard}
    >
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
    </motion.div>
  );
};

export default FocusCard;
