import React from "react";
import "../Product/product.css";
import Leaf from '../../assets/images/leaf.png'
import Item from "../../assets/images/product/item1.jpg"
import Item2 from "../../assets/images/product/item2.jpg"

import { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Product = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
        Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`)
    );

    const prepend = () => {
        setSlides([
            Item,
            Item2,
            ...slides,
        ]);
        prependNumber.current = prependNumber.current - 2;
        swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };

    const append = () => {
        setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };

    const slideTo = (index) => {
        swiperRef.slideTo(index - 1, 0);
    };
    return (
        <>
            <section className="product_section py-16 ml-auto position-relative">
                <img src={Leaf} alt="leaf" className="max-w-[319px] absolute -z-10 left-[170px] bottom-[-80%]" />
                <div className="container">
                    <div className="pl-16 mb-16">
                        <h1 className="text-4xl font-normal mt-20 block text-[#D29A5A] border-b-4 border-[#D29A5A] max-w-[500px] leading-[56px]">CHEF MATT PRODUCTS</h1>
                        <p className="text-lg font-normal pt-10 text-[#ffffff] max-w-[520px]">Shop Gourmet Chef Quality products from the Chef Matt brand.
                            Chef it yourself and Thank us later.</p>
                    </div>
                </div>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    onSwiper={setSwiperRef}
                    slidesPerView={4}
                    centeredSlides={false}
                    spaceBetween={0}
                    // pagination={{
                    //     type: 'fraction',
                    // }}
                    navigation={true}
                    virtual
                >
                    {slides.map((slideContent, index) => (

                        <SwiperSlide key={slideContent} virtualIndex={index}>

                            <div className="m-auto text-center">
                                <figure className="inline-block text-center">
                                    <img src={Item} alt="" className="max-w-[243px] h-auto border-4 border-[#D29A5A] border-solid rounded-full" />
                                    <h6 className="font-normal text-lg pt-6 mb-1 text-[#D29A5A]">CINNAMON HONEY</h6>
                                    <p className="text-white font-normal text-sm"><span className="line-through	pr-2">$12.00</span> $9.00</p>
                                </figure>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Product;