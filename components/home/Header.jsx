import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Assets/Home/H_HLogo.svg';
const Header = () => {
  return (
    <div className="header w-full bg-[#ffffff]  shadow-md shadow-gray-200 h-[100px] hidden  md:flex items-center justify-center">
      {/*  logo Grid */}
      <Grid container xs={10} className="mx-auto my-auto">
        <Grid xs={4} align="center" className=" ">
          <Image
            alt="fit cornez logo"
            src={Logo}
            height="38"
            className="mx-auto"
          />
        </Grid>
        {/*  NavLinks Grid */}
        <Grid
          xs={6}
          className="gap-x-8 text-gray-800 font-[monstserrat]  flex items-center justify-center lg:justify-start text-[16px]"
        >
          <Link href="/">
            <a className="font-bold">Home</a>
          </Link>
          <Link href="/Blog">
            <a>Blogs</a>
          </Link>
          <Link href="/BMI">
            <a>BMI</a>
          </Link>
          <Link href="/Contact">
            <a>Contact us</a>
          </Link>
        </Grid>
        {/*  Language Grid */}
        <Grid
          xs={2}
          className=" flex text-gray-800 text-[16px] items-center justify-start gap-x-3"
        >
          <Typography className=" py-1  cursor-pointer border-r-2  border-gray-800 px-2 text-sm">
            English
          </Typography>
          <Typography className=" py-1 text-[#FBAC18] text-sm cursor-pointer">
            عربي
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
