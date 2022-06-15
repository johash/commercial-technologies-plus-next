import Image from "next/image";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import classes from "./ContactHeader.module.scss";

const ContactHeader = () => {
  return (
    <div className={classes.ContactHeader}>
      <ContactUsForm />
      <div className={classes.ImageWrapper}>
        <div className={classes.ImageContainer}>
          <Image
            src="/assets/abstract-wave.png"
            alt="abstract wave right"
            layout="fill"
            className={classes.Image}
          />
        </div>
      </div>
      <div className={classes.GreenBar}></div>
    </div>
  );
};

export default ContactHeader;
