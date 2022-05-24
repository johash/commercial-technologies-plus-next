import classes from "./ContactUsForm.module.scss";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";

const ContactUsForm = () => {
  return (
    <div className={classes.ContactUsForm}>
      <div className={classes.Header}>
        <h1>Lets get Connected</h1>
        <p>Please fill out the below details to get in touch with us</p>
      </div>
      <form>
        <div className={classes.FormTop}>
          <input
            type="text"
            placeholder="Your name"
            className={classes.Input}
          />
          <input
            type="email"
            placeholder="Email address"
            className={classes.Input}
          />
          <input type="number" className={classes.Input} />
          <input type="text" placeholder="Company" className={classes.Input} />
        </div>
        <div className={classes.MessageInputContainer}>
          <textarea name="message" id="message" cols="30" rows="7"></textarea>
        </div>
        <div className={classes.Commercializers}>
          <span>Looking Commercializers for</span>
          <div className={classes.CommercializersContainer}>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="prototype">Prototype</label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="mvp">Minimum Viable Product (MVP)</label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="completePlatform">
                Complete Product / Platform
              </label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="supportExistingProduct">
                Support with Existing Product{" "}
              </label>
            </div>
          </div>
        </div>
        <div className={classes.ToBuild}>
          <span>To Build</span>
          <div className={classes.ToBuildContainer}>
            <div className={classes.BuildType}>
              <Checkbox defaultChecked="false" />
              <div className={classes.IconContainer}>
                <Image
                  src={"/assets/icons/web-1.png"}
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <label htmlFor="web">Web</label>
            </div>
            <div className={classes.BuildType}>
              <Checkbox defaultChecked="false" />
              <div className={classes.IconContainer}>
                <Image
                  src={"/assets/icons/apple-1.png"}
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <label htmlFor="ios">iOS</label>
            </div>
            <div className={classes.BuildType}>
              <Checkbox defaultChecked="false" />
              <div className={classes.IconContainer}>
                <Image
                  src={"/assets/icons/android-1.png"}
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
              <label htmlFor="android">Android</label>
            </div>
          </div>
        </div>
        <div className={classes.Budget}>
          <span>Budget</span>
          <div className={classes.BudgetContainer}>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="10000">10,000 - 25,000 USD</label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="25000">25,000 - 50,000 USD</label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="50000">50,000 - 100,000 USD</label>
            </div>
            <div>
              <Checkbox defaultChecked="false" />
              <label htmlFor="100000">Over 100,000 USD</label>
            </div>
          </div>
        </div>
        <div className={classes.ButtonContainer}>
          <button className={[classes.Btn, classes.BtnPrimary].join(" ")}>
            Get Connected
          </button>
          <span>or</span>
          <button
            className={[classes.Btn, classes.BtnSecondaryOutline].join(" ")}
          >
            Send us an email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
