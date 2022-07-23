import classes from "./CommercialPrimeAbout.module.scss";
import AboutCard from "./AboutCard/AboutCard";

const CommercialPrimeAbout = () => {
  return (
    <section className={classes.CommercialPrimeAbout}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <h2>About</h2>
          <p>
            Commercial Prime is revolutionizing traditional business cards by
            transforming them into smart, precise, and sustainable digital
            business cards. Expand and enrich your network by sharing contact
            information, social media profiles, websites, and more with a single
            tap on their smartphone. Commercial Prime enables a perfect &
            straightforward way of networking and growing connections with
            anyone, anywhere, at any time.
          </p>
        </div>

        <div className={classes.CardContainer}>
          <AboutCard
            title="Tap & Get Connected"
            imageUrl="/assets/commercial-prime/1.png"
          />
          <AboutCard
            title="Impressive & Elegant Design"
            imageUrl="/assets/commercial-prime/2.png"
          />
          <AboutCard
            title="Share from Anywhere at Anytime"
            imageUrl="/assets/commercial-prime/3.png"
          />
          <AboutCard
            title="Switch between Multiple Profiles/Modes"
            imageUrl="/assets/commercial-prime/4.png"
          />
          <AboutCard
            title="Unlimited Taps"
            imageUrl="/assets/commercial-prime/5.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CommercialPrimeAbout;
