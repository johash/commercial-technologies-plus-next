import classes from "./Menu.module.scss";
import Image from "next/image";
import Link from "next/link";

const Menu = (props) => {
  const styleClasses = [classes.Menu];
  if (props.isMenuOpen) {
    styleClasses.push(classes.MenuOpen);
  }

  return (
    <div className={styleClasses.join(" ")}>
      <div className={classes.Header}>
        <div className={classes.Logo}>
          <a>
            <span>
              <div>
                <img
                  src="/assets/logo.png"
                  alt="commercial-technologies-plus"
                />
              </div>
            </span>
          </a>
        </div>
        <div className={classes.ButtonContainer}>
          <button onClick={props.toggleMenu}>x</button>
        </div>
      </div>
      <div className={classes.Body}>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.GreenContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/company.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Company</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.BlueContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/services.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Services</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.GreenContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/case-studies.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Case Studies</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.BlueContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/careers.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Careers</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.GreenContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/awards.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Awards</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.BlueContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/blog.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Blog</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.GreenContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/faq.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>FAQ</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <div className={classes.IconContainer}>
            <div className={classes.BlueContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  src="/assets/icons/contact-us.png"
                  layout="fill"
                  className={classes.Icon}
                />
              </div>
            </div>
          </div>
          <Link href="#">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <div className={classes.Footer}>
        <p>You’re about to hire an award winning company!</p>
        <div className={classes.BrandContainer}>
          <div>
            <Image
              src="/assets/brands/1.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/2.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/3.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/4.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/5.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/6.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
          <div>
            <Image
              src="/assets/brands/7.png"
              layout="fixed"
              objectFit="contain"
              height={50}
              width={180}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
