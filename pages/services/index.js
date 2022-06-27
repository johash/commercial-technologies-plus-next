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
          content="commercialtechnologies services, services, web development, SaaS, it outsourcing, ux design, business analysis, mobile development, software development, SaaS platform development company"
        ></meta>
      </Head>
      <ServicesHeader />
      <ServicesBody />
      <StartProject />
    </Layout>
  );
};

export default ServicesPage;
