import classes from "./ServicesItem.module.scss";
import Image from "next/image";

const ServicesItem = (props) => {
  return (
    <div className={classes.ServicesItem}>
      <div
        className={
          props.invert
            ? [classes.Container, classes.FlexReverse].join(" ")
            : classes.Container
        }
      >
        <div className={classes.Image}>
          <div className={classes.ImageContainer}>
            <Image
              src={props.imageSrc}
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
        <div className={classes.Body}>
          <h2>{props.heading}</h2>
          <p>{props.description}</p>
          <button
            className={
              props.invert
                ? [classes.Btn, classes.BtnSecondaryOutline].join(" ")
                : [classes.Btn, classes.BtnPrimaryOutline].join(" ")
            }
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesItem;
