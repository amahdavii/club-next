import { Swiper, SwiperSlide } from "swiper/react";

import "react-circular-progressbar/dist/styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./style.module.scss";
import CoponCard from "./couponCard";
import { useEffect, useRef } from "react";

import SwiperCore, { Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);  

var mocSlider=[100,200,300,400,500,600,700,800,900,110,111,112,113]
const CoponSlider = () => {


    const swipRef=useRef(null)

    useEffect(()=>{
        console.log('swipRef',swipRef)
    },[swipRef])


    const renderSlider=()=>(
        mocSlider.map((item)=>(
            <SwiperSlide key={item.id}>
                <CoponCard scores={item}/>
            </SwiperSlide>
        ))
    )
    return (        
        <div className="col-span-3">
            <div className={classes.alinclub__RewardSlider}>
            <div className={classes.alinclub__RewardSliderTitle}>
                <span>جوایز آلین کلاب</span>
                <div className={classes.alinclub__RewardArrows}>
                <span>مشاهده همه</span>
                <i data-icon="p" className="prev"></i>
                <i data-icon="k" className="next"></i>
                </div>
            </div>

            <div className={classes.alinclub__RewardSliderContainer}>
                <Swiper
                ref={swipRef}
                slidesPerView={2.5}
                spaceBetween={0}
                slidesPerGroup={1}
                loop={false}
                loopFillGroupWithBlank={false}               
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next',
                }}
                className="mySwiper"
                >
                    {renderSlider()}
                </Swiper>
            </div>
            </div>
      </div>
    );
}

export default CoponSlider;
