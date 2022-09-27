import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';
import DrinkImg from '../../public/Assets/Home/Group 7.svg';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Drink = () => {
  return (
    <div className="drink py-10 sm:py-16">
      <Grid container xs={10}>
        <Box className="w-1/2 flex items-center justify-center px-5">
          <Image src={DrinkImg} height={484} alt="drink" />
        </Box>
        <Box className="w-1/2 flex flex-col left-[5%] right-[5%]  top-[20%] items-start justify-center">
          <Box className="flex gap-x-3   w-[80%]">
            <h1 className="text-[3.8vw]  font-bold text-black">
              Lorem ipsum <span className=" text-[#FBAC18]">Dolor</span>{' '}
              <span className=" ">Amet, </span> Consectetur
            </h1>
          </Box>
          <Typography className="text-[2.2vw]   md:text-[20px] w-[90%] mt-2 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            aliqua.consectetur elit.
          </Typography>
          <Link href="">
            <Button className="bg-transparent md:text-white my-2 text-[#FBAC18] items-center p-0 md:justify-center  w-[150px] h-[40px]  md:bg-[#FBAC18]  hover:bg-[#f2a10b]  md:h-[52px] md:w-[150px] text-[12px] md:[text-[16px]  justify-start flex gap-x-2 ">
              See more <ArrowForwardIcon className="text-[18px]" />
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
};

export default Drink;
