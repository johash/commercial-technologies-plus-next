import classes from "./TechStack.module.scss";
import Image from "next/image";

const TechStack = () => {
  return (
    <section className={classes.TechStack}>
      <div className={classes.Container}>
        <h2>Maestro tech stack & integrations </h2>
        <div className={classes.TechIconContainer}>
          <div className={classes.LeftSection}>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/kubernetes.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/aws.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/mysql.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/saas.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/spring.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/next.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/react.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/angular.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/java.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/node.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/ios.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/docker.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/grafana.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/google.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/android.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/hibernate.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <div className={classes.VerticalLine}></div>
          <div className={classes.RightSection}>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/facebook1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/messenger.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/twitter1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/instagram1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/stripe.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/goole1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/google-maps.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/analytics.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/crm.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/shopify.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/slack.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/drive.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
            <div className={classes.IconBallContainer}>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/sheets.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <div className={classes.IconContainer}>
                <Image
                  src="/assets/icons/gmail.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
