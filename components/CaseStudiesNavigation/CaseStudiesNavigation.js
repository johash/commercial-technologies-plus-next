import Image from "next/image";
import classes from "./CaseStudiesNavigation.module.scss";
import Router from "next/router";

const CaseStudiesNavigation = ({
  previousText,
  previousPath,
  nextText,
  nextPath,
  enablePreviousButton,
}) => {
  return (
    <section className={classes.CaseStudiesNavigation}>
      <div className={classes.Container}>
        {enablePreviousButton ? (
          <div
            className={classes.Previous}
            onClick={() => Router.push(`/case-studies/${previousPath}`)}
          >
            <div className={classes.IconContainer}>
              <Image
                src={"/assets/icons/arrow-left-white.png"}
                layout="fill"
                className={classes.Icon}
              />
            </div>
            <div className={classes.TextContainer}>
              <p>View Previous</p>
              <b>{previousText}</b>
            </div>
          </div>
        ) : null}

        <div
          className={classes.Forward}
          onClick={() => Router.push(`/case-studies/${nextPath}`)}
        >
          <div className={classes.TextContainer}>
            <p>View Next</p>
            <b>{nextText}</b>
          </div>
          <div className={classes.IconContainer}>
            <Image
              src={"/assets/icons/arrow-right-white.png"}
              layout="fill"
              className={classes.Icon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesNavigation;
