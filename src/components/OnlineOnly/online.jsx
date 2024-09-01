import React from "react";
import "../../components/OnlineOnly/online.css";
import Online from "../../assets/images/online.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const OnlineOnly = () => {
    return (
        <>
            <section className="Online_section">
                <div>
                    <Swiper
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="relative">
                                <img src={Online} alt="Online Product" className="w-full h-96 block object-cover" />
                                <div className="absolute top-[8%] right-0 left-0 m-auto text-center inline-block">
                                    <h4 className="AfterUnder relative text-[38px] font-normal text-[#130F0C] pb-4">ONLINE ONLY</h4>
                                    <p className="text-[22px] font-normal text-[#130F0C] pt-6">GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
                                        Use code <span className="font-black">“Chef20”</span></p>
                                    <button className="w-[359px] leading-[76px] border-solid border-4 border-[#130F0C] text-[#130F0C] text-2xl font-semibold mt-10">Shop Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img src={Online} alt="Online Product" className="w-full h-96 block object-cover" />
                                <div className="absolute top-[8%] right-0 left-0 m-auto text-center inline-block">
                                    <h4 className="AfterUnder relative text-[38px] font-normal text-[#130F0C] pb-4">ONLINE ONLY</h4>
                                    <p className="text-[22px] font-normal text-[#130F0C] pt-6">GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
                                        Use code <span className="font-black">“Chef20”</span></p>
                                    <button className="w-[359px] leading-[76px] border-solid border-4 border-[#130F0C] text-[#130F0C] text-2xl font-semibold mt-10">Shop Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img src={Online} alt="Online Product" className="w-full h-96 block object-cover" />
                                <div className="absolute top-[8%] right-0 left-0 m-auto text-center inline-block">
                                    <h4 className="AfterUnder relative text-[38px] font-normal text-[#130F0C] pb-4">ONLINE ONLY</h4>
                                    <p className="text-[22px] font-normal text-[#130F0C] pt-6">GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
                                        Use code <span className="font-black">“Chef20”</span></p>
                                    <button className="w-[359px] leading-[76px] border-solid border-4 border-[#130F0C] text-[#130F0C] text-2xl font-semibold mt-10">Shop Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="relative">
                                <img src={Online} alt="Online Product" className="w-full h-96 block object-cover" />
                                <div className="absolute top-[8%] right-0 left-0 m-auto text-center inline-block">
                                    <h4 className="AfterUnder relative text-[38px] font-normal text-[#130F0C] pb-4">ONLINE ONLY</h4>
                                    <p className="text-[22px] font-normal text-[#130F0C] pt-6">GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
                                        Use code <span className="font-black">“Chef20”</span></p>
                                    <button className="w-[359px] leading-[76px] border-solid border-4 border-[#130F0C] text-[#130F0C] text-2xl font-semibold mt-10">Shop Now</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default OnlineOnly;