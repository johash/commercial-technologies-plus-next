import classes from "./BillableMobilePosAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const BillableMobilePosAbout = () => {
  return (
    <section className={classes.BillableMobilePosAbout}>
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
              title="Simple Mobile POS"
              imageUrl="/assets/billable-mobile-pos/1.png"
            />
            <AboutCard
              title="Create Invoices On the Go"
              imageUrl="/assets/billable-mobile-pos/2.png"
            />
            <AboutCard
              title="Run Your Bosiness from Anywhere"
              imageUrl="/assets/billable-mobile-pos/3.png"
            />
            <AboutCard
              title="Collect Payments Faster"
              imageUrl="/assets/billable-mobile-pos/4.png"
            />
          </div>
        
      </div>
    </section>
  );
};

export default BillableMobilePosAbout;
