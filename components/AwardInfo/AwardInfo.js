import classes from "./AwardInfo.module.scss";
import InfoCard from "./InfoCard/InfoCard";

const AwardInfo = () => {
  return (
    <section className={classes.AwardInfo}>
      <div className={classes.Container}>
        <InfoCard
          heading="National Winner"
          subHeading="Best Innovation in Business Process Management"
          desc="National Ingenuity Awards 2021 by SLASSCOM"
        />
        <InfoCard
          heading="Western Province Winner"
          subHeading="Best Innovation in Business Process Management"
          desc="National Ingenuity Awards 2021 by SLASSCOM"
        />
        <InfoCard
          heading="Certificate of Appreciation"
          subHeading="Business & Commerce"
          desc="eSwabhimani Awards 2020 by ICTA       "
        />
        <InfoCard
          heading="Finalist"
          subHeading="Best Startup of The Year"
          desc="SAARC Startup Awards 2021"
        />
        <InfoCard
          heading="Merit Winner "
          subHeading="Retail & Distribution "
          desc="NBQSA Awards 2021"
        />
        <InfoCard
          heading=" Winner"
          subHeading=""
          desc="SLTMOBITEL Entrepreneurship Studio 2021"
        />
      </div>
    </section>
  );
};

export default AwardInfo;
