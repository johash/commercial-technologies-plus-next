import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import OurFocus from "../components/OurFocus/OurFocus";
import Awards from "../components/Awards/Awards";
import Commercialize from "../components/Commercialize/Commercialize";
import StartProject from "../components/StartProject/StartProject";
import TechStack from "../components/TechStack/TechStack";

import Head from "next/head";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Commercial Technologies Plus is a trusted SaaS product development company excels at building secure and scalable enterprise-class software solutions."
        />
        <title>Commercialize Your Ideas | Commercial Technologies Plus</title>
      </Head>

      <Jumbotron />
      <OurFocus />
      <Commercialize />
      <Awards />
      <TechStack />
      <StartProject />
    </Layout>
  );
};

export default HomePage;
