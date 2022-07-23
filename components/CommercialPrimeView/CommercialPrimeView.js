import Image from "next/image";
import classes from "./CommercialPrimeView.module.scss";

const CommercialPrimeView = () => {
  return (
    <section className={classes.CommercialPrimeView}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            alt="commercial prime screenshots"
            src={"/assets/commercial-prime-ss.png"}
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialPrimeView;
