import Image from "next/image";
import classes from "./TechnologiesIntegrations.module.scss";

const TechnologiesIntegrations = () => {
  return (
    <section className={classes.TechnologiesIntegrations}>
      <div className={classes.Container}>
        <div className={classes.ContainerLeft}>
          <div className={classes.TitleLeft}>
            <h3>Technologies</h3>
          </div>
          <div className={classes.Top}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/aws.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>SpringBoot</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/react.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>React</span>
            </div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/aws.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>AWS</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/mysql.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>MySQL</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/rest-api.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>REST APIs</span>
            </div>
          </div>
        </div>
        <div className={classes.VerticalLine}>
          <Image
            src={"/assets/line-1.png"}
            layout="fill"
            className={classes.Line}
          />
        </div>
        <div className={classes.ContainerRight}>
          <div className={classes.TitleRight}>
            <h3>Integrations</h3>
          </div>
          <div className={classes.Top}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/payable.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>Payable</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/grafana.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>Grafana</span>
            </div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/aws.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>AWS</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/messenger.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>Messenger</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/hubspot.png"}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
              <span>Hubspot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesIntegrations;
