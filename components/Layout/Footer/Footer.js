import classes from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.LogoContainer}>
        <a>
          <span>
            <div>
              <img
                src="/assets/logo-black-white.png"
                alt="commercial-technologies-plus"
              />
            </div>
          </span>
        </a>
      </div>
      <div className={classes.NavigationLinks}>
        <div className={classes.NavLeft}>
          <Link href="/about-us">Company</Link>
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/awards">Awards</Link>
        </div>
        <div className={classes.NavRight}>
          <Link href="https://boards.rooster.jobs/9205">Careers</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact-us">Contact Us</Link>
        </div>
      </div>
      <div className={classes.SocialMedia}>
        <a
          href="https://www.facebook.com/commercialtp"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/facebook.png"
              alt="facebook icon"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </a>
        <a
          href="https://twitter.com/CommercialTech?t=Ud1TfFB5wqM8AfsyhIpoCA&s=08"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/twitter.png"
              alt="twitter icon"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </a>
        <a
          href="https://instagram.com/commercialtp_?igshid=YmMyMTA2M2Y="
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/instagram.png"
              alt="instagram icon"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/commercialtp/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/linkedin.png"
              alt="linkedin icon"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </a>
      </div>
      <div className={classes.PrivacyPolicy}>
        <span>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </span>
        <span>|</span>
        <span>
          <Link href="/terms-of-service">Terms of Service</Link>
        </span>
      </div>
      <div className={classes.Rights}>
        <span>All rights reserved 2022 • Commercial Technologies Plus</span>
      </div>
    </div>
  );
};

export default Footer;
