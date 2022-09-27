import { Box, Card, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import casestudyBImg from '../../public/Assets/Home/casestudy.jpg';
import videoBImg from '../../public/Assets/Home/video.jpg';
import articleBImg from '../../public/Assets/Home/article.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import BlogCard from './BlogCard';
const Blogs = ({ blogname, title, description, blogImage, link }) => {
  return (
    <div className="blogs flex items-center justify-center">
      <Grid container md={10}>
        <Grid
          item
          xs={12}
          className="text-center flex md:mt-0 mt-5 items-center justify-center"
        >
          <h1 className="flex text-[32px]  py-6 font-bold md:text-[5.5vw] gap-x-4">
            {' '}
            From Our{' '}
            <span className="flex  text-[32px] md:text-[5.5vw] font-bold  text-[#FBAC18]">
              {' '}
              Blogs
            </span>
          </h1>
        </Grid>
        <Grid item xs={12} className="mx-auto">
          <div
            item
            className=" flex   w-full items-start justify-evenly mx-auto my-0 md:my-10 "
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                550: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="">
                <BlogCard
                  blogImage={casestudyBImg}
                  blogname="CASE STUDY"
                  title="Sed do eiusmod tempor 8% incididunt ut labore et."
                  description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu reprehenderit fugiat."
                  link="/homepages/blog/article"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  blogImage={videoBImg}
                  blogname="VIDEO"
                  title="Oed emasn eiusmod tempor incididunt labore et dolor."
                  description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat،Excepteur sint occaecat cupidatat"
                  link="/homepages/blog/article"
                />
              </SwiperSlide>
              <SwiperSlide>
                <BlogCard
                  blogImage={articleBImg}
                  blogname="ARTICLE"
                  title="Dolor masn eiusmod tempor  labore et occaecat."
                  description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
                  link="/homepages/blog/article"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blogs;
