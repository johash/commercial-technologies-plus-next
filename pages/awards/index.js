import Layout from "../../components/Layout/Layout";
import classes from "./index.module.scss";

import AwardsHeader from "../../components/AwardsHeader/AwardsHeader";
import AwardsCarousel from "../../components/AwardsCarousel/AwardsCarousel";
import StartProject from "../../components/StartProject/StartProject";
import AwardInfo from "../../components/AwardInfo/AwardInfo";
import TrustedPartners from "../../components/TrustedPartners/TrustedPartners";
import HallOfFame from "../../components/HallOfFame/HallOfFame";

import Head from "next/head";

const AwardsPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Take a quick peek about awards achieved by Commercial Technologies Plus for the excellency and expertise in the industry."
        />
        <title>Awards | Commercial Technologies Plus</title>
      </Head>
      <div className={classes.AwardsPageContainer}>
        <AwardsHeader />
        <AwardsCarousel />
        <AwardInfo />
        <TrustedPartners />
        {/* <HallOfFame /> */}
        <StartProject />
      </div>
    </Layout>
  );
};

export default AwardsPage;
