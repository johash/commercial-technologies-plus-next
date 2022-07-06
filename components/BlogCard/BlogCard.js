import Image from "next/image";
import classes from "./BlogCard.module.scss";

const BlogCard = (props) => {
  return (
    <div className={classes.BlogCard}>
      <div className={classes.ImageContainer}>
        <Image src={props.imageUrl} layout="fill" className={classes.Image} />
      </div>
      <div className={classes.CardHeader}>
        <b>{props.subHeading}</b>
        <span>{props.heading}</span>
      </div>
      <div className={classes.CardBody}>
        <p>{props.description}</p>
      </div>
      <div className={classes.CardFooter}>
        <button className={[classes.Btn, classes.BtnTransOutline].join(" ")}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
