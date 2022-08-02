import Link from "next/link";
import React from "react";
import classes from "./MobileMenu.module.scss";

const MobileMenu = () => {
  return (
    <div className={classes.MobileMenu}>
      <div className={classes.Container}>
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
    </div>
  );
};

export default MobileMenu;
