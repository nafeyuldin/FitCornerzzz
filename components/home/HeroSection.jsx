import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SliderImg1 from '../../public/Assets/Home/slider1.jpg';
import SliderImg2 from '../../public/Assets/Home/slider2.jpg';
import SliderImg3 from '../../public/Assets/Home/slider3.jpg';
import SliderImg4 from '../../public/Assets/Home/slider4.jpg';

import Image from 'next/image';
// import required modules
import { Navigation } from 'swiper';
import { Typography } from '@mui/material';

const HeroSection = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="HSsection">
        <SwiperSlide className="relative">
          <Image
            src={SliderImg1}
            sx={{
              height: '72vh',
              width: '100%',
            }}
            alt="slider1"
          />
          <Typography className="absolute text-[4.8vw] font-bold bottom-[10%] left-[10%] w-[70%]">
            Lorem ipsum dolor sit, consectetur magna aliqua.
          </Typography>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src={SliderImg2}
            sx={{
              height: '72vh',
              width: '100%',
            }}
            alt="slider1"
          />
          <Typography className="absolute text-[5vw] font-bold bottom-[10%] left-[10%] w-[70%]">
            Lorem ipsum dolor sit, consectetur magna aliqua.
          </Typography>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src={SliderImg3}
            sx={{
              height: '72vh',
            }}
            alt="slider1"
          />
          <Typography className="absolute text-[5vw] font-bold bottom-[10%] left-[10%] w-[70%]">
            Lorem ipsum dolor sit, consectetur magna aliqua.
          </Typography>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <Image
            src={SliderImg4}
            sx={{
              height: '72vh',
            }}
            alt="slider1"
          />
          <Typography className="absolute text-[5vw] font-bold bottom-[10%] left-[10%] w-[70%]">
            Lorem ipsum dolor sit, consectetur magna aliqua.
          </Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default HeroSection;
