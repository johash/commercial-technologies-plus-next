import Layout from "../../components/Layout/Layout";
import CaseStudiesHeader from "../../components/CaseStudiesHeader/CaseStudiesHeader";
import CaseStudiesBody from "../../components/CaseStudiesBody/CaseStudiesBody";
import StartProject from "../../components/StartProject/StartProject";

import Head from "next/head";

const CaseStudiesPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Explore our case studies across multiple tech markets and industries. Get inspired by the results we deliver to our clients."
        />
        <title>Case Studies | Commercial Technologies Plus</title>
        <meta
          name="keywords"
          content="saas, saas company, commercialtechnologies, case studies, web development, software development, ux design, commercialtp, top saas company, mobile development, commercializers, saas platform development company"
        ></meta>
      </Head>
      <CaseStudiesHeader />
      <CaseStudiesBody />
      <StartProject />
    </Layout>
  );
};

export default CaseStudiesPage;
