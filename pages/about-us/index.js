import Layout from "../../components/Layout/Layout";
import AboutUsHeader from "../../components/AboutUsHeader/AboutUsHeader";
import AboutUsBody from "../../components/AboutUsBody/AboutUsBody";
import StartProject from "../../components/StartProject/StartProject";

const AboutUsPage = () => {
  return (
    <Layout>
      <AboutUsHeader />
      <AboutUsBody />
      <StartProject />
    </Layout>
  );
};

export default AboutUsPage;
