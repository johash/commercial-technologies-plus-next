import React from "react";
import classes from "./DesignForBusiness.module.scss";

import Image from "next/image";

const DesignForBusiness = ({ refProp }) => {
  return (
    <section className={classes.DesignForBusiness} ref={refProp}>
      <div className={classes.Container}>
        <div className={classes.OurProcessSection}>
          <div className={classes.TextContainer}>
            <b>OUR PROCESS</b>
            <h2>Design for Business</h2>
            <p>
              No business has ever succeeded with poor design solutions. To us,
              design is the nucleus that holds business together. We’re always
              willing to help you build it.
            </p>
          </div>
          <div className={classes.ProcessImageContainer}>
            <Image
              src={"/assets/ux-studio/process.png"}
              alt="Design process"
              layout="fill"
              className={classes.ProcessImage}
            />
          </div>
        </div>
        <div className={classes.AnyDeviceSection}>
          <div className={classes.TextContent}>
            <h2>
              Design for <span>Any Device</span>
            </h2>
            <p>Desktop, Mobile, Tablet and even for Smart Watches</p>
          </div>
          <div className={classes.DeviceImageWrapper}>
            <div className={classes.DeviceImageContainer}>
              <Image
                src={"/assets/ux-studio/devices.png"}
                alt="Design process"
                layout="fill"
                className={classes.DeviceImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignForBusiness;
