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

const UXStudioPage = () => {
  return (
    <main>
      <HeaderStudio />
      <Jumbotron />
      <Highlights />
      <TrustedBy />
      <DesignForBusiness />
      <OurRecipe />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default UXStudioPage;
