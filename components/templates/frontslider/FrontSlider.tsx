/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from 'next/image'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function FrontSlider() {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    // eslint-disable-next-line @next/next/no-img-element
                    <Image
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    // eslint-disable-next-line @next/next/no-img-element
                    <Image
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/24/17/55/wind-energy-7342177__340.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full h-96"
                        src="https://cdn.pixabay.com/photo/2022/07/26/03/35/jogger-7344979__340.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}