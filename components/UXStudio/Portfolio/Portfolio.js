import React from "react";
import classes from "./Portfolio.module.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section className={classes.Portfolio}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <b>PORTFOLIO</b>
          <h2>Some cases we are proud of</h2>
        </div>
        <div className={classes.PortfolioContainer}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/portfolio/1.png"}
              alt="portfolio image"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/portfolio/2.png"}
              alt="portfolio image"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/portfolio/3.png"}
              alt="portfolio image"
              layout="fill"
              className={classes.Image}
            />
          </div>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/portfolio/4.png"}
              alt="portfolio image"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
