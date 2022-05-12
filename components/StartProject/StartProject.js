import classes from "./StartProject.module.scss";
import Image from "next/image";

const StartProject = () => {
  return (
    <div className={classes.StartProject}>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <h2>Let's get started your project with us</h2>
          <p>
            Whatever the project you need to get started with Commercializers
            will be started with an engagement call.
          </p>
          <p>
            We love maintaining usability and hassle-free client experience in
            our onboarding journey
          </p>
          <div className={classes.ButtonContainer}>
            <button className={[classes.Btn, classes.BtnPrimary].join(" ")}>
              Schedule a Call
            </button>
            <button className={[classes.Btn, classes.BtnSecondary].join(" ")}>
              Leave a Message
            </button>
          </div>
        </div>
        <div className={classes.ImageContainer}>
          <div className={classes.Image}>
            <Image
              src="/assets/robot.png"
              layout="responsive"
              height={420}
              width={393}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
