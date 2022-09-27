import React from 'react';
import Head from 'next/head';
import { Box, Breadcrumbs, Grid, Typography } from '@mui/material';
import ProfileCard from '../../../components/jordanknights/Profilecard';
import Link from 'next/link';
import Header from '../../../components/Home/Header';
import ResHeader from '../../../components/Home/ResHeader';
import Soccer from '../../../public/Assets/home_courts_soccer/soccer.svg';
import Footer from '../../../components/Home/Footer';
const jordinknights = ({
  image,
  name,
  description,
  email,
  phone,
  facebook,
  instagram,
  location,
  money,
  languages,
  routines,
}) => {
  return (
    <div className="">
      <Head>
        <title>FIT CORNERZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../../../public/H_ResLogo.svg" />
      </Head>
      <Header />
      <ResHeader />
      <Grid container md={10} className="mx-auto px-5 md:px-0 pb-10 sm:pb-20">
        <Grid xs={12} className="py-8  ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/homepages/courts/courts"
            >
              Courts
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/homepages/courts/soccer"
            >
              Soccer
            </Link>
            <Typography color="text.primary">Jordan Knights</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <ProfileCard
            image={Soccer}
            name="Jordan knights"
            description=" Hello,my name is Jordan knights , I am a Certified Personal Trainer and Nutritional Advisor in Abu Dhabi. Since I have 7 years of experience in this field."
            email="Jordanknights@gmail.com"
            phone="+962798907906"
            facebook="https://www.facebook.com"
            instagram="https://instagram.com"
            location="Amman, Jordan"
            languages="Arabic, English"
            money="25 JOD/hr"
            routines="At Home, Outside, Gym, Online"
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default jordinknights;
