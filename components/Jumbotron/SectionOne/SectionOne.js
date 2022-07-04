import react from "react";
import classes from "./SectionOne.module.scss";
import Image from "next/image";
import Router from "next/router";
import heroImageOne from "../../../public/assets/003.jpg";
import heroImageTwo from "../../../public/assets/002.jpg";
import heroImageThree from "../../../public/assets/001.jpg";

import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  EffectFlip,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";

const SectionOne = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className={classes.SectionOne}>
      <div className={classes.TextContent}>
        <Swiper
          className={classes.TextSwiper}
          autoplay={{
            delay: 4000,
          }}
          direction="vertical"
          slidesPerView={1}
          loop
          effect={"flip"}
          modules={[EffectFlip]}
          allowTouchMove={false}
        >
          <SwiperSlide>
            <div className={classes.TextCard}>
              <h1>Commercialize Your Ideas</h1>
              <p>We build commercial platforms</p>
              <div className={classes.ButtonContainer}>
                <button
                  className={[classes.Btn, classes.BtnSecondary].join(" ")}
                  onClick={() => Router.push("/contact-us")}
                >
                  Hire Commercializers
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1>Build Your SaaS Platform with A Maestro</h1>
              <p>Skyrocket your ROI to an exponential growth</p>
              <div className={classes.ButtonContainer}>
                <button
                  className={[classes.Btn, classes.BtnSecondary].join(" ")}
                  onClick={() => Router.push("/contact-us")}
                >
                  Hire Commercializers
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1>Innovation + Commercial Value Raise Potential Products</h1>
              <p>We drive you towards valuations</p>
              <div className={classes.ButtonContainer}>
                <button
                  className={[classes.Btn, classes.BtnSecondary].join(" ")}
                  onClick={() => Router.push("/contact-us")}
                >
                  Hire Commercializers
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={classes.ImageWrapper}>
        <Swiper
          className={classes.SwiperContainer}
          autoplay={{
            delay: 4000,
          }}
          direction="horizontal"
          slidesPerView={1}
          spaceBetween={5}
          loop
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: false,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          allowTouchMove={false}
        >
          <SwiperSlide className={classes.SwiperSlide}>
            <div className={classes.ImageContainer}>
              <div>
                <Image
                  src={heroImageOne}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.ImageContainer}>
              <div>
                <Image
                  src={heroImageTwo}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={classes.ImageContainer}>
              <div>
                <Image
                  src={heroImageThree}
                  layout="fill"
                  className={classes.Image}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={classes.SidePart}>
        <Image
          src="/assets/sidepart2.png"
          layout="fixed"
          objectFit="contain"
          height={402}
          width={176}
          priority={true}
        />
      </div>
    </div>
  );
};

export default SectionOne;
