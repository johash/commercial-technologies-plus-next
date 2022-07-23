import Layout from "../../../components/Layout/Layout";
import CommercialPrimeHeader from "../../../components/CommercialPrimeHeader/CommercialPrimeHeader";
import CommercialPrimeAbout from "../../../components/CommercialPrimeAbout/CommercialPrimeAbout";
import CommercialPrimeView from "../../../components/CommercialPrimeView/CommercialPrimeView";
import CommercialPrimeDevelopment from "../../../components/CommercialPrimeDevelopment/CommercialPrimeDevelopment";
import CommercialPrimeTechnologies from "../../../components/CommercialPrimeTechnologies/CommercialPrimeTechnologies";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const CommercialPrime = () => {
  return (
    <Layout>
      <CommercialPrimeHeader />
      <CommercialPrimeAbout />
      <CommercialPrimeView />
      <CommercialPrimeDevelopment />
      <CommercialPrimeTechnologies />
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

export default CommercialPrime;
