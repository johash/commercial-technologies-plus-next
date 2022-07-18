import Image from "next/image";
import classes from "./BillableEcommerceHeader.module.scss";

const BillableEcommerceHeader = () => {
  return (
    <section className={classes.BillableEcommerceHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Billable eCommerce Platform</h1>
          <p>An Elegant Storefront</p>
        </div>
      </div>
      <div className={classes.LaptopImageWrapper}>
        <div className={classes.LaptopImageContainer}>
          <Image
            alt="web pos laptop"
            src="/assets/billable-ecommerce-platform.png"
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

export default BillableEcommerceHeader;
