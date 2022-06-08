import classes from "./PageNotFound.module.scss";
import Image from "next/image";
import Router from "next/router";

const PageNotFound = () => {
  return (
    <section className={classes.PageNotFound}>
      <div className={classes.Wrapper}>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/404.png"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
      <div className={classes.TextContent}>
        <h1>Whoops Page not found!</h1>
        <p>
          The page you are looking for isn’t found or has been moved, we suggest
          you go back home
        </p>
        <div className={classes.ButtonContainer}>
          <button
            className={[classes.Btn, classes.BtnSecondaryOutline].join(" ")}
            onClick={() => Router.push("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
