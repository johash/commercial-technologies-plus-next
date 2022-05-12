import classes from "./Commercialize.module.scss";
import Image from "next/image";

const Commercialize = () => {
  return (
    <div className={classes.Commercialize}>
      <div className={classes.Container}>
        <h2>Commercialize your ideas worldwide</h2>
        <div className={classes.MapContainer}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/map.png"
              layout="responsive"
              height={576}
              width={1024}
            />
          </div>
          <div className={classes.Card1}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/startups.png"
                  layout="responsive"
                  width={20}
                  height={30}
                />
              </div>

              <span>Startups</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let's get on the market
                quickly
              </p>
            </div>
          </div>
          <div className={classes.Card2}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/enterprise.png"
                  layout="responsive"
                  width={20}
                  height={30}
                />
              </div>

              <span>Enterprise</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let's get on the market
                quickly
              </p>
            </div>
          </div>
          <div className={classes.Card3}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/investors.png"
                  layout="responsive"
                  width={20}
                  height={30}
                />
              </div>

              <span>Investors</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let's get on the market
                quickly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercialize;
