import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import C1 from '../../public/Assets/Home/C1.jpg';
import C2 from '../../public/Assets/Home/C2.jpg';
import C3 from '../../public/Assets/Home/C3.jpg';
import C4 from '../../public/Assets/Home/C4.jpg';
import C5 from '../../public/Assets/Home/C5.jpg';
import C6 from '../../public/Assets/Home/supplements.svg';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Image from 'next/image';
const Category = () => {
  return (
    <div className="category flex items-center justify-center py-5 md:py-[100px] ">
      <Grid container xs={10} className=" items-center justify-evenly  h-full">
        <Grid item xs={12} className="flex items-center justify-center sm:py-5">
          <h1 className="text-[32px] sm:text-[5.5vw] w-full px-4 mx-auto sm:gap-x-3  font-bold flex sm:flex-row flex-col item-center justify-center">
            What Are You
            <span className="text-[#FBAC18] text-[32px]  sm:text-[5.5vw] font-bold">
              {' '}
              Looking For?
            </span>
          </h1>
        </Grid>
        <Grid item xs={12} className="">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4.5,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5.5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly ">
              <Image src={C1} height={150} alt="PTs" />
              <Link href="/homepages/fitness/pts">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  {' '}
                  PTs
                </Typography>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly">
              <Image src={C2} height={150} alt="PTs" />
              <Link href="/homepages/courts/courts">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  Courts
                </Typography>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly ">
              <Image src={C3} height={150} alt="PTs" />
              <Link href="">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  Kids
                </Typography>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly ">
              <Image src={C4} height={150} alt="PTs" />
              <Link href="/homepages/gym/gym">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  Gyms
                </Typography>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly ">
              <Image src={C5} height={150} alt="PTs" />
              <Link href="/homepages/nutritionist/nutritionist">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  Nutritionist
                </Typography>
              </Link>
            </SwiperSlide>
            <SwiperSlide className="CSwiper flex flex-col  w-full   items-center justify-evenly ">
              <Image src={C6} height={150} alt="PTs" />
              <Link href="/homepages/supplements/supplements">
                <Typography className="f-[16px] cursor-pointer w-full text-center  ">
                  Supplements
                </Typography>
              </Link>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Category;
