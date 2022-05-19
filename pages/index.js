import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import OurFocus from "../components/OurFocus/OurFocus";
import Awards from "../components/Awards/Awards";
import Commercialize from "../components/Commercialize/Commercialize";
import StartProject from "../components/StartProject/StartProject";
import TechStack from "../components/TechStack/TechStack";

const HomePage = () => {
  return (
    <Layout>
      {/* <Jumbotron /> */}
      <OurFocus />
      <Commercialize />
      <Awards />
      <TechStack />
      <StartProject />
    </Layout>
  );
};

export default HomePage;
