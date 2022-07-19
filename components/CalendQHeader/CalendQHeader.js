import Image from "next/image";
import classes from "./CalendQHeader.module.scss";

const CalendQHeader = () => {
  return (
    <section className={classes.CalendQHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>CalendQ</h1>
          <p>Scheduling Simplified</p>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/calendQ.png"}
              alt="mobile pos phones"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
      <div className={classes.BackgroundImageWrapper}>
        <div className={classes.BackgroundImageContainer}>
          <Image
            alt="mobile pos background image"
            src={"/assets/billable-mobile-pos-background.png"}
            layout="fill"
            className={classes.BackgroundImage}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendQHeader;
