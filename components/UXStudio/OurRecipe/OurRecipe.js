import React from "react";
import classes from "./OurRecipe.module.scss";
import Card from "./Card/Card";

const OurRecipe = ({ refProp }) => {
  return (
    <section className={classes.OurRecipe} ref={refProp}>
      <div className={classes.Container}>
        <div className={classes.TextContainer}>
          <b>WHY US</b>
          <h2>Our secret recipe</h2>
        </div>
        <div className={classes.RecipeCardContainer}>
          <Card
            image={"/assets/ux-studio/1.png"}
            heading="Timeless design"
            content="Run your digital product for years without worries about being outdated. Our design is ahead of time."
          />
          <Card
            image={"/assets/ux-studio/2.png"}
            heading="Business-oriented solutions"
            content="We help our clients succeed concentrating our efforts on business goals and striving to achieve them no matter what."
          />
          <Card
            image={"/assets/ux-studio/3.png"}
            heading="Deep research"
            content="We do our own research into your business area and market. Once we know all there is to know, we can give you exactly what your business needs."
          />
          <Card
            image={"/assets/ux-studio/4.png"}
            heading="Reliable partner"
            content="Our relationship with you is 100% transparent and built on trust. We believe friendliness is key to any successful long-term partnership."
          />
          <Card
            image={"/assets/ux-studio/5.png"}
            heading="Out-of-the-box design"
            content="What we offer are custom-built solutions. We love experimenting and breaking rules! No boring old templates here."
          />
          <Card
            image={"/assets/ux-studio/6.png"}
            heading="Increasing value"
            content="Do you want to increase the value of your product? How about more customer loyalty and engagement? We know you do, so we create design strategies to do just that!"
          />
        </div>
      </div>
    </section>
  );
};

export default OurRecipe;
