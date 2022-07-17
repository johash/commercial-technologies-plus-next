import Layout from "../../../components/Layout/Layout";
import BillableSimpleInvoiceHeader from "../../../components/BillableSimpleInvoiceHeader/BillableSimpleInvoiceHeader";
import BillableSimpleInvoiceAbout from "../../../components/BillableSimpleInvoiceAbout/BillableSimpleInvoiceAbout";
import BillableSimpleInvoiceDevelopment from "../../../components/BillableSimpleInvoiceDevelopment/BillableSimpleInvoiceDevelopment";
import TechnologiesIntegrations from "../../../components/TechnologiesIntegrations/TechnologiesIntegrations";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const BillableSimpleInvoicePage = () => {
  return (
    <Layout>
      <BillableSimpleInvoiceHeader />
      <BillableSimpleInvoiceAbout />
      <BillableSimpleInvoiceDevelopment />
      <TechnologiesIntegrations />
      <CaseStudiesNavigation
        enablePreviousButton
        previousText={"Billable Mobile POS"}
        previousPath="billable-mobile-pos"
        nextText={"Billable Order Management"}
        nextPath="billable-order-management"
      />
      <CaseStudiesStartProject />
    </Layout>
  );
};

export default BillableSimpleInvoicePage;
