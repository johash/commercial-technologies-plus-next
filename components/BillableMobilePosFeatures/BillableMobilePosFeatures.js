import Image from "next/image";
import classes from "./BillableMobilePosFeatures.module.scss";

const BillableMobilePosFeatures = () => {
  return (
    <section className={classes.BillableMobilePosFeatures}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            alt="phone image"
            src={"/assets/pos-mobile.png"}
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default BillableMobilePosFeatures;
