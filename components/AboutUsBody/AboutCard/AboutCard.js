import classes from "./AboutCard.module.scss";

const AboutCard = (props) => {
  return (
    <div
      className={
        props.green
          ? [classes.Card, classes.Green].join(" ")
          : [classes.Card, classes.Blue].join(" ")
      }
    >
      <span>{props.content}</span>
    </div>
  );
};

export default AboutCard;
