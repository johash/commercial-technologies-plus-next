import Image from "next/image";
import classes from "./CommercialPrimeHeader.module.scss";

const CommercialPrimeHeader = () => {
  return (
    <section className={classes.CommercialPrimeHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Commercial Prime</h1>
          <p>One Card - Infinite Possibilities</p>
        </div>
      </div>
      <div className={classes.LaptopImageWrapper}>
        <div className={classes.LaptopImageContainer}>
          <Image
            alt="web pos laptop"
            src="/assets/commercial-prime.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
      <div className={classes.BackgroundWrapper}>
        <div className={classes.BackgroundContainer}>
          <Image
            alt="web pos background"
            src="/assets/billable-ecommerce-platform-background.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialPrimeHeader;
