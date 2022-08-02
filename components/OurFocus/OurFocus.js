import { useState } from "react";
import classes from "./OurFocus.module.scss";
import FocusCard from "../UI/FocusCard/FocusCard";
import Image from "next/image";

const OurFocus = () => {
  const [selectedCardId, setSelectedCardId] = useState(-1);

  return (
    <section className={classes.OurFocus}>
      <h2>Where we are focusing on</h2>
      <div className={classes.FocusCardContainer}>
        <FocusCard
          id="1"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/1.png"
          heading="Solid Core with Scalability"
          description="Every product has a visionary plan to drive ahead. Never let your product’s journey be a dead end.We build  scalable platforms with the right technologies.Start with a MVP, drive your platform towards a unicorn with confidence."
        />
        <FocusCard
          id="2"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/2.png"
          heading="Infrastructure & Deployment"
          description="We place your platform in a reliable cloud infrastructure with scalability and stability. Get deployed on Amazon Web Services (AWS) and Google Cloud Platform (GCP) with integrated CI/CD pipelines."
        />
        <FocusCard
          id="3"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/3.png"
          heading="Commercial Value Engineering"
          description="Your success is our success. We support you to sharpen the commercial value of your product. Product marketing Blend will be added to your concept before the development starts."
        />

        <FocusCard
          id="4"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/4.png"
          heading="Seamless User Experience"
          description="Users love great apps without any force. It's not only our catchy user interfaces, we have commercializers who can build engaging and seamless storytelling experiences through the user journey.Get engineered by UI/UX Commercializers."
        />
        <FocusCard
          id="5"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/5.png"
          heading="Quality & Stability"
          description="Your product is our prestige. We assure the functional and non functional quality on each click and pixel. Quality assurance process will begin at the initiation of the project from the core code to the usability."
        />
        <FocusCard
          id="6"
          selectedCardId={selectedCardId}
          setSelectedCardId={setSelectedCardId}
          icon="/assets/icons/6.png"
          heading="Integrations & Exposure"
          description="Connect your product with global partners & apps easily. We provide well documented RESTful APIs on each function of the product. Integrate, collaborate and expose to the world seamlessly."
        />
      </div>
      <div className={classes.DiamondContainer}>
        <div className={classes.Breather}>
          <div className={classes.DiamondImage}>
            <Image
              layout="fixed"
              objectFit="contain"
              width={60}
              height={60}
              src="/assets/icons/diamond.png"
            />
          </div>
        </div>
      </div>
      <div className={classes.OurFocusFooter}>
        <h4>Commercializers will get you covered in all the way</h4>
        <p>Commercialize your product with confidence</p>
      </div>
    </section>
  );
};

export default OurFocus;
