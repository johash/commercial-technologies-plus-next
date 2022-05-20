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
          <Link href="#">Company</Link>
          <Link href="#">Services</Link>
          <Link href="#">Case Studies</Link>
          <Link href="#">Awards</Link>
        </div>
        <div className={classes.NavRight}>
          <Link href="#">Careers</Link>
          <Link href="#">Blog</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </div>
      <div className={classes.SocialMedia}>
        <Link href="#">
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/facebook.png"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </Link>
        <Link href="#">
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/twitter.png"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </Link>
        <Link href="#">
          <div className={classes.IconContainer}>
            <Image
              src="/assets/icons/instagram.png"
              layout="fixed"
              objectFit="contain"
              width={20}
              height={20}
            />
          </div>
        </Link>
      </div>
      <div className={classes.Rights}>
        <span>All rights reserved 2022 • Commercial Technologies Plus</span>
      </div>
    </div>
  );
};

export default Footer;
