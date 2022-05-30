import classes from "./AboutUsBody.module.scss";
import AboutCard from "./AboutCard/AboutCard";
import Image from "next/image";

const AboutUsBody = () => {
  return (
    <section className={classes.AboutUsBody}>
      <div className={classes.Container}>
        <div className={classes.TextContent}>
          <h2>We are Commercializers</h2>
          <p>
            We’re a tech startup company founded in 2016 in a beautiful country
            of Asia. We were known as the Smart Mobility Enterprise Solutions
            Provider.{" "}
          </p>
        </div>
        <div className={classes.AboutCardContainer}>
          <div className={classes.Top}>
            <AboutCard content="Seamless User Journey" />
            <AboutCard content="Brand is An Experience" green />
            <AboutCard content="Maximize ROI" />
            <AboutCard content="Quality Over Quantity" green />
            <AboutCard content="Great Product Sell Themselves" />
          </div>
          <div className={classes.Bottom}>
            <AboutCard content="Uniqueness" />
            <AboutCard content="Retention" green />
            <AboutCard content="Product Market Fit" />
            <AboutCard content="Strategic Growth" green />
          </div>
        </div>
        <div className={classes.AboutCardContainerMobile}>
          <div className={classes.MobileTop}>
            <AboutCard content="Seamless User Journey" />
            <AboutCard content="Brand is An Experience" green />
            <AboutCard content="Maximize ROI" />
            <AboutCard content="Quality Over Quantity" green />
            <AboutCard content="Great Product Sell Themselves" />
            <AboutCard content="Uniqueness" />
            <AboutCard content="Retention" green />
            <AboutCard content="Product Market Fit" />
          </div>
          <div className={classes.MobileBottom}>
            <AboutCard content="Strategic Growth" green />
          </div>
        </div>
      </div>
      <div className={classes.BottomLeft}>
        <div className={classes.ImageContainer1}>
          <Image
            src="/assets/bottom-left.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
      <div className={classes.BottomRight}>
        <div className={classes.ImageContainer2}>
          <Image
            src="/assets/bottom-right.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBody;
