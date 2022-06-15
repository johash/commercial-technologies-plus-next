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
        <title>Commercialize Your Ideas - Commercial Technologies Plus</title>
        <meta
          name="description"
          content="Award winning tech product development company which helps start-ups, enterprises and investors globally to commercialize their ideas by raising potential products. Maestro in SaaS platform development blended with seamless growth strategies and commercial value engineering."
        />
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
