import Layout from "../../../components/Layout/Layout";
import BillableEcommerceHeader from "../../../components/BillableEcommerceHeader/BillableEcommerceHeader";
import BillableEcommerceAbout from "../../../components/BillableEcommerceAbout/BillableEcommerceAbout";
import BillableEcommerceDevelopment from "../../../components/BillableEcommerceDevelopment/BillableEcommerceDevelopment";
import TechnologiesIntegrations from "../../../components/TechnologiesIntegrations/TechnologiesIntegrations";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const BillableEcommercePlatform = () => {
  return (
    <Layout>
      <BillableEcommerceHeader />
      <BillableEcommerceAbout />
      <BillableEcommerceDevelopment />
      <TechnologiesIntegrations />
      <CaseStudiesNavigation
        enablePreviousButton
        previousText={"Billable Simple Invoice"}
        previousPath="billable-simple-invoice"
        nextText={"Billable Order Management"}
        nextPath="billable-order-management"
      />
      <CaseStudiesStartProject />
    </Layout>
  );
};

export default BillableEcommercePlatform;
