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
          <div className={classes.SubContainer}>
            <CaseStudyCard title="Billable Web POS" onClick={() => {Router.push('/case-studies/billable-web-pos')}}/>
            <CaseStudyCard title="Billable Mobile POS" onClick={() => {Router.push('/case-studies/billable-mobile-pos')}}/>
            <CaseStudyCard title="Billable Simple Invoice" />
            <CaseStudyCard title="Billable eCommerce" />
            <CaseStudyCard title="Billable Order Management" />
            <CaseStudyCard title="Commerecial Prime" />
            <CaseStudyCard title="CalendQ" />
            <CaseStudyCard title="Dialog SmartCare" />
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
