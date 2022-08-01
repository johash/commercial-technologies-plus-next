import React from "react";
import classes from "./Card.module.scss";
import Image from "next/image";

const Card = ({ image, heading, content }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.ImageContainer}>
        <Image
          src={image}
          alt="recipe card image"
          layout="fill"
          className={classes.Image}
        />
      </div>
      <span>{heading}</span>
      <p>{content}</p>
    </div>
  );
};

export default Card;
