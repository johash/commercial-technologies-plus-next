import classes from "./AllBlogs.module.scss";
import BlogCard from "../BlogCard/BlogCard";

const AllBlogs = () => {
  return (
    <section className={classes.AllBlogs}>
      <div className={classes.SearchArea}>
        <h2>Search our blog posts</h2>
        <div className={classes.InputGroup}>
          <input type="search" placeholder="Search for 100+ blog posts..." />
          <span>Search</span>
        </div>
      </div>
      <div className={classes.BlogArea}>
        <h2>Resources for makers & creatives to learn, sell & grow</h2>
        <div className={classes.Container}>
          <BlogCard
            imageUrl="/assets/blog/4.png"
            subHeading="Business"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/5.png"
            subHeading="Entertainment"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/6.png"
            subHeading="Health"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/7.png"
            subHeading="Social Media"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/8.png"
            subHeading="Business"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/9.png"
            subHeading="Digital Marketing"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/10.png"
            subHeading="Business"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
          <BlogCard
            imageUrl="/assets/blog/11.png"
            subHeading="Entertainment"
            heading="How can businesses utilize email marketing to nurture their leads."
          />
        </div>
      </div>
    </section>
  );
};

export default AllBlogs;
