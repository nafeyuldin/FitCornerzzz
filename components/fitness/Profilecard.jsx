import {
  Facebook,
  Instagram,
  LanguageOutlined,
  LocationOnOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material';
import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Profilecard = (props) => {
  return (
    <div className="profilecard ">
      <Card>
        <Grid container xs={12} className=" ">
          <Grid xs={5} className="bg-[#F2F2F2] ">
            <Image src={props.image} alt="marcelo" height={352} />
          </Grid>
          <Grid xs={7} className="flex flex-col  md:pt-10">
            <Grid className="flex flex-col  px-5  w-full">
              <Box className="md:flex mt-5 md:mt-0 items-center justify-start g md:gap-y-0 md:justify-between pb-5 ">
                <Link href={props.link}>
                  <Typography className="sm:text-[24px] cursor-pointer text-[16px] font-bold">
                    {props.name}
                  </Typography>
                </Link>

                <Box className="flex gap-3 mt-3 md:mt-0">
                  <Link href={props.facebook}>
                    <Facebook className="md:text-[24px] text-[30px] text-[#FBAC18]" />
                  </Link>
                  <Link href={props.instagram}>
                    <Instagram className="md:text-[24px] text-[30px] text-[#FBAC18]" />
                  </Link>
                </Box>
              </Box>
              <Box className="  .profiledetail md:flex hidden flex-col gap-y-3">
                <Typography className="text-[16px]">
                  {props.description}
                </Typography>
                <Box className="flex gap-2 justify-start items-center">
                  <LocationOnOutlined className="text-[16px]" />
                  <Typography className="text-[16px]">
                    {props.location}
                  </Typography>
                </Box>
                <Box className="flex gap-2 justify-start items-center">
                  <MonetizationOnOutlined className="text-[16px]" />
                  <Typography className="text-[16px]">{props.money}</Typography>
                </Box>
                <Box className="flex gap-2 justify-start items-center">
                  <LanguageOutlined className="text-[16px]" />
                  <Typography className="text-[16px]">
                    {props.languages}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid className="flex md:hidden px-3 pt-5 pb-10">
            <Box className="flex flex-col gap-y-5">
              <Typography className="text-[16px]">
                {props.description}
              </Typography>
              <Box className="flex gap-2 justify-start items-center">
                <LocationOnOutlined className="text-[16px]" />
                <Typography className="text-[16px]">
                  {props.location}
                </Typography>
              </Box>
              <Box className="flex gap-2 justify-start items-center">
                <MonetizationOnOutlined className="text-[16px]" />
                <Typography className="text-[16px]">{props.money}</Typography>
              </Box>
              <Box className="flex gap-2 justify-start items-center">
                <LanguageOutlined className="text-[16px]" />
                <Typography className="text-[16px]">
                  {props.languages}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Profilecard;
