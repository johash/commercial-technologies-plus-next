import classes from "./BillableEcommerceAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const BillableEcommerceAbout = () => {
  return (
    <section className={classes.BillableEcommerceAbout}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h2>About</h2>
          <p>
            Experience a cutting-edge E-Commerce platform that allows you to
            seamlessly list, optimize, advertise and sell products of your
            business. From the storefront to the checkout, customize your online
            business to provide an excellent shopping experience to convert
            shoppers to your customers.
          </p>
        </div>
        <div className={classes.CardContainer}>
          <AboutCard
            title={"Professional E-Commerce Store"}
            imageUrl="/assets/billable-ecommerce-platform/1.png"
          />
          <AboutCard
            title={"Market your brand"}
            imageUrl="/assets/billable-ecommerce-platform/2.png"
            light
          />
          <AboutCard
            title={"Easy customization"}
            imageUrl="/assets/billable-ecommerce-platform/3.png"
          />
          <AboutCard
            title={"Reach new customers"}
            imageUrl="/assets/billable-ecommerce-platform/4.png"
            light
          />
        </div>
      </div>
    </section>
  );
};

export default BillableEcommerceAbout;
