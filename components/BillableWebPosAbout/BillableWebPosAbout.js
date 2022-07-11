import classes from "./BillableWebPosAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const BillableWebPosAbout = () => {
  return (
    <section className={classes.BillableWebPosAbout}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h2>About</h2>
          <p>
            Billable WebPOS is a cloud-based WebPOS offering numerous features
            required to manage a business from scratch. This is a platform
            independent all in one cloud based WebPOS to manage your Sales,
            Purchases, Inventory, Customers, Suppliers Payments and many more.
            It comes with a beautiful easy to use dashboard, and you can easily
            integrate this with every aspect of your business.
          </p>
        </div>
        <div className={classes.CardContainer}>
          <AboutCard
            imageUrl="/assets/billable-web-pos/1.png"
            title="Advance POS Terminal"
          />
          <AboutCard
            imageUrl="/assets/billable-web-pos/2.png"
            title="Manage your Inventory"
          />
          <AboutCard
            imageUrl="/assets/billable-web-pos/3.png"
            title="Sales Analytics & Insights"
          />
          <AboutCard
            imageUrl="/assets/billable-web-pos/4.png"
            title="SMS & Payment Gateways"
          />
          <AboutCard
            imageUrl="/assets/billable-web-pos/5.png"
            title="Manage Credit Payments"
          />
        </div>
      </div>
    </section>
  );
};

export default BillableWebPosAbout;
