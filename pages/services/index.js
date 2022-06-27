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
          content="Harness the power of the latest technologies and experience innovative, strategic and scalable solutions with us."
        />
        <title>Services | Commercial Technologies Plus</title>
        <meta
          name="keywords"
          content="saas, saas company, commercialtechnologies, services, web development, software development, ux design, commercialtp, top saas company, mobile development, commercializers, saas platform development company"
        ></meta>
      </Head>
      <ServicesHeader />
      <ServicesBody />
      <StartProject />
    </Layout>
  );
};

export default ServicesPage;
