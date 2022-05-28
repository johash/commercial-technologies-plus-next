import classes from "./InfoCard.module.scss";

const InfoCard = (props) => {
  return (
    <div className={classes.Card}>
      <p>{props.heading}</p>
      <span>{props.value}</span>
    </div>
  );
};

export default InfoCard;
