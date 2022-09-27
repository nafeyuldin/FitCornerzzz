import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/Assets/Home/H_ResLogo.svg';
import Bar from '../../public/Assets/Home/menubar.svg';
import X from '../../public/Assets/Home/x.svg';
import Link from 'next/link';
const ResHeader = () => {
  const [toggle, Settoggle] = useState(false);

  return (
    <div className="resheader w-full  flex flex-col md:hidden h-auto shadow-md shadow-gray-500 relative items-center justify-center">
      <Grid container xs={12} className=" h-full   p-0">
        <Grid
          xs={12}
          className={
            toggle
              ? ' hidden '
              : 'flex items-center mx-auto justify-between w-full h-[60px] px-5'
          }
        >
          <Image src={Logo} alt="Fit Cornerz logo" height={28} />
          <Image
            onClick={() => Settoggle(toggle == false ? true : false)}
            src={Bar}
            alt="bar"
            height={28}
            className="cursor-pointer"
          />
        </Grid>

        <Grid
          xs={12}
          className={
            toggle
              ? 'resH shadow-md shadow-gray-500 flex flex-col mx-auto absolute top-0 left-0 right-0 pb-10 px-10 '
              : 'hidden'
          }
        >
          <Box className="w-full flex  items-center justify-end h-[60px]  ">
            <Image
              onClick={() => Settoggle(toggle == true ? false : true)}
              src={X}
              height={30}
              alt="X"
              className="cursor-pointer"
            />
          </Box>
          <Box className="flex flex-col  ">
            <Typography className="text-[16px] font-bold my-3">More</Typography>
            <Box className="flex gap-x-2  ">
              <Typography className="text-[14px] py-1 pr-2 border-r-2 border-gray-500 ">
                English
              </Typography>
              <Typography className="text-[14px] py-1 text-[#FBAC18]">
                عربي
              </Typography>
            </Box>
            <Box className="flex flex-col items-start justify-center gap-y-4 py-3">
              <Link href="/https://play.google.com/store/apps?hl=en">
                <a className="text-[14px]">Download the app</a>
              </Link>
              <Link href="/Blog">
                <a className="text-[14px]">Blogs</a>
              </Link>
              <Link href="/">
                <a className="text-[14px]">Terms&Conditions</a>
              </Link>
              <Link href="/Contact">
                <a className="text-[14px]">Contact Us</a>
              </Link>
            </Box>
          </Box>
          <Box className="flex flex-col  ">
            <Typography className="text-[16px] font-bold my-4">
              What are you looking for ?
            </Typography>
            <Box className="flex flex-col items-start justify-center gap-y-4">
              <Link href="/homepages/fitness/pts">
                <a className="text-[14px]">PTs</a>
              </Link>
              <Link href="/homepages/courts/courts">
                <a className="text-[14px]">Courts</a>
              </Link>
              <Link href="/Kids">
                <a className="text-[14px]">Kids</a>
              </Link>
              <Link href="/homepages/gym/gym">
                <a className="text-[14px]">Gyms</a>
              </Link>
              <Link href="/homepages/nutritionist/nutritionist">
                <a className="text-[14px]">Nutritionist</a>
              </Link>
              <Link href="/homepages/supplements/supplements">
                <a className="text-[14px]">Supplements</a>
              </Link>
              <Link href="/PhysioTherapy">
                <a className="text-[14px]">Physio Therapy</a>
              </Link>
              <Link href="/HealthyFood">
                <a className="text-[14px]">Healthy Food</a>
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResHeader;
