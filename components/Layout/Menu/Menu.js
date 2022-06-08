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
          <a href="/">
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
          <button onClick={props.toggleMenu}>
            <span>x</span>
          </button>
        </div>
      </div>
      <div className={classes.Body}>
        <div className={classes.MenuItem}>
          <Link href="/about-us">
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
          </Link>

          <Link href="/about-us">
            <span>Company</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="/services">
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
          </Link>
          <Link href="/services">
            <span>Services</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="/case-studies">
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
          </Link>
          <Link href="/case-studies">
            <span>Case Studies</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="https://boards.rooster.jobs/9205">
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
          </Link>
          <Link href="https://boards.rooster.jobs/9205">
            <span>Careers</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="/awards">
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
          </Link>
          <Link href="/awards">
            <span>Awards</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="https://medium.com/@commercialtp">
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
          </Link>
          <Link href="https://medium.com/@commercialtp">
            <span>Blog</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="/faq">
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
          </Link>
          <Link href="/faq">
            <span>FAQ</span>
          </Link>
        </div>
        <div className={classes.MenuItem}>
          <Link href="/contact-us">
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
          </Link>
          <Link href="/contact-us">
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
      <div className={classes.Footer}>
        <p>You’re about to hire an award winning company!</p>
        <div className={classes.BrandContainer}>
          <div className={classes.Left}>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/1.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/2.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/3.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/4.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
          </div>
          <div className={classes.Right}>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/5.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/6.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/7.png"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
