import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';
import FooterLogo from '../../public/Assets/Home/Group 6986.svg';
import { FacebookRounded, Twitter, Instagram } from '@mui/icons-material';
import Appstore from '../../public/Assets/Home/appstore1.svg';
import Googleplay from '../../public/Assets/Home/googleplay1.svg';

const Footer = () => {
  return (
    <div className="bg-[#FBAC18] pt-16 w-full ">
      <Grid container xs={12}>
        <Grid
          xs={10}
          className="flex md:flex-row flex-col  mx-auto pb-10 md:pb-20 border-b-2 border-white "
        >
          <Box className="flex md:w-[40%] w-[90%] md:mb-0 mb-12  flex-col items-start gap-y-3 justify-center ">
            <Box>
              <Image src={FooterLogo} height={38} alt="logo" />
            </Box>
            <Box>
              <Typography className="text-[16px] text-white w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </Typography>
            </Box>
            <Box className="flex   w-[300px]">
              <FacebookRounded className="text-[24px] mr-4 text-white cursor-pointer" />
              <Twitter className="text-[24px] text-white mr-4 cursor-pointer" />
              <Instagram className="text-[24px] text-white mr-4 cursor-pointer" />
            </Box>
          </Box>
          <Box className="w-[13%] text-white font-bold gap-y-3 flex flex-col mb-3 items-start justify-center">
            <Link
              href="/Blog"
              className="text-white text-[16px] cursor-pointer  font-bold "
            >
              Blog
            </Link>
            <Link
              href="/homepages/fitness/pts"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              PTs
            </Link>
            <Link
              href="/homepages/courts/courts"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Courts
            </Link>
          </Box>
          <Box className="w-[13%] flex flex-col font-bold text-white gap-y-3 mb-3 items-start justify-center">
            <Link
              href="/"
              className="text-white text-[16px]  cursor-pointer font-bold "
            >
              Kids
            </Link>
            <Link
              href="/homepages/gym/gym"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Gyms
            </Link>
            <Link
              href="/homepages/nutritionist/nutritionist"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Nutritionist
            </Link>
          </Box>
          <Box className="w-[13%] text-white font-bold flex flex-col gap-y-3 mb-3 items-start justify-center">
            <Link
              href="/homepages/supplements/supplements"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Supplements
            </Link>
            <Link
              href="/"
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Physio Therapy
            </Link>
            <Link
              href=""
              className="text-white text-[16px] cursor-pointer font-bold "
            >
              Healthy Food
            </Link>
          </Box>
          <Box className="w-[20%] flex my-4 flex-col text-white items-end gap-y-3 mb-3 justify-center md:justify-start">
            <Link href="/" className="cursor-pointer">
              <Image src={Appstore} height={48} alt="appstore" />
            </Link>
            <Link href="/" className="cursor-pointer">
              <Image src={Googleplay} height={48} alt="appstore" />
            </Link>
          </Box>
        </Grid>
        <Grid
          xs={10}
          className="flex md:flex-row flex-col py-10 text-white gap-x-10 gap-y-5 mx-auto items-center justify-center"
        >
          <Typography>© 2022 Fit Cornerz. Made with 3 in Jorda</Typography>
          <Link href="/Contact">
            <Typography className="cursor-pointer">Contact Us</Typography>
          </Link>

          <Typography>Terms&Condition</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
