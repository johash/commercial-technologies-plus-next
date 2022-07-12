import classes from "./ServicesHeader.module.scss";
import Image from "next/image";

const ServicesHeader = () => {
  return (
    <section className={classes.ServicesHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContent}>
          <h1>Go Beyond What’s Possible</h1>
          <p>
            Harness the power of the latest technologies and experience
            innovative, strategic and scalable solutions with us.
          </p>
          <div className={classes.ActionButtonContainer}>
            <button className={[classes.Btn, classes.BtnSecondary].join(" ")}>
              Get in touch!
            </button>
          </div>
        </div>
      </div>
      <div className={classes.WrapperLeft}>
        <div className={classes.ImageContainerLeft}>
          <Image
            src="/assets/services-left.png"
            layout="fill"
            className={classes.ImageLeft}
          />
        </div>
      </div>
      <div className={classes.WrapperRight}>
        <div className={classes.ImageContainerRight}>
          <Image
            src="/assets/services-right.png"
            layout="fill"
            className={classes.ImageRight}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeader;
