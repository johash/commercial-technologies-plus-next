import Layout from "../../components/Layout/Layout";
import ContactHeader from "../../components/ContactHeader/ContactHeader";
import ContactSpacer from "../../components/ContactSpacer/ContactSpacer";
import LocationMap from "../../components/LocationMap/LocationMap";

import Head from "next/head";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="We are open to discuss and commercialize your innovative ideas. Contact Us Commercializers today to build the right product with the right team."
        />
        <title>Contact Us | Commercial Technologies Plus</title>
        <meta
          name="keywords"
          content="saas, saas company, commercialtechnologies, contact us, web development, software development, ux design, commercialtp, top saas company, mobile development, commercializers, saas platform development company"
        ></meta>
      </Head>
      <ContactHeader />
      <ContactSpacer />
      <LocationMap />
    </Layout>
  );
};

export default ContactPage;
