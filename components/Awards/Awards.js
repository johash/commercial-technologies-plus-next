import classes from "./Awards.module.scss";
import Image from "next/image";

const Awards = () => {
  return (
    <div className={classes.Awards}>
      <div className={classes.Container}>
        <div className={classes.Content}>
          <h2>Award winning SaaS platform innovators</h2>
          <div className={classes.AwardCards}>
            <div className={classes.Card}>
              <div>
                <h5>National Winner</h5>
              </div>
              <span>Best Innovation in Business Process Management</span>
              <p>SLASSCOM National Ingenuity Awards 2021</p>
            </div>
            <div className={classes.Card}>
              <div>
                <h5>National Winner</h5>
              </div>
              <span>Best Innovation in Business Process Management</span>
              <p>SLASSCOM National Ingenuity Awards 2021</p>
            </div>
          </div>
          <div>
            <button className={[classes.Btn, classes.BtnTrans].join(" ")}>
              View All Awards
            </button>
          </div>
        </div>
        <div className={classes.Image}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards.png"
              layout="responsive"
              height={440}
              width={316}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
