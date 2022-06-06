import classes from "./Header.module.scss";
import { MdMenu } from "react-icons/md";

const Header = (props) => {
  return (
    <div className={classes.Header}>
      <div className={classes.Logo}>
        <a href="/">
          <span>
            <div>
              <img src="/assets/logo.png" alt="commercial-technologies-plus" />
            </div>
          </span>
        </a>
      </div>
      <div className={classes.Navigation}>
        <button
          className={[
            classes.Btn,
            classes.BtnPrimaryOutline,
            classes.ActionButton,
          ].join(" ")}
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
