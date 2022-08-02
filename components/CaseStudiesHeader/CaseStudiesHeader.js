import Image from "next/image";
import classes from "./CaseStudiesHeader.module.scss";

const CaseStudiesHeader = () => {
  return (
    <section className={classes.CaseStudiesHeader}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h1>
            Let the actions speak for itself <span>Get Experienced!</span>
          </h1>
          <p>
            Explore our case studies across multiple tech markets and
            industries. Check out our success stories!
          </p>
          <div className={classes.ButtonContainer}>
            <button className={[classes.Btn, classes.BtnTrans].join(" ")}>
              Get in Touch!
            </button>
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <div className={classes.ImageWrapper}>
            <Image
              src="/assets/case-studies-background.png"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHeader;
