import Image from "next/image";
import classes from "./BlogCard.module.scss";
import { motion } from "framer-motion";

const BlogCard = (props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      transition={{
        opacity: {
          duration: 0.6,
          delay: 0.4,
        },
        y: {
          duration: 0.6,
          delay: 0.4,
        },
        scale: {
          delay: 0,
          duration: 0.2,
        },
      }}
      variants={{
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.8, y: 50 },
        hover: { scale: 1.05 },
      }}
      className={classes.BlogCard}
    >
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
    </motion.div>
  );
};

export default BlogCard;
