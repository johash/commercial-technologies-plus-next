import classes from "./Header.module.scss";
import { MdMenu } from "react-icons/md";
import Router from "next/router";
import Image from "next/image";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <Link href="/">
          <div className={classes.LogoContainer}>
            <Image
              src="/assets/logo.png"
              layout="fill"
              className={classes.LogoImage}
            />
          </div>
        </Link>
      </div>
      <div className={classes.Navigation}>
        <button
          className={[
            classes.Btn,
            classes.BtnPrimaryOutline,
            classes.ActionButton,
          ].join(" ")}
          onClick={() => Router.push("/contact-us")}
        >
          Hire Commercializers
        </button>
        <button className={classes.BtnMenu} onClick={props.toggleMenu}>
          <MdMenu />
        </button>
      </div>
    </div>
  );
};

export default Header;
