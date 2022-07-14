import Image from "next/image";
import classes from "./BillableMobilePosHeader.module.scss";

const BillableMobilePosHeader = () => {
  return (
    <section className={classes.BillableMobilePosHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Billable Mobile App</h1>
          <p>Simple, Powerful and Everywhere</p>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/mobile-pos-phones.png"}
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

export default BillableMobilePosHeader;
