import classes from "./Jumbotron.module.scss";
import SectionOne from "./SectionOne/SectionOne";

const Jumbotron = () => {
  return (
    <section className={classes.Jumbotron}>
      <SectionOne />
    </section>
  );
};

export default Jumbotron;
