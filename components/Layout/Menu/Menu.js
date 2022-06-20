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
                    alt="company icon"
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
                    alt="services icon"
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
                    alt="case studies icon"
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
                    alt="careers icon"
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
                    alt="awards icon"
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
                    alt="blog icon"
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
          <Link href="/coming-soon">
            <div className={classes.IconContainer}>
              <div className={classes.GreenContainer}>
                <div className={classes.ImageContainer}>
                  <Image
                    src="/assets/icons/faq.png"
                    alt="faq icon"
                    layout="fill"
                    className={classes.Icon}
                  />
                </div>
              </div>
            </div>
          </Link>
          <Link href="/coming-soon">
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
                    alt="contact us icon"
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
                alt="entrepreneurship studio sri lanka telecom"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/2.png"
                alt="Information and Communication Technology Agency"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/3.png"
                alt="ICTA Spiralation"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/4.png"
                alt="Lankan Angel Network"
                layout="fill"
                className={classes.BrandIcon}
              />
            </div>
          </div>
          <div className={classes.Right}>
            <div className={classes.BrandIconContainer}>
              <Image
                src="/assets/brands/5.png"
                alt="SLASSCOM (Sri Lanka Association for Software and Services Companies)"
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
                alt="NBQSA National ICT Awards"
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
