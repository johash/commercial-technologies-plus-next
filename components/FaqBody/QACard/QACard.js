import classes from "./QACard.module.scss";
import { Collapse } from "@nextui-org/react";
import { FcUndo } from "react-icons/fc";

const QACard = ({ title, answer }) => {
  return (
    <Collapse
      shadow
      title={title}
      className={classes.QACard}
      arrowIcon={<FcUndo />}
    >
      <p>{answer}</p>
    </Collapse>
  );
};

export default QACard;
