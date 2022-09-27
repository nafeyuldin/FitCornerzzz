import { Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';
import AppImg from '../../public/Assets/Home/iPhone 13 Mockup 1.svg';
import AppstoreImg from '../../public/Assets/Home/Group.svg';
import GoogleplayImg from '../../public/Assets/Home/Group (1).svg';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Mobileapp = () => {
  return (
    <div className="drink ">
      <Grid container xs={10}>
        <Box className="w-1/2 flex items-center justify-center px-5">
          <Image src={AppImg} height={484} alt="drink" />
        </Box>
        <Box className="w-1/2 flex flex-col left-[5%] right-[5%]  top-[20%] items-start justify-center">
          <Box className="flex flex-col gap-x-3 leading-tight w-[80%]">
            <h1 className="text-[5vw]  font-bold text-[#FBAC18]">Download</h1>
            <h1 className="text-[5vw]  font-bold text-black">The App</h1>
          </Box>
          <Typography className="text-[2.2vw]   md:text-[20px] w-[90%] mt-2 md:my-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            aliqua.consectetur elit.
          </Typography>
          <Box className="flex gap-x-3  mt-4">
            <Link href="">
              <Image height={52} width={150} src={AppstoreImg} alt="appstore" />
            </Link>
            <Link href="">
              <Image
                height={52}
                width={150}
                src={GoogleplayImg}
                alt="googleplay"
              />
            </Link>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default Mobileapp;
