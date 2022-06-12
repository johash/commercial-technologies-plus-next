import classes from "./ServicesBody.module.scss";
import ServicesItem from "./ServicesItem/ServicesItem";

const ServicesBody = () => {
  return (
    <section className={classes.ServicesBody}>
      <ServicesItem
        imageSrc="/assets/services/1.png"
        heading="SaaS Platform Development "
        description="We offer a full range of comprehensive custom SaaS platform development services that are secure, scalable, and conversion-optimized. With our end-to-end approach to SaaS development services, you can now commercialize your ground-breaking idea into a fully fledged SaaS platform."
      />
      <ServicesItem
        invert
        imageSrc="/assets/services/2.png"
        heading="Web Application Development"
        description="Partner with us to conceptualize, design, and develop high-performance, intuitive, secure, and best-in-class web applications by harnessing the next-gen technologies and methodologies. Magnify the commercial value of your growing enterprise to stand out from the crowd."
      />
      <ServicesItem
        imageSrc="/assets/services/3.png"
        heading="Mobile App Development"
        description="Experience digitally transformative and feature-packed cross-platform mobile applications for Android and iOS devices with maximized Return on Investment (ROI). Take the next big leap in your business and deliver a seamless mobile experience with our end-to-end mobile application development services."
      />
      <ServicesItem
        invert
        imageSrc="/assets/services/4.png"
        heading="Productivity Services"
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
      />
      <ServicesItem
        imageSrc="/assets/services/5.png"
        heading="UI/UX Designing"
        description="Commercial Technologies Plus being an award-winning company aspires to deliver unmatched UI & UX design services crafting visually elegant designs by keeping the user at the heart of design considerations. We commerializers strive to bring your ‘Ideas to Life’  by delivering intuitive UI & UX design services and making every engagement unique."
      />
      <ServicesItem
        invert
        imageSrc="/assets/services/6.png"
        heading="Growth Strategies & Market Fit"
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
      />
      <ServicesItem
        imageSrc="/assets/services/7.png"
        heading="BA & Commercial Value Engineering "
        description="Make smarter technology decisions and bring sustainable business value by leveraging industry-specific technologies to identify new potential business opportunities. Allow us to automate and modernize your operations, create tech-driven strategies, and implement the latest technologies and methodologies to deliver maximum benefit in the shortest time."
      />
    </section>
  );
};

export default ServicesBody;
