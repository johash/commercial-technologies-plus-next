import Image from "next/image";
import classes from "./CommercialPrimeDevelopment.module.scss";
import DevCard from "./DevCard/DevCard";

const CommercialPrimeDevelopment = () => {
  return (
    <section className={classes.CommercialPrimeDevelopment}>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            alt="commercial prime development and commitment"
            src={"/assets/commercial-prime-development.png"}
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
              icon="/assets/case-studies/dev-card-icons/1.3.png"
            />
            <DevCard
              text={"Back End"}
              icon="/assets/case-studies/dev-card-icons/2.3.png"
            />
            <DevCard
              text={"UI/UX"}
              icon="/assets/case-studies/dev-card-icons/3.3.png"
            />
            <DevCard
              text={"Research"}
              icon="/assets/case-studies/dev-card-icons/4.3.png"
            />
          </div>
          <div className={classes.Bottom}>
            <DevCard
              text={"Integration"}
              icon="/assets/case-studies/dev-card-icons/5.3.png"
              green
            />
            <DevCard
              text={"Prototyping"}
              icon="/assets/case-studies/dev-card-icons/6.3.png"
              green
            />
            <DevCard
              text={"Maintenance"}
              icon="/assets/case-studies/dev-card-icons/7.3.png"
              green
            />
            <DevCard
              text={"Support"}
              icon="/assets/case-studies/dev-card-icons/8.3.png"
              green
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialPrimeDevelopment;
