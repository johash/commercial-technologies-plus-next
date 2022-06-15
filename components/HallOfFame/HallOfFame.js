import classes from "./HallOfFame.module.scss";
import Image from "next/image";

const HallOfFame = () => {
  return (
    <section className={classes.HallOfFame}>
      <div className={classes.Container}>
        <div className={classes.Header}>
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/hollywood-star.png"
              alt="hollywood star icon"
              layout="fill"
              className={classes.Icon}
            />
          </div>
          <h2>Hall of Fame</h2>
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/hollywood-star.png"
              alt="hollywood star icon"
              layout="fill"
              className={classes.Icon}
            />
          </div>
        </div>
        <div className={classes.VideoContainer}></div>
      </div>
    </section>
  );
};

export default HallOfFame;
