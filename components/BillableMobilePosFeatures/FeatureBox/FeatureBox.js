import Image from "next/image";
import classes from "./FeatureBox.module.scss";

const FeatureBox = ({ title }) => {
  return (
    <section className={classes.FeatureBox}>
      <div className={classes.CheckContainer}>
        <Image
          alt="check mark"
          src={"/assets/icons/check-mark.png"}
          layout="fill"
          className={classes.CheckMark}
        />
      </div>
      <span className={classes.Title}>{title}</span>
    </section>
  );
};

export default FeatureBox;
