import React from "react";
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../HeroSection/heroSection.css";
import Banner from "../../assets/images/hero.jpg"
import Banner2 from "../../assets/images/hero2.jpg"

const Hero = () => {
    return (
        <>
            <section className="relative Hero_slider_B">
                <div className="container">
                    <div>
                        <button className="absolute text-[24px] z-10 w-[360px] leading-[76px] left-[12%] right-[0px] m-auto top-[76%] text-[#fff] border-right border-2 border-fuchsia-50">Meet Chef Matt  </button>
                        <Swiper
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide><img src={Banner} alt="Banner_image" /></SwiperSlide>
                            <SwiperSlide><img src={Banner2} alt="Banner_image" /></SwiperSlide>
                            <SwiperSlide><img src={Banner} alt="Banner_image" /></SwiperSlide>
                            <SwiperSlide><img src={Banner} alt="Banner_image" /></SwiperSlide>
                            <SwiperSlide><img src={Banner} alt="Banner_image" /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;