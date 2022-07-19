import Image from "next/image";
import classes from "./CalendQTechnologies.module.scss";

const CalendQTechnologies = () => {
  return (
    <section className={classes.CalendQTechnologies}>
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
                  src={"/assets/technologies/reactive-programming.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="reactive programming"
                />
              </div>
              <span className={classes.Title}>Reactive Programming</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/spring-boot.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="springboot logo"
                />
              </div>
              <span className={classes.Title}>SpringBoot</span>
            </div>
          </div>
          <div className={classes.Middle}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/r2dbc.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="r2dbc"
                />
              </div>
              <span className={classes.Title}>R2DBC</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/postgres.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="project realtor"
                />
              </div>
              <span className={classes.Title}>Project Realtor</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/postgres.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="postgressql logo"
                />
              </div>
              <span className={classes.Title}>Postgresql</span>
            </div>
          </div>
          <div className={classes.Bottom}>
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
                  src={"/assets/technologies/grafana.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="grafana"
                />
              </div>
              <span className={classes.Title}>Grafana</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/google-calendar.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="google calendar"
                />
              </div>
              <span className={classes.Title}>Google Calendar</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/apple-calendar.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="apple calendar"
                />
              </div>
              <span className={classes.Title}>Apple Calendar</span>
            </div>
          </div>
          <div className={classes.Middle}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/outlook.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="outlook"
                />
              </div>
              <span className={classes.Title}>Outlook</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/ms-teams.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="microsoft teams"
                />
              </div>
              <span className={classes.Title}>Microsoft Teams</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/zoom.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="zoom"
                />
              </div>
              <span className={classes.Title}>Zoom</span>
            </div>
          </div>
          <div className={classes.Bottom}>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/webex.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="webex"
                />
              </div>
              <span className={classes.Title}>Webex</span>
            </div>
            <div className={classes.Card}>
              <div className={classes.ImageContainer}>
                <Image
                  src={"/assets/technologies/stripe.png"}
                  layout="fill"
                  className={classes.Image}
                  alt="stripe"
                />
              </div>
              <span className={classes.Title}>Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendQTechnologies;
