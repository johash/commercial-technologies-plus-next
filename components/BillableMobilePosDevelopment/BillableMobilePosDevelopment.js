import classes from "./BillableMobilePosDevelopment.module.scss";
import Image from "next/image";
import DevCard from "./DevCard/DevCard";

const BillableMobilePosDevelopment = () => {
  return (
    <section className={classes.BillableMobilePosDevelopment}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            alt="mobile pos development and commitment"
            src={"/assets/mobile-pos-development-commitment.png"}
            layout="fill"
            className={classes.Image}
          />
        </div>
        <div className={classes.TextContainer}>
          <h2>Development & Our Commitment</h2>
          <p>
            We started the project with a strategy that prioritized the whole
            user experience. Throughout the project, we ensured the
            responsiveness and compatibility to deliver a perfect mobile
            application that enables users to conveniently manage their business
            from any device. We took care of everything from the initial market
            research to the final deployment of the fully functional mobile
            application.
          </p>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.Top}>
            <DevCard
              text={"Front-End"}
              icon="/assets/case-studies/dev-card-icons/1.png"
            />
            <DevCard
              text={"Back End"}
              icon="/assets/case-studies/dev-card-icons/2.png"
            />
            <DevCard
              text={"UI/UX"}
              icon="/assets/case-studies/dev-card-icons/3.png"
            />
            <DevCard
              text={"Research"}
              icon="/assets/case-studies/dev-card-icons/4.png"
            />
          </div>
          <div className={classes.Bottom}>
            <DevCard
              text={"Integration"}
              icon="/assets/case-studies/dev-card-icons/5.png"
              green
            />
            <DevCard
              text={"Prototyping"}
              icon="/assets/case-studies/dev-card-icons/6.png"
              green
            />
            <DevCard
              text={"Maintenance"}
              icon="/assets/case-studies/dev-card-icons/7.png"
              green
            />
            <DevCard
              text={"Support"}
              icon="/assets/case-studies/dev-card-icons/8.png"
              green
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BillableMobilePosDevelopment;
