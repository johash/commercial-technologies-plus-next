import React from "react";
import classes from "./FAQ.module.scss";
import { Collapse } from "@nextui-org/react";
import { BiLeftArrowAlt } from "react-icons/bi";

const FAQ = () => {
  return (
    <section className={classes.FAQ}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <b>PORTFOLIO</b>
          <h2>Some cases we are proud of</h2>
        </div>
        <div className={classes.CollapseArea}>
          <Collapse.Group>
            <Collapse
              subtitle="How long does it take to get started?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="Do you work on a fixed-price basis or time and material?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="What is your typical working process?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="Do you guys work with big companies only? We’re an early-stage startup."
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="How long it will take to get an estimate from you?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="Do you have a minimum engagement?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
            <Collapse
              subtitle="Where should I start with my business if I have an idea?"
              arrowIcon={<BiLeftArrowAlt />}
            >
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Collapse>
          </Collapse.Group>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
