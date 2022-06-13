import classes from "./ComingSoon.module.scss";
import Lottie from "react-lottie";
import ComingSoonAnimation from "../../public/assets/animation/coming_soon.json";
import Router from "next/router";

const ComingSoon = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ComingSoonAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={classes.ComingSoon}>
      <div className={classes.Container}>
        <div className={classes.LottieContainer}>
          <Lottie options={defaultOptions} height={480} />
        </div>
        <div className={classes.TextContent}>
          <h1>Hey, We are upgrading this page</h1>
          <p>
            The page you are looking for is currently upgrading on. Page will be
            available soon.
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
      </div>
    </section>
  );
};

export default ComingSoon;
