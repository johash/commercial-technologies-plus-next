import Layout from "../../components/Layout/Layout";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactSpacer from "../../components/ContactSpacer/ContactSpacer";
import LocationMap from "../../components/LocationMap/LocationMap";

const ContactPage = () => {
  return (
    <Layout>
      <ContactHeader />
      <ContactSpacer />
      <LocationMap />
    </Layout>
  );
};

export default ContactPage;
