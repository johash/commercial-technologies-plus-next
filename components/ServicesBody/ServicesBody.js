import classes from "./ServicesBody.module.scss";
import ServicesItem from "./ServicesItem/ServicesItem";

const ServicesBody = () => {
  return (
    <section className={classes.ServicesBody}>
      <ServicesItem
        imageSrc="/assets/services/1.png"
        heading="SaaS Platform Development "
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
      />
      <ServicesItem
        invert
        imageSrc="/assets/services/2.png"
        heading="Web Application Development"
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
      />
      <ServicesItem
        imageSrc="/assets/services/3.png"
        heading="Mobile App Development"
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
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
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
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
        description="Tincidunt in massa quam sagittis tempus, sed nulla pellesque sodales. Fringilla egestas mollis malesuada tortor et sceleri. Donec lectus lacinia sed quis risus commodo. Viverra in sit lectus turpis et. Ultrices accumsan, consequat acinia sed quis sodales risus lorem."
      />
    </section>
  );
};

export default ServicesBody;
