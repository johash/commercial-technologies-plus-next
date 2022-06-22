import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import AboutUsBody from "../../components/AboutUsBody/AboutUsBody";
import StartProject from "../../components/StartProject/StartProject";

import Head from "next/head";

const AboutUsPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Commercial Technologies Plus is an award-winning product development company in Sri Lanka that's trusted by many well-known enterprises & startups."
        />
        <title>Company | Commercial Technologies Plus</title>
      </Head>
      <AboutUsHeader />
      <AboutUsBody />
      <StartProject />
    </Layout>
  );
};

export default AboutUsPage;
