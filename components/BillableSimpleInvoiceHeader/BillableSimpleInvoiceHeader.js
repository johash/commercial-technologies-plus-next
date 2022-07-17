import Image from "next/image";
import classes from "./BillableSimpleInvoiceHeader.module.scss";

const BillableSimpleInvoiceHeader = () => {
  return (
    <section className={classes.BillableMobilePosHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>Billable Simple Invoice</h1>
          <p>Invoicing Redefined</p>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/billable-simple-invoice-tab.png"}
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

export default BillableSimpleInvoiceHeader;
