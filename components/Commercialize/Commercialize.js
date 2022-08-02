import classes from "./Commercialize.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Commercialize = () => {
  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

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
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            variants={variants}
            className={classes.Card1}
          >
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
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            variants={variants}
            className={classes.Card2}
          >
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
                We build scalable enterprise grade applications. Grow and get
                commercialized
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            variants={variants}
            className={classes.Card3}
          >
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
                Invest on a SaaS platform and reach an exponential growth in ROI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Commercialize;
