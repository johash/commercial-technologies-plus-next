import Layout from "../../../components/Layout/Layout";
import BillableMobilePosHeader from "../../../components/BillableMobilePosHeader/BillableMobilePosHeader";
import BillableMobilePosAbout from "../../../components/BillableMobilePosAbout/BillableMobilePosAbout";
import BillableMobilePosFeatures from "../../../components/BillableMobilePosFeatures/BillableMobilePosFeatures";
import BillableMobilePosDevelopment from "../../../components/BillableMobilePosDevelopment/BillableMobilePosDevelopment";
import TechnologiesIntegrations from "../../../components/TechnologiesIntegrations/TechnologiesIntegrations";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const BillableMobilePos = () => {
  return (
    <Layout>
      <BillableMobilePosHeader />
      <BillableMobilePosAbout />
      <BillableMobilePosFeatures />
      <BillableMobilePosDevelopment />
      <TechnologiesIntegrations />
      <CaseStudiesNavigation
        enablePreviousButton
        previousText={"Billable Web App"}
        previousPath="billable-web-pos"
        nextText={"Billable Simple Invoice"}
        nextPath="billable-simple-invoice"
      />
      <CaseStudiesStartProject />
    </Layout>
  );
};

export default BillableMobilePos;
