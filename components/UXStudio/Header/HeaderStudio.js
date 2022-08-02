import Image from "next/image";
import Link from "next/link";
import classes from "./HeaderStudio.module.scss";

import { useWindowSize } from "../../../hooks/useWindowSize";

const HeaderStudio = () => {
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
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Our Process</Link>
            </li>
            <li>
              <Link href="#">Why Us</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className={classes.ButtonContainer}>
          {windowSize.width > 428 ? (
            <button className={classes.CallToActionButton}>
              Get a FREE UX Review
            </button>
          ) : (
            <button className={classes.ContactButton}>Contact</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderStudio;
