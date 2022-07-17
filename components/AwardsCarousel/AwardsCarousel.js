import classes from "./AwardsCarousel.module.scss";
import Image from "next/image";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const AwardsCarousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <section className={classes.AwardsCarousel}>
      <Swiper
        className={classes.AwardsSwiperContainer}
        autoplay={{
          delay: 1500,
        }}
        direction="horizontal"
        slidesPerView="auto"
        spaceBetween={0}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className={classes.AwardsSwiperSlide}>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c1.png"
              layout="fill"
              className={classes.Image}
              alt="award image1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c2.png"
              layout="fill"
              className={classes.Image}
              alt="award image2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c3.png"
              layout="fill"
              className={classes.Image}
              alt="award image3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c4.png"
              layout="fill"
              className={classes.Image}
              alt="award image4"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c5.png"
              layout="fill"
              className={classes.Image}
              alt="award image5"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c6.png"
              layout="fill"
              className={classes.Image}
              alt="award image6"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.ImageContainer}>
            <Image
              src="/assets/awards/c7.png"
              layout="fill"
              className={classes.Image}
              alt="award image7"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default AwardsCarousel;
