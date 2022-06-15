import classes from "./AboutUsHeader.module.scss";
import InfoCard from "./InfoCard/InfoCard";
import Image from "next/image";

const AboutUsHeader = () => {
  return (
    <section className={classes.AboutUsHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContent}>
          <h1>Great things starts with a great team</h1>
          <p>
            We’re a tech startup company founded in 2016 in a beautiful country
            of Asia. We were known as the Smart Mobility Enterprise Solutions
            Provider.{" "}
          </p>
          <div className={classes.InfoCardContainer}>
            <InfoCard heading="Since" value="2016" />
            <InfoCard heading="Projects" value="36+" />
            <InfoCard heading="Clients" value="28+" />
            <InfoCard heading="Team" value="32" />
          </div>
        </div>
        <div className={classes.Wrapper}>
          <div className={classes.ImageContent}>
            <div className={classes.ImageContainer}>
              <Image
                src="/assets/team-image.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
