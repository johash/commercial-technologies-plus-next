import Layout from "../../components/Layout/Layout";
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";
import ServicesBody from "../../components/ServicesBody/ServicesBody";
import StartProject from "../../components/StartProject/StartProject";

const ServicesPage = () => {
  return (
    <Layout>
      <ServicesHeader />
      <ServicesBody />
      <StartProject />
    </Layout>
  );
};

export default ServicesPage;
