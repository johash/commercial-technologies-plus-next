import Image from "next/image";
import classes from "./LocationMap.module.scss";

const LocationMap = () => {
  return (
    <div className={classes.LocationMap}>
      <a
        href={
          "https://www.google.com/maps/place/Commercial+Technologies+Plus+(Private)+Limited/@6.675524,79.9220358,17z/data=!3m1!4b1!4m5!3m4!1s0x3ae2481e3ca64fcf:0xa1279f3b88acc7d5!8m2!3d6.6755272!4d79.9242198"
        }
        target="_blank"
        // className={classes.ImageContainer}
      >
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/company-location.png"
            alt="company-location"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </a>
    </div>
  );
};

export default LocationMap;
