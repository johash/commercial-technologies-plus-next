import { useState, useRef, useEffect } from "react";
import classes from "./ContactUsForm.module.scss";
import Image from "next/image";
import { Checkbox, Modal, Loading } from "@nextui-org/react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";

import Lottie from "react-lottie";
import SentAnimation from "../../public/assets/animation/email_sent.json";

const ContactUsForm = () => {
  const [selectedBudget, setSelectedBudget] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [reasons, setReasons] = useState([]);
  const [build, setBuild] = useState([]);
  const [viewModal, setViewModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [animationStop, setAnimationStop] = useState(true);
  const form = useRef();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: SentAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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

  const onCompanyInputChange = (event) => {
    setCompany(event.target.value);
  };

  const lookingForHandler = (event, value) => {
    let reasonsCopy = [...reasons];
    if (event) {
      setReasons((currentReasons) => [...currentReasons, value]);
      return;
    }

    let index = reasonsCopy.indexOf(value);
    reasonsCopy.splice(index, 1);
    setReasons([...reasonsCopy]);
  };

  const toBuildHandler = (event, value) => {
    let buildCopy = [...build];
    if (event) {
      setBuild((currentBuild) => [...currentBuild, value]);
      return;
    }

    let index = buildCopy.indexOf(value);
    buildCopy.splice(index, 1);
    setBuild([...buildCopy]);
  };

  const modalCloseHandler = () => {
    setViewModal(false);
    setSelectedBudget(2);
    setBuild([]);
    setName("");
    setEmail("");
    setPhoneNumber("");
    setCompany("");
    setReasons([]);
    setMessage("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setViewModal(true);
    let budget = 0;
    switch (selectedBudget) {
      case 0:
        budget = "< 10,000 USD";
        break;
      case 1:
        budget = "10,000 - 25,000 USD";
        break;
      case 2:
        budget = "25,000 - 50,000 USD";
        break;
      case 3:
        budget = "50,000 - 100,000 USD";
        break;
      case 4:
        budget = "Over 100,000 USD";
        break;
      default:
        budget = 0;
    }

    const formData = {
      name,
      email,
      message,
      contact: phoneNumber,
      company,
      budget,
      lookingFor: reasons.join(", "),
      toBuild: build.join(", "),
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setLoading(false);
            setTimeout(() => {
              setAnimationStop(false);
            }, 800);
          }
        },
        (error) => {
          // console.log(error.text);
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
            name="contact"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={onPhoneNumberInputChange}
            defaultCountry="US"
            className={classes.PhoneNumberInput}
            inputComponent={"input"}
            international
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            className={classes.Input}
            onChange={onCompanyInputChange}
          />
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
              <Checkbox
                color="success"
                onChange={(event) => lookingForHandler(event, "Prototype")}
              >
                Prototype
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={(event) =>
                  lookingForHandler(event, "Minimum Viable Product (MVP)")
                }
              >
                Minimum Viable Product (MVP)
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={(event) =>
                  lookingForHandler(event, "Complete Product / Platform")
                }
              >
                Complete Product / Platform
              </Checkbox>
            </div>
            <div>
              <Checkbox
                color="success"
                onChange={(event) =>
                  lookingForHandler(event, " Support with Existing Product")
                }
              >
                Support with Existing Product{" "}
              </Checkbox>
            </div>
          </div>
        </div>
        <div className={classes.ToBuild}>
          <span>To Build</span>
          <div className={classes.ToBuildContainer}>
            <div className={classes.BuildType}>
              <Checkbox
                color="success"
                onChange={(event) => toBuildHandler(event, "Web")}
              >
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
              <Checkbox
                color="success"
                onChange={(event) => toBuildHandler(event, "iOS")}
              >
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
              <Checkbox
                color="success"
                onChange={(event) => toBuildHandler(event, "Android")}
              >
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
                name="budget"
                color="success"
                onChange={() => setSelectedBudget(0)}
                isSelected={selectedBudget === 0}
              >
                {"< 10,000 USD"}
              </Checkbox>
            </div>
            <div>
              <Checkbox
                name="budget"
                color="success"
                onChange={() => setSelectedBudget(1)}
                isSelected={selectedBudget === 1}
              >
                10,000 - 25,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                name="budget"
                color="success"
                onChange={() => setSelectedBudget(2)}
                isSelected={selectedBudget === 2}
              >
                25,000 - 50,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                name="budget"
                color="success"
                onChange={() => setSelectedBudget(3)}
                isSelected={selectedBudget === 3}
              >
                50,000 - 100,000 USD
              </Checkbox>
            </div>
            <div>
              <Checkbox
                name="budget"
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
      <Modal
        blur
        closeButton
        open={viewModal}
        onClose={modalCloseHandler}
        className={classes.Modal}
      >
        <Modal.Body autoMargin>
          <div className={classes.ModalContainer}>
            <div
              className={
                loading
                  ? classes.LoadingContainer
                  : [
                      classes.LoadingContainer,
                      classes.HideLoadingContainer,
                    ].join(" ")
              }
            >
              <Loading color="success" />
            </div>
            <div
              className={
                !loading
                  ? classes.SendAnimationContainer
                  : classes.HideSendAnimationContainer
              }
            >
              <Lottie
                options={defaultOptions}
                width={200}
                height={200}
                isStopped={animationStop}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className={classes.ModalFooter}>
            <p>
              {loading ? "Sending Email..." : "We have recieved your email"}
            </p>
            <div
              className={
                !loading
                  ? classes.BackButtonContainer
                  : [classes.HideBackButtonContainer]
              }
            >
              <button
                className={[classes.Btn, classes.BtnSecondaryOutline].join(" ")}
              >
                Back to Home Page
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactUsForm;
