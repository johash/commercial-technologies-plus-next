import classes from "../styles/index.module.scss";
import Layout from "../components/Layout/Layout";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import OurFocus from "../components/OurFocus/OurFocus";
import Awards from "../components/Awards/Awards";
import Commercialize from "../components/Commercialize/Commercialize";
import StartProject from "../components/StartProject/StartProject";
import TechStack from "../components/TechStack/TechStack";

import Head from "next/head";
import Link from "next/link";
import CookieConsent from "react-cookie-consent";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content="Commercial Technologies Plus is a trusted SaaS product development company excels at building secure and scalable enterprise-class software solutions."
        />
        <title>Commercialize Your Ideas | Commercial Technologies Plus</title>
        <link rel="canonical" href="https://www.commercialtp.com/" />
        <meta
          name="keywords"
          content="saas, saas company, commercialtechnologies, web development, software development, ux design, commercialtp, top saas company, mobile development, commercializers, saas platform development company"
        ></meta>
      </Head>

      <Jumbotron />
      <OurFocus />
      <Commercialize />
      <Awards />
      <TechStack />
      <StartProject />
      <CookieConsent
        location="bottom"
        buttonText="Accept and close"
        overlay
        containerClasses={classes.CookieConsentContainer}
        buttonClasses={classes.CookieConsentButton}
      >
        We use cookies to ensure you get the best experience. By using our
        website you agree to our{" "}
        <Link href="/privacy-policy">Privacy policy.</Link>
      </CookieConsent>
    </Layout>
  );
};

export default HomePage;
