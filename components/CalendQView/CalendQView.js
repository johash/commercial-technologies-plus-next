import classes from "./CalendQView.module.scss";
import Image from "next/image";

const CalendQView = () => {
  return (
    <section>
      <div className={classes.Container}>
        <div className={classes.ImageContainer}>
          <Image
            alt="calendQ screenshots"
            src={"/assets/calendQ-ss.png"}
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendQView;
