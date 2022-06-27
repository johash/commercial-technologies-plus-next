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
          content="commercialtechnologies contact, contact us, SaaS company, SaaS, software company, software development, web development, mobile development, SaaS platform development company"
        ></meta>
      </Head>
      <ContactHeader />
      <ContactSpacer />
      <LocationMap />
    </Layout>
  );
};

export default ContactPage;
