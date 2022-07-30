import classes from "./Jumbotron.module.scss";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <div className={classes.Jumbotron}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Design for Everyone</h1>
          <p>
            Welcome, our creative solutions are catered for everyone from
            scratch.
          </p>
        </div>
        <div className={classes.ButtonContainer}>
          <button className={classes.ActionButton}>Get a FREE UX Review</button>
        </div>
      </div>
      <div className={classes.PhoneLeftWrapper}>
        <div className={classes.PhoneLeftContainer}>
          <Image
            src={"/assets/phone-left.png"}
            alt="phone left"
            layout="fill"
            className={classes.PhoneLeft}
          />
        </div>
      </div>
      <div className={classes.PhoneRightWrapper}>
        <div className={classes.PhoneRightContainer}>
          <Image
            src={"/assets/phone-right.png"}
            alt="phone right"
            layout="fill"
            className={classes.PhoneRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
