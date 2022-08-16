import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import classes from "./HeaderStudio.module.scss";

import { useWindowSize } from "../../../hooks/useWindowSize";

const HeaderStudio = (props) => {
  const windowSize = useWindowSize();

  console.log(windowSize);
  return (
    <header className={classes.HeaderStudio}>
      <div className={classes.Logo}>
        <Link href="/">
          <div className={classes.LogoContainer}>
            <Image
              src="/assets/logo-dark.png"
              layout="fill"
              className={classes.LogoImage}
              alt="commercial technologies plus logo"
            />
          </div>
        </Link>
        <div className={classes.UXStudio}>
          <span>UX Studio</span>
        </div>
      </div>
      <div className={classes.Navigation}>
        <div className={classes.NavLinks}>
          <ul>
            <li>
              <span
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  props.ourProcess.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Our Process
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  props.whyUs.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Why Us
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  props.portfolio.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Portfolio
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  props.pricing.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Pricing
              </span>
            </li>
            <li>
              <span
                onClick={() =>
                  props.faq.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                FAQ
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.ButtonContainer}>
          {windowSize.width > 428 ? (
            <button
              className={classes.CallToActionButton}
              onClick={() => {
                Router.push("/contact-us");
              }}
            >
              Get a FREE UX Review
            </button>
          ) : (
            <button
              className={classes.ContactButton}
              onClick={() => {
                Router.push("/contact-us");
              }}
            >
              Contact
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderStudio;
