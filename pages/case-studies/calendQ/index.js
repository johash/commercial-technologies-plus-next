import Layout from "../../../components/Layout/Layout";
import CalendQHeader from "../../../components/CalendQHeader/CalendQHeader";
import CalendQAbout from "../../../components/CalendQAbout/CalendQAbout";
import CalendQView from "../../../components/CalendQView/CalendQView";
import CalendQDevelopment from "../../../components/CalendQDevelopment/CalendQDevelopment";
import CalendQTechnologies from "../../../components/CalendQTechnologies/CalendQTechnologies";
import CaseStudiesNavigation from "../../../components/CaseStudiesNavigation/CaseStudiesNavigation";
import CaseStudiesStartProject from "../../../components/CaseStudiesStartProject/CaseStudiesStartProject";

const CalendQ = () => {
  return (
    <Layout>
      <CalendQHeader />
      <CalendQAbout />
      <CalendQView />
      <CalendQDevelopment />
      <CalendQTechnologies />
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

export default CalendQ;
