import HeaderStudio from "../../components/UXStudio/Header/HeaderStudio";
import Jumbotron from "../../components/UXStudio/Jumbotron/Jumbotron";
import Highlights from "../../components/UXStudio/Highlights/Highlights";
import TrustedBy from "../../components/UXStudio/TrustedBy/TrustedBy";
import DesignForBusiness from "../../components/UXStudio/DesignForBusiness/DesignForBusiness";
import OurRecipe from "../../components/UXStudio/OurRecipe/OurRecipe";
import Portfolio from "../../components/UXStudio/Portfolio/Portfolio";
import Pricing from "../../components/UXStudio/Pricing/Pricing";
import FAQ from "../../components/UXStudio/FAQ/FAQ";
import Contact from "../../components/UXStudio/Contact/Contact";
import Footer from "../../components/Layout/Footer/Footer";
import MobileMenu from "../../components/UXStudio/Header/MobileMenu/MobileMenu";
import { useWindowSize } from "../../hooks/useWindowSize";
import classes from "./index.module.scss";

import { useRef } from "react";

const UXStudioPage = () => {
  const windowSize = useWindowSize();

  const ourProcess = useRef(null);
  const whyUs = useRef(null);
  const portfolio = useRef(null);
  const pricing = useRef(null);
  const faq = useRef(null);

  return (
    <main className={classes.UXStudioPage}>
      <HeaderStudio
        ourProcess={ourProcess}
        whyUs={whyUs}
        portfolio={portfolio}
        pricing={pricing}
        faq={faq}
      />
      {windowSize.width <= 428 ? (
        <MobileMenu
          ourProcess={ourProcess}
          whyUs={whyUs}
          portfolio={portfolio}
          pricing={pricing}
          faq={faq}
        />
      ) : null}
      <Jumbotron />
      <Highlights />
      <TrustedBy />
      <DesignForBusiness refProp={ourProcess} />
      <OurRecipe refProp={whyUs} />
      <Portfolio refProp={portfolio} />
      <Pricing refProp={pricing} />
      <FAQ refProp={faq} />
      <Contact />
      <Footer />
    </main>
  );
};

export default UXStudioPage;
