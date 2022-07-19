import classes from "./CalendQAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const CalendQAbout = () => {
  return (
    <section className={classes.CalendQAbout}>
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
            title="Schedule Meetings, Appointments and Events"
            imageUrl="/assets/calendQ/1.png"
          />
          <AboutCard
            title="Streamline Your Scheduling Process"
            imageUrl="/assets/calendQ/2.png"
          />
          <AboutCard
            title="Client Bookings Straight into Your Calendar"
            imageUrl="/assets/calendQ/3.png"
          />
          <AboutCard
            title="Integration with 3rd Party Integrations"
            imageUrl="/assets/calendQ/4.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CalendQAbout;
