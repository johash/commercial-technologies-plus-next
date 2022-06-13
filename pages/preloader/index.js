import classes from "./index.module.scss";
import Lottie from "react-lottie";
import PreloaderAnimation from "../../public/assets/animation/preloader.json";

const Preloader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PreloaderAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section className={classes.Preloader}>
      <div className={classes.Container}>
        <div className={classes.LottiContainer}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </section>
  );
};

export default Preloader;
