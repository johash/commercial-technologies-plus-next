import classes from "./Highlights.module.scss";

const Highlights = () => {
  return (
    <section className={classes.Highlights}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <p>People ignore designs that ignores people.</p>
        </div>
        <div className={classes.TextContainer}>
          <p>Proper UX makes them stay.</p>
        </div>
        <div className={classes.TextContainer}>
          <p>We deliver best solutions for you and your business.</p>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
