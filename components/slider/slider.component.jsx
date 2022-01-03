import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

import classes from "./slider.module.scss";

export default function HomeSlider() {
  return (
    <section className="alinclub__slider">
      <Swiper
        slidesPerView={5}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <div className={classes.alinclub__sliderItem_container}>
            <div className={classes.alinclub__sliderFirstMainItem}>Slide 1</div>
            <div className={classes.alinclub__sliderItem}></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.alinclub__sliderItem_container}>
            <div className={classes.alinclub__sliderMainItem}>Slide 3</div>
            <div className={classes.alinclub__sliderItem}></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={classes.alinclub__sliderItem_container}>
            <div className={classes.alinclub__sliderMainItem}>Slide 14</div>
            <div className={classes.alinclub__sliderLastItem}></div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top_first}>slider 1</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom_first}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 2</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 3</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 4</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
        <SwiperSlide
          className={classes.alinclub__sliderItem_container}
        >
          <div className={classes.alinclub__sliderItem_top}>slider 5</div>
          <div className={classes.alinclub__sliderItem_center}></div>
          <div className={classes.alinclub__sliderItem_bottom}></div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
