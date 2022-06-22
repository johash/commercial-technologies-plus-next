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
          content="Review our case studies that helped our clientele to evolve to the next level. Get inspired by the value we delivered."
        />
        <title>Case Studies | Commercial Technologies Plus</title>
      </Head>
      <CaseStudiesHeader />
      <CaseStudiesBody />
      <StartProject />
    </Layout>
  );
};

export default CaseStudiesPage;
