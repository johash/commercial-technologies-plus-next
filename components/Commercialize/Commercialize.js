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
              alt="commercial technologies plus worldwide"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.Card1}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/startups.png"
                  alt="startup icon"
                  layout="fill"
                  className={classes.Image}
                />
              </div>

              <span className={classes.Heading}>Startups</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let&apos;s get on the market
                quickly
              </p>
            </div>
          </div>
          <div className={classes.Card2}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/enterprise.png"
                  alt="enterprise icon"
                  layout="fill"
                  className={classes.Image}
                />
              </div>

              <span className={classes.Heading}>Enterprise</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let&apos;s get on the market
                quickly
              </p>
            </div>
          </div>
          <div className={classes.Card3}>
            <div className={classes.CardHeading}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/investors.png"
                  alt="investors icon"
                  layout="fill"
                  className={classes.Image}
                />
              </div>

              <span className={classes.Heading}>Investors</span>
            </div>
            <div>
              <p className={classes.Desc}>
                Commercialize your idea in action. Let&apos;s get on the market
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
