import Layout from "../../../components/Layout/Layout";
import BillableMobilePosHeader from "../../../components/BillableMobilePosHeader/BillableMobilePosHeader";
import BillableMobilePosAbout from "../../../components/BillableMobilePosAbout/BillableMobilePosAbout";
import BillableMobilePosFeatures from "../../../components/BillableMobilePosFeatures/BillableMobilePosFeatures";

const BillableMobilePos = () => {
  return (
    <Layout>
      <BillableMobilePosHeader />
      <BillableMobilePosAbout />
      <BillableMobilePosFeatures />
    </Layout>
  );
};

export default BillableMobilePos;
