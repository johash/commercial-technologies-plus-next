import Layout from "../../../components/Layout/Layout";
import BillableWebPosHeader from "../../../components/BillableWebPosHeader/BillableWebPosHeader";
import BillableWebPosAbout from "../../../components/BillableWebPosAbout/BillableWebPosAbout";
import BillableWebPosDevelopment from "../../../components/BillableWebPosDevelopment/BillableWebPosDevelopment";
import TechnologiesIntegrations from "../../../components/TechnologiesIntegrations/TechnologiesIntegrations";
import StartProject from "../../../components/StartProject/StartProject";

const BillableWebPosPage = () => {
  return (
    <Layout>
      <BillableWebPosHeader />
      <BillableWebPosAbout />
      <BillableWebPosDevelopment />
      <TechnologiesIntegrations />
      <StartProject />
    </Layout>
  );
};

export default BillableWebPosPage;
