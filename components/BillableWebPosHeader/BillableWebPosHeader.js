import classes from "./BillableWebPosHeader.module.scss";
import Image from "next/image";

const BillableWebPosHeader = () => {
  return (
    <section className={classes.BillableWebPosHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Billable Web POS</h1>
          <p>A feature rich cloud based WebPOS</p>
        </div>
      </div>
      <div className={classes.LaptopImageWrapper}>
        <div className={classes.LaptopImageContainer}>
            <Image src='/assets/web-pos-laptop.png' layout="fill"  className={classes.Image}/>
        </div>
      </div>
      <div className={classes.BackgroundWrapper}>
        <div className={classes.BackgroundContainer}>
            <Image src='/assets/billable-web-pos-background.png' layout="fill"  className={classes.Image}/>
        </div>
      </div>
    </section>
  );
};

export default BillableWebPosHeader;
