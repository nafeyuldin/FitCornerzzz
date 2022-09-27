import React from 'react';
import Head from 'next/head';
import HeaderJsx from '../components/home/Header';
import ResponsiveHeaderJsx from '../components/home/ResHeader';
import Footer from '../components/home/Footer';
import { Box, Grid, Typography } from '@mui/material';
import { CallOutlined, EmailOutlined } from '@mui/icons-material';
import Form from '../components/contact/Form';
const Contact = () => {
  return (
    <div className="contact">
      <Head>
        <title>FIT CORNERZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./H_ResLogo.svg" />
      </Head>
      <ResponsiveHeaderJsx />
      <HeaderJsx />
      <Grid container xs={10} className="mx-auto flex flex-col py-5">
        <Box className="py-8">
          <h1 className=" sm:text-[5vw] text-[8.5vw] leading-none font-bold text-black">
            We`d <span className="text-[#FBAC18]">Love</span> To Hear From You
          </h1>
        </Box>
        <Box className="pb-8">
          <Typography className="text-[18px] md:w-[60%]">
            Fit Cornerz is here to help you, our experts are available to answer
            any questions you might have. We’ve got the answers.
          </Typography>
        </Box>
        <Box className="flex flex-col gap-y-5">
          <Box className="flex gap-x-4">
            <EmailOutlined className="text-[25px]" />
            <Typography className="text-[18px]">
              FitCornerz@gmail.com
            </Typography>
          </Box>
          <Box className="flex gap-x-2">
            <CallOutlined className="text-[25px]" />
            <Typography className="text-[18px]">+962798907906</Typography>
          </Box>
        </Box>
        <Form />
      </Grid>
      <Footer />
    </div>
  );
};

export default Contact;