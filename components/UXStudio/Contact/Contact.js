import React from "react";
import classes from "./Contact.module.scss";
import Image from "next/image";
import { Router } from "next/router";

const Contact = () => {
  return (
    <section className={classes.Contact}>
      <div className={classes.Container}>
        <div className={classes.TextAndButton}>
          <p>
            Got a question not in the list or anything else, let’s jump into a
            discussion
          </p>
          <button
            onClick={() => {
              Router.push("/contact-us");
            }}
          >
            Contact us now
          </button>
        </div>
        <div className={classes.ImageWrapper}>
          <div className={classes.ImageContainer}>
            <Image
              src={"/assets/ux-studio/contact.png"}
              alt="contact image"
              layout="fill"
              className={classes.Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
