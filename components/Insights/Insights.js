import Image from "next/image";
import classes from "./Insights.module.scss";

import BlogCard from "../BlogCard/BlogCard";

const Insights = () => {
  return (
    <section className={classes.Insights}>
      <div className={classes.Container}>
        <div className={classes.Heading}>
          <h1>Latest insights from the experts in the industry</h1>
          <div className={classes.ArrowContainer}>
            <Image
              src="/assets/insights-arrow.png"
              layout="fill"
              className={classes.ArrowIcon}
            />
          </div>
        </div>
        <div className={classes.CardContainer}>
          <div className={classes.LeftContainer}>
            <BlogCard
              imageUrl="/assets/blog/1.png"
              subHeading="Marketing"
              heading="Your company might be in need of a social media audit."
              description="Blandit iaculis ultricies pharetra feugiat. Aliquet sit sit vestibulum tempor nunc dictumst scelerisque elit. Congue adipiscing ultrices fringilla eget pellentesque tincidunt. Sem a tempor lectus dictum odio sollicitudin felis. Viverra aliquam mi, viverra pulvinar morbi nulla leo..."
            />
          </div>
          <div className={classes.RightContainer}>
            <BlogCard
              imageUrl="/assets/blog/2.png"
              subHeading="Business"
              heading="How can businesses utilize email marketing to nurture their leads."
            />
            <BlogCard
              imageUrl="/assets/blog/3.png"
              subHeading="Social Media"
              heading="Auto-reply: How to use automated responses for your email lists."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
