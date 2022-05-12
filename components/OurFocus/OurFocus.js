import classes from "./OurFocus.module.scss";
import FocusCard from "../UI/FocusCard/FocusCard";
import Image from "next/image";

const OurFocus = () => {
  return (
    <section className={classes.OurFocus}>
      <h2>Where we are focusing on</h2>
      <div className={classes.FocusCardContainer}>
        <FocusCard
          icon="/assets/icons/1.png"
          heading="Solid Core with Scalability"
          description="Every product has a visionary plan to drive ahead. We don’t let your product’s journey be a deadend. Start with a MVP, drive your platform towards an unicorn with confidence. We build scalable platforms with the right technologies."
        />
        <FocusCard
          icon="/assets/icons/2.png"
          heading="Infrastructure & Deployment"
          description="We place your platform in a reliable cloud infrastructure with scalability and stability. Get deployed on Amazon Web Services (AWS) and Google Cloud Platform (GCP) with integrated CI/CD pipelines."
        />
        <FocusCard
          icon="/assets/icons/3.png"
          heading="Commercial Value Engineering"
          description="Your success is our success. We support you to sharpen the commercial value of your product. Product marketing Blend will be added to your concept before the development starts."
        />

        <FocusCard
          icon="/assets/icons/4.png"
          heading="Seamless User Experience"
          description="Users love great apps without any force. It’s not all about catchy user interfaces, we build engaging and seamless storytelling experiences through the user journey. Get engineered by our UI/UX Commercializers."
        />
        <FocusCard
          icon="/assets/icons/5.png"
          heading="Quality & Stability"
          description="Your product is our prestige. We assure the functional and non functional quality on each click and pixel. Quality assurance process will begin at the initiation of the project from the core code to the usability."
        />
        <FocusCard
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
