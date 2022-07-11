import Image from "next/image";
import classes from "./BillableWebPosDevelopment.module.scss";

const BillableWebPosDevelopment = () => {
  return (
    <section className={classes.BillableWebPosDevelopment}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h2>Development</h2>
          <p>
            We handled everything from scoping and design to technical
            implementation and support.
          </p>
          <p>
            Initially, we focused on the Business Analysis part of the project
            in order to cater to the requirements of the client’s target market
            successfully. Following that, we manage all the aspects including
            Business Process, Designing, Implementation & Development of the
            project to deliver a fully functional and responsive WebPOS.
          </p>
        </div>
      </div>
      <div className={classes.ImageWrapper}>
        <div className={classes.ImageContainer}>
          <Image
            src={"/assets/web-pos-development.png"}
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default BillableWebPosDevelopment;
