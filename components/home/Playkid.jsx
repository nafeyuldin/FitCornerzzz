import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KidplayImg from '../../public/Assets/Home/12.svg';
import Link from 'next/link';

const Playkid = () => {
  return (
    <div className="playkid w-full">
      <Box className="relative flex  w-full">
        <Image
          src={KidplayImg}
          sx={{
            height: '80vh',
          }}
          alt="kid playing"
        />

        <Box className="absolute flex flex-col left-[5%] right-[5%]  top-[20%] ">
          <Box className="flex gap-x-3  w-[80%]">
            <h1 className="text-[5vw]  font-extrabold text-black">
              Lorem ipsum Dolor <span className=" text-[#FBAC18]">Sit</span>{' '}
              <span className=" text-[#FBAC18]">Amet, </span> Consectetur
            </h1>
          </Box>
          <Typography className="text-[2.2vw] md:text-[20px] w-[60%] mt-2 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            aliqua.consectetur elit.
          </Typography>
          <Link href="">
            <Button className="bg-transparent md:text-white text-[#FBAC18] items-center p-0 md:justify-center  w-[150px] h-[40px]  md:bg-[#FBAC18]  hover:bg-[#f2a10b]  md:h-[52px] md:w-[150px] text-[12px] md:[text-[16px]  justify-start flex gap-x-2 ">
              See more <ArrowForwardIcon className="text-[18px]" />
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Playkid;
