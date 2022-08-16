import React from "react";
import Router from "next/router";
import classes from "./Pricing.module.scss";
import { BiCheck, BiX } from "react-icons/bi";
import { TiFlashOutline } from "react-icons/ti";

const Pricing = ({ refProp }) => {
  return (
    <section className={classes.Pricing} ref={refProp}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <b>PRICING</b>
          <h2>Simple, transparent pricing</h2>
        </div>
        <div className={classes.PriceCardContainer}>
          <div className={classes.Card}>
            <div className={classes.Top}>
              <span>Basic</span>
              <b>FREE</b>
              <p>
                Perfect for business owners to get a UX reviewed their business
              </p>
            </div>
            <hr />
            <div className={classes.Middle}>
              <p>
                <BiCheck color="#00D179" />
                <span>1 Page of UX Design</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Email Notification</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Premium Support & Updates</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Advanced Analysis</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Free Integrations</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Customised Design System</span>
              </p>
            </div>
            <div className={classes.Footer}>
              <button
                className={classes.BtnOutline}
                onClick={() => {
                  Router.push("/contact-us");
                }}
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.Top}>
              <span>Standard</span>
              <b>$ 5,000</b>
              <p>Perfect for business owners who need our experts work</p>
            </div>
            <hr />
            <div className={classes.Middle}>
              <p>
                <BiCheck color="#00D179" />
                <span>1 Page of UX Design</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Email Notification</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Premium Support & Updates</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Advanced Analysis</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Free Integrations</span>
              </p>
              <p>
                <BiX color="#808080" />
                <span>Customised Design System</span>
              </p>
            </div>
            <div className={classes.Footer}>
              <button
                className={classes.BtnColored}
                onClick={() => {
                  Router.push("/contact-us");
                }}
              >
                Choose Plan
              </button>
            </div>
          </div>
          <div className={classes.Card}>
            <div className={classes.Top}>
              <span>Premium</span>
              <b>$ 15,000</b>
              <p>
                Perfect for business owners to get a UX reviewed their business
              </p>
            </div>
            <hr />
            <div className={classes.Middle}>
              <p>
                <BiCheck color="#00D179" />
                <span>1 Page of UX Design</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Email Notification</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Premium Support & Updates</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Advanced Analysis</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Free Integrations</span>
              </p>
              <p>
                <BiCheck color="#00D179" />
                <span>Customised Design System</span>
              </p>
            </div>
            <div className={classes.Footer}>
              <button
                className={classes.BtnOutline}
                onClick={() => {
                  Router.push("/contact-us");
                }}
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
        <div className={classes.CustomOffer}>
          <div className={classes.OfferCard}>
            <div className={classes.TextIcon}>
              <TiFlashOutline />
              <p>
                <b>Custom Offer</b>
                <span>
                  Can’t see what you are looking for?, let’s get in touch.
                </span>
              </p>
            </div>
            <button
              onClick={() => {
                Router.push("/contact-us");
              }}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
