import { Box, Breadcrumbs, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../../../components/home/Header';
import ResHeader from '../../../components/Home/ResHeader';
import Footer from '../../../components/Home/Footer';
import Card from '../../../components/homepts/Card';
import Image1 from '../../../public/Assets/home_courts_soccer/Image.svg';
// import Tennis from '../../../public/Assets/home_courts/tennis.svg';
// import SwimmingPools from '../../../public/Assets/home_courts/swimmingpools.svg';
// import PaddleTennis from '../../../public/Assets/home_courts/paddletennis.svg';
// import AmericanFootball from '../../../public/Assets/home_courts/rugby.svg';
// import BasketBall from '../../../public/Assets/home_courts/basketball.svg';
// import Handball from '../../../public/Assets/home_courts/handball.svg';
// import VRPlaces from '../../../public/Assets/home_courts/vrplaces.svg';
// import TabbleTennis from '../../../public/Assets/home_courts/tabletenis.svg';
// import Paintball from '../../../public/Assets/home_courts/paintball.svg';
// import ShootingRange from '../../../public/Assets/home_courts/shootingrange.svg';
// import Esports from '../../../public/Assets/home_courts/esports.svg';
// import Squash from '../../../public/Assets/home_courts/squash.svg';
// import Badminton from '../../../public/Assets/home_courts/badminton.svg';
// import Vollayball from '../../../public/Assets/home_courts/volleyball.svg';
// import Gokarting from '../../../public/Assets/home_courts/gokarting.svg';
// import Bowling from '../../../public/Assets/home_courts/bowling.svg';
// import Golf from '../../../public/Assets/home_courts/golf.svg';
// import HorseBackriding from '../../../public/Assets/home_courts/horsebackriding.svg';

const gym = ({ img, title, link }) => {
  return (
    <div className="pts w-full  ">
      <Head>
        <title>FIT CORNERZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../../../public/H_ResLogo.svg" />
      </Head>
      <Header />
      <ResHeader />
      <Grid container md={9} className="mx-auto px-5 md:px-0 pb-10 sm:pb-20">
        <Grid xs={12} className="py-8 ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography color="text.primary">Gyms</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <Typography className="text-[14px] font-bold text-[#FBAC16]">
            11 CATEGORIES
          </Typography>
          <Typography className="text-[56px] font-bold ">Gyms</Typography>
        </Grid>
        <Grid xs={12} className="py-5">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Typography>
        </Grid>
        <Grid xs={12} className="pt-5 pb-16">
          <Grid className="">
            <Grid className=" md:flex flex-col  gap-5  md:gap-y-0">
              <Grid className=" flex md:flex-row flex-col items-center justify-center md:mb-5 gap-5">
                <Box className="flex  md:mb-0 gap-5">
                  <Card
                    img={Image1}
                    title="Soccer"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="Tennis"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
                <Box className="flex mb-5 md:mb-0 gap-5">
                  <Card
                    img={Image1}
                    title="Swimming Pools"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="Paddle Tennis"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
              </Grid>
              <Grid className="md:mb-5 flex md:flex-row flex-col items-center justify-center gap-5">
                <Box className="flex gap-5  md:mb-0">
                  <Card
                    img={Image1}
                    title="Rugby & American football"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="Basket Ball"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
                <Box className="flex gap-5 mb-5 md:mb-0">
                  <Card
                    img={Image1}
                    title="Handball"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="VR Places"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
              </Grid>
              <Grid className="md:mb-5 flex md:flex-row flex-col items-center justify-center gap-5">
                <Box className="flex gap-5  md:mb-0">
                  <Card
                    img={Image1}
                    title="Table Tennis"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="Painball"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
                <Box className="flex gap-5 mb-5 md:mb-0">
                  <Card
                    img={Image1}
                    title="Shooting Range"
                    link="/homepages/gym/bodybuilding"
                  />
                  <Card
                    img={Image1}
                    title="E-Sports"
                    link="/homepages/gym/bodybuilding"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default gym;
