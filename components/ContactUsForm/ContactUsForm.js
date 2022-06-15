import { useState, useRef } from "react";
import classes from "./ContactUsForm.module.scss";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const [selectedBudget, setSelectedBudget] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const onPhoneNumberInputChange = (value) => {
    setPhoneNumber(value);
  };

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkmpbgr",
        "template_5l3aspt",
        form.current,
        "UyHo0Yqjz2M9nzs-2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={classes.ContactUsForm}>
      <div className={classes.Header}>
        <h1>Lets get Connected</h1>
        <p>Please fill out the below details to get in touch with us</p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={classes.FormTop}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className={classes.Input}
            value={name}
            onChange={onNameChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className={classes.Input}
            value={email}
            onChange={onEmailChange}
          />
          <PhoneInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={onPhoneNumberInputChange}
            defaultCountry="US"
            className={classes.PhoneNumberInput}
            inputComponent={"input"}
            international
          />
          <input type="text" placeholder="Company" className={classes.Input} />
        </div>
        <div className={classes.MessageInputContainer}>
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Message"
            value={message}
            onChange={onMessageChange}
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
                    alt="web icon"
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
                    alt="apple logo icon"
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
                    alt="android icon"
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
              <Checkbox
                color="success"
                onChange={() => setSelectedBudget(0)}
                isSelected={selectedBudget === 0}
              >
                {"< 10,000 USD"}
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={() => setSelectedBudget(1)}
                isSelected={selectedBudget === 1}
              >
                10,000 - 25,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={() => setSelectedBudget(2)}
                isSelected={selectedBudget === 2}
              >
                25,000 - 50,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={() => setSelectedBudget(3)}
                isSelected={selectedBudget === 3}
              >
                50,000 - 100,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={() => setSelectedBudget(4)}
                isSelected={selectedBudget === 4}
              >
                Over 100,000 USD
              </Checkbox>
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
            type="submit"
          >
            Send us an email
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
