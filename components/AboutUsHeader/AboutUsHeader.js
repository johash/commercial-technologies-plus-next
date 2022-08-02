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
            Commercial Technologies Plus is a team of self-driven, experienced
            and enthusiastic people that boost the company’s capabilities to
            gain a competitive edge while achieving the company vision and
            mission. We strive to deliver an ideal product market fit by
            guaranteeing an optimum value for your investment.
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
                alt="company team image"
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
