import { useState } from "react";

import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.scss";

const Layout = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <Header toggleMenu={toggleMenu} />
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className={classes.Main}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
