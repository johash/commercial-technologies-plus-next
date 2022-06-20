import Layout from "../../components/Layout/Layout";
import CaseStudiesHeader from "../../components/CaseStudiesHeader/CaseStudiesHeader";
import CaseStudiesBody from "../../components/CaseStudiesBody/CaseStudiesBody";
import StartProject from "../../components/StartProject/StartProject";

const CaseStudiesPage = () => {
  return (
    <Layout>
      <CaseStudiesHeader />
      <CaseStudiesBody />
      <StartProject />
    </Layout>
  );
};

export default CaseStudiesPage;
