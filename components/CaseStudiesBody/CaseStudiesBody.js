import classes from "./CaseStudiesBody.module.scss";
import CaseStudyCard from "./CaseStudyCard/CaseStudyCard";
import Router from "next/router";

const CaseStudiesBody = () => {
  return (
    <section className={classes.CaseStudiesBody}>
      <div className={classes.Container}>
        <div className={classes.Heading}>
          <h2>We consider Quality over the Quantity</h2>
          <p>
            Explore a set of our great work completed recently, we work hard to
            accomplish best results within a short period.
          </p>
        </div>
        <div className={classes.StudiesContainer}>
          <div className={classes.ContainerLeft}>
            <div className={classes.BillableWebPos}>
              <CaseStudyCard
                title="Billable Web POS"
                onClick={() => {
                  Router.push("/case-studies/billable-web-pos");
                }}
                imageUrl={"/assets/case-studies/1.png"}
              />
            </div>
            <div className={classes.BillableECommerce}>
              <CaseStudyCard
                title="Billable eCommerce"
                imageUrl={"/assets/case-studies/2.png"}
              />
            </div>
            <div className={classes.CalendQ}>
              <CaseStudyCard
                title="CalendQ"
                imageUrl={"/assets/case-studies/3.png"}
              />
            </div>
          </div>
          <div className={classes.ContainerMid}>
            <div className={classes.BillableMobilePos}>
              <CaseStudyCard
                title="Billable Mobile POS"
                onClick={() => {
                  Router.push("/case-studies/billable-mobile-pos");
                }}
                imageUrl={"/assets/case-studies/4.png"}
              />
            </div>
            <div className={classes.BillableOrderManagement}>
              <CaseStudyCard
                title="Billable Order Management"
                imageUrl={"/assets/case-studies/5.png"}
              />
            </div>
            <div className={classes.DialogSmartCare}>
              <CaseStudyCard
                title="Dialog SmartCare"
                imageUrl={"/assets/case-studies/4.png"}
              />
            </div>
          </div>
          <div className={classes.ContainerRight}>
            <div className={classes.BillableSimpleInvoice}>
              <CaseStudyCard
                title="Billable Simple Invoice"
                imageUrl={"/assets/case-studies/7.png"}
              />
            </div>
            <div className={classes.CommercialPrime}>
              <CaseStudyCard
                title="Commerecial Prime"
                imageUrl={"/assets/case-studies/8.png"}
              />
            </div>
          </div>
        </div>
        <div className={classes.Footer}>
          <p>
            Note: We’ve only published the legally disclosive case studies above
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesBody;
