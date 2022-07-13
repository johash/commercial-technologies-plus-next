import Layout from "../../../components/Layout/Layout";
import BillableWebPosHeader from "../../../components/BillableWebPosHeader/BillableWebPosHeader";
import BillableWebPosAbout from "../../../components/BillableWebPosAbout/BillableWebPosAbout";
import BillableWebPosDevelopment from "../../../components/BillableWebPosDevelopment/BillableWebPosDevelopment";
import TechnologiesIntegrations from "../../../components/TechnologiesIntegrations/TechnologiesIntegrations";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const BillableWebPosPage = () => {
  return (
    <Layout>
      <BillableWebPosHeader />
      <BillableWebPosAbout />
      <BillableWebPosDevelopment />
      <TechnologiesIntegrations />
      <CaseStudiesNavigation
        nextText="Billable Mobile App"
        nextPath={"billable-mobile-pos"}
      />
      <CaseStudiesStartProject />
    </Layout>
  );
};

export default BillableWebPosPage;
