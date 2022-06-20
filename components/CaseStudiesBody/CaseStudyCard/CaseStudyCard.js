import Image from "next/image";
import classes from "./CaseStudyCard.module.scss";

const CaseStudyCard = (props) => {
  return (
    <div className={classes.CaseStudyCard}>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <h6>{props.title}</h6>
          <div className={classes.ButtonContainer}>
            <button>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/arrow-right.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </button>
          </div>
        </div>
        <div className={classes.ImageContainer}></div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
