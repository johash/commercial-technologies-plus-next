import classes from "./BillableSimpleInvoiceAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const BillableSimpleInvoiceAbout = () => {
  return (
    <section className={classes.BillableMobilePosAbout}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h2>About</h2>
          <p>
            The strength of Billable Simple Invoice is its simplicity. Create
            and send personalized invoices from wherever you want via an SMS or
            an Email as a link, to collect your payments instantly. Despite its
            simplicity, it has a ton of features, including an integrated
            payment gateway (IPG), quick invoicing, the ability to manage a
            customer base, and track and monitor invoices. You will get notified
            through the simple dashboard when an invoice is viewed, becomes due,
            or gets paid.
          </p>
        </div>

        <div className={classes.CardContainer}>
          <AboutCard
            title="Integrated IPG"
            imageUrl="/assets/billable-simple-invoice/1.png"
          />
          <AboutCard
            title="Share invoices via SMS & Email"
            imageUrl="/assets/billable-simple-invoice/2.png"
          />
          <AboutCard
            title="Create professional invoices"
            imageUrl="/assets/billable-simple-invoice/3.png"
          />
          <AboutCard
            title="Manage your customer base"
            imageUrl="/assets/billable-simple-invoice/4.png"
          />
          <AboutCard
            title="Quick billing & invoicing"
            imageUrl="/assets/billable-simple-invoice/5.png"
          />
        </div>
      </div>
    </section>
  );
};

export default BillableSimpleInvoiceAbout;
