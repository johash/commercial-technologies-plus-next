import classes from "./FaqHeader.module.scss";

const FaqHeader = () => {
  return (
    <section className={classes.FaqHeader}>
      <div className={classes.Container}>
        <h1>FAQs</h1>
      </div>
    </section>
  );
};

export default FaqHeader;
