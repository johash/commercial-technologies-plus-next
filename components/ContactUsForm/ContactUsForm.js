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
          <input
            type="number"
            placeholder="2012345678"
            className={classes.Input}
          />
          <input type="text" placeholder="Company" className={classes.Input} />
        </div>
        <div className={classes.MessageInputContainer}>
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Message"
          ></textarea>
        </div>
        <div className={classes.Commercializers}>
          <span>Looking Commercializers for</span>
          <div className={classes.CommercializersContainer}>
            <div>
              <Checkbox color="success">Prototype</Checkbox>
            </div>
            <div>
              <Checkbox color="success">Minimum Viable Product (MVP)</Checkbox>
            </div>
            <div>
              <Checkbox color="success">Complete Product / Platform</Checkbox>
            </div>
            <div>
              <Checkbox color="success">
                Support with Existing Product{" "}
              </Checkbox>
            </div>
          </div>
        </div>
        <div className={classes.ToBuild}>
          <span>To Build</span>
          <div className={classes.ToBuildContainer}>
            <div className={classes.BuildType}>
              <Checkbox color="success">
                <div className={classes.IconContainer}>
                  <Image
                    src={"/assets/icons/web-1.png"}
                    layout="fill"
                    className={classes.Icon}
                  />
                </div>
                <span className={classes.Label}>Web</span>
              </Checkbox>
            </div>
            <div className={classes.BuildType}>
              <Checkbox color="success">
                <div className={classes.IconContainer}>
                  <Image
                    src={"/assets/icons/apple-1.png"}
                    layout="fill"
                    className={classes.Icon}
                  />
                </div>
                <span className={classes.Label}>iOS</span>
              </Checkbox>
            </div>
            <div className={classes.BuildType}>
              <Checkbox color="success">
                <div className={classes.IconContainer}>
                  <Image
                    src={"/assets/icons/android-1.png"}
                    layout="fill"
                    className={classes.Icon}
                  />
                </div>
                <span className={classes.Label}>Android</span>
              </Checkbox>
            </div>
          </div>
        </div>
        <div className={classes.Budget}>
          <span>Budget</span>
          <div className={classes.BudgetContainer}>
            <div>
              <Checkbox color="success">10,000 - 25,000 USD</Checkbox>
            </div>
            <div>
              <Checkbox color="success">25,000 - 50,000 USD</Checkbox>
            </div>
            <div>
              <Checkbox color="success">50,000 - 100,000 USD</Checkbox>
            </div>
            <div>
              <Checkbox color="success">Over 100,000 USD</Checkbox>
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
