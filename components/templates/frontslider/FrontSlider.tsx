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
                        className="object-fill w-2500px h-900px"
                        src="https://www.skygodz.com/wp-content/uploads/2023/01/skygodz_slide01.jpg"
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    // eslint-disable-next-line @next/next/no-img-element
                    <Image
                        className="object-fill w-2500px h-900px"
                        src="https://www.skygodz.com/wp-content/uploads/2023/01/skygodz_slide02.jpg"
                        alt="image slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-2500px h-900px"
                        src="https://www.skygodz.com/wp-content/uploads/2023/01/skygodz_slide03.jpg"
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}