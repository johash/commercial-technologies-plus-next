import Image from "next/image";
import classes from "./BillableMobilePosFeatures.module.scss";
import FeatureBox from "./FeatureBox/FeatureBox";

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
        <div className={classes.FeatureSet1}>
          <FeatureBox title="High Performance" />
          <FeatureBox title="Portability" />
        </div>
        <div className={classes.FeatureSet2}>
          <FeatureBox title="POS Terminal" />
          <FeatureBox title="Compatibility" />
        </div>
        <div className={classes.FeatureSet3}>
          <FeatureBox title="Powerful" />
          <FeatureBox title="Multi-Functional" />
        </div>
        <div className={classes.FeatureSet4}>
          <FeatureBox title="Customisable" />
          <FeatureBox title="Productive" />
        </div>
      </div>
    </section>
  );
};

export default BillableMobilePosFeatures;
