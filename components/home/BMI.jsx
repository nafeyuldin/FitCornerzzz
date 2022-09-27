import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BMIImg from '../../public/Assets/Home/BMI.jpg';

const BMI = () => {
  return (
    <div>
      <Box className="w-full flex  flex-col  items-center justify-center text-center py-5 sm:py-10 px-5">
        <Box className="flex  w-[100%] flex-wrap sm:items-center justify-center sm:mb-10 mb-5 ">
          <Typography className=" text-[28px] sm:text-[5vw] font-bold  ">
            Body Mass Index{' '}
          </Typography>
          <Typography className="text-[#FBAC18] text-[28px] sm:px-3 px-1 sm:text-[5vw]  font-bold ">
            (MBI)
          </Typography>
          <Typography className="text-[#FBAC18] text-[28px] sm:text-[5vw]  font-bold  ">
            Calculator
          </Typography>
        </Box>

        <Typography className="sm:text-[20px] text-[12px] text-center mb-5 sm:mb-10 tracking-lighter leading-[30px] sm:leading-[36px] ">
          The value obtained from the calculation of BMI is used to categorize
          whether a person is underweight, normal weight, overweight, or obese
          depending on what range the value falls between
        </Typography>
        <Link href="/homepages/bmicalculate">
          <Button
            variant="filled"
            className="sm:h-[52px] h-[48px] w-[300px] flex sm:w-[348px] bg-[#FBAC18] mb-10 sm:mb-10 hover:bg-[#ec9b05] text-white text-center rounded-sm"
          >
            BMI Calulator
          </Button>
        </Link>

        <Image
          src={BMIImg}
          alt="BMI Calulator Img"
          height={300}
          className="my-2"
        />
      </Box>
    </div>
  );
};

export default BMI;
