import Layout from "../../components/Layout/Layout";
import ServicesHeader from "../../components/ServicesHeader/ServicesHeader";
import ServicesBody from "../../components/ServicesBody/ServicesBody";
import StartProject from "../../components/StartProject/StartProject";

import Head from "next/head";

const ServicesPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Experience fully functional, robust, innovative and scalable software services with promising and exceptional performance with Commercial Technologies Plus."
        />
        <title>Services | Commercial Technologies Plus</title>
      </Head>
      <ServicesHeader />
      <ServicesBody />
      <StartProject />
    </Layout>
  );
};

export default ServicesPage;
