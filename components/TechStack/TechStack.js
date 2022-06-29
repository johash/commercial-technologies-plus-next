import classes from "./TechStack.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const TechStack = () => {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };
  const viewport = { once: true };

  return (
    <section className={classes.TechStack}>
      <div className={classes.Container}>
        <h2>Maestro tech stack & integrations </h2>
        <div className={classes.TechIconContainer}>
          <div className={classes.LeftSection}>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/kubernetes.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/aws.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.3 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/mysql.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.4 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/saas.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.5 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/spring.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.6 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/next.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.7 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/react.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.8 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/angular.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.9 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/java.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/node.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/ios.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.2 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/docker.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.3 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/grafana.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.4 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/google.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.5 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/android.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.6 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/hibernate.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
          </div>
          <div className={classes.VerticalLine}></div>
          <div className={classes.RightSection}>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/facebook1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.2 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/messenger.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.3 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/twitter1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.4 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/instagram1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.5 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/stripe.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.6 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/goole1.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.7 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/google-maps.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.8 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/analytics.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 0.9 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/crm.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/shopify.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.1 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/slack.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.2 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/drive.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
            <div className={classes.IconBallContainer}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.3 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/sheets.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ duration: 0.3, delay: 1.4 }}
                variants={variants}
                className={classes.IconContainer}
              >
                <Image
                  src="/assets/icons/gmail.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
