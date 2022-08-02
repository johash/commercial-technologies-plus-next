import classes from "./StartProject.module.scss";
import Image from "next/image";
import Router from "next/router";

const StartProject = () => {
  return (
    <div className={classes.StartProject}>
      <div className={classes.MainContainer}>
        <h2>Kickstart your project with us</h2>
        <div className={classes.Container}>
          <div className={classes.Content}>
            <p>
              Your project is just one call away with commercializers. Get
              started with an engagement call.
            </p>
            <p>
              We love maintaining usability and hassle-free client experience in
              our onboarding journey
            </p>
            <div className={classes.ButtonContainer}>
              <button
                className={[classes.Btn, classes.BtnPrimary].join(" ")}
                onClick={() =>
                  Router.push("https://calendly.com/supunmayushan/30min")
                }
              >
                Schedule a Call
              </button>
              <button
                className={[classes.Btn, classes.BtnSecondary].join(" ")}
                onClick={() => Router.push("/contact-us")}
              >
                Leave a Message
              </button>
            </div>
          </div>
          <div className={classes.ImageContainer}>
            <div className={classes.ImageWrapper}>
              <Image
                src="/assets/robot.png"
                layout="fill"
                className={classes.Image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
