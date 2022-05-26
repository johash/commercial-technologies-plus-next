import Layout from "../../components/Layout/Layout";
import classes from "./index.module.scss";

import AwardsHeader from "../../components/AwardsHeader/AwardsHeader";
import AwardsCarousel from "../../components/AwardsCarousel/AwardsCarousel";
import StartProject from "../../components/StartProject/StartProject";
import AwardInfo from "../../components/AwardInfo/AwardInfo";
import TrustedPartners from "../../components/TrustedPartners/TrustedPartners";
import HallOfFame from "../../components/HallOfFame/HallOfFame";

const AwardsPage = () => {
  return (
    <Layout>
      <div className={classes.AwardsPageContainer}>
        <AwardsHeader />
        <AwardsCarousel />
        <AwardInfo />
        <TrustedPartners />
        <HallOfFame />
        <StartProject />
      </div>
    </Layout>
  );
};

export default AwardsPage;
