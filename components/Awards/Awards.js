import classes from "./Awards.module.scss";
import Image from "next/image";
import Router from "next/router";

const Awards = () => {
  return (
    <div className={classes.Awards}>
      <h2>Award winning SaaS platform innovators</h2>
      <div className={classes.Container}>
        <div className={classes.Content}>
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
                <h5>Western Province Winner</h5>
              </div>
              <span>Best Innovation in Business Process Management</span>
              <p>SLASSCOM National Ingenuity Awards 2021</p>
            </div>
          </div>
          <div className={classes.ButtonContainer}>
            <button
              className={[classes.Btn, classes.BtnTrans].join(" ")}
              onClick={() => Router.push("/awards")}
            >
              View All Awards
            </button>
          </div>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards.png"
              alt="SLASSCOM National Ingenuity Awards 2021 image"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
