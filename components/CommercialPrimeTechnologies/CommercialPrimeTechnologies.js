import Image from "next/image";
import classes from "./CommercialPrimeTechnologies.module.scss";

const CommercialPrimeTechnologies = () => {
  return (
    <section className={classes.CommercialPrimeTechnologies}>
      <div className={classes.Container}>
        <div className={classes.ContainerLeft}>
          <div className={classes.TitleLeft}>
            <h3>Technologies</h3>
          </div>
          <div className={classes.Top}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/react.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="react logo"
                />
              </div>
              <span className={classes.Title}>React Native</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/spring-boot.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="Spring boot"
                />
              </div>
              <span className={classes.Title}>SpringBoot</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/nextjs.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="nextjs logo"
                />
              </div>
              <span className={classes.Title}>Next.js</span>
            </div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/mysql.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="mysql logo"
                />
              </div>
              <span className={classes.Title}>MySQL</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/aws.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="aws logo"
                />
              </div>
              <span className={classes.Title}>AWS</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/adminer.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="adminer"
                />
              </div>
              <span className={classes.Title}>Adminer</span>
            </div>
          </div>
        </div>
        <div className={classes.LineContainer}>
          <div className={classes.VerticalLine}>
            <Image
              src={"/assets/line-1.png"}
              layout="fill"
              className={classes.Line}
              alt="verical line"
            />
          </div>
        </div>

        <div className={classes.ContainerRight}>
          <div className={classes.TitleRight}>
            <h3>Integrations</h3>
          </div>
          <div className={classes.Top}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/firebase.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="firebase"
                />
              </div>
              <span className={classes.Title}>Firebase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialPrimeTechnologies;
