import { Box, Breadcrumbs, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Header from '../../../components/Home/Header';
import ResHeader from '../../../components/Home/ResHeader';
import Footer from '../../../components/Home/Footer';
import Card from '../../../components/homepts/Card';
import MMA from '../../../public/Assets/home_pts/two-professional-mma-fighters-boxing-isolated-white-studio 1.svg';
import Swimming from '../../../public/Assets/home_pts/strong-caucasian-professional-sportsman-swimmer-training-isolated-white 1.svg';
import Boxing from '../../../public/Assets/home_pts/full-length-portrait-muscular-sportsman-with-prosthetic-leg-copy-space-male-boxer-red-gloves-training-practicing-isolated-white-wall-concept-sport-healthy-lifestyle 1.svg';
import Wrestling from '../../../public/Assets/home_pts/young-man-thai-boxer-training-isolated-white-studio-background-concept-sport 1.svg';
import Fitness from '../../../public/Assets/home_pts/caucasian-professional-male-athlete-runner-training-isolated-white-background 2.svg';
import Yoga from '../../../public/Assets/home_pts/pexels-shvets-production-6975241 1.svg';
import BodyBuilding from '../../../public/Assets/home_pts/close-up-portrait-serious-sweaty-athletic-man-lifting-dumbbell 1.svg';
import SoccerAcademys from '../../../public/Assets/home_pts/lucky-football-player 1.svg';
import Tennis from '../../../public/Assets/home_pts/one-caucasian-man-playing-tennis-player-isolated-white 1.svg';
import TableTennis from '../../../public/Assets/home_pts/athlete-with-disabilities-amputee-isolated-white-professional-male-tennis-player-with-leg-prosthesis-training 1.svg';
import JiuJitsu from '../../../public/Assets/home_pts/two-judokas-fighters-posing-gray 1.svg';
import Shooting from '../../../public/Assets/home_pts/portrait-young-soldier-camouflage-with-gun-white-wall 1.svg';
import Kickboxing from '../../../public/Assets/home_pts/mma-fighters-white-background 1.svg';

const Pts = ({ img, title, link }) => {
  return (
    <div className="pts w-full   ">
      <Head>
        <title>FIT CORNERZ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="../../../public/H_ResLogo.svg" />
      </Head>
      <Header />
      <ResHeader />
      <Grid container md={9} className="mx-auto px-5 md:px-0 pb-10 sm:pb-20 ">
        <Grid xs={12} className="py-8 ">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>

            <Typography color="text.primary">PTs</Typography>
          </Breadcrumbs>
        </Grid>
        <Grid xs={12}>
          <Typography className="text-[14px] font-bold text-[#FBAC16]">
            13 CATEGORIES
          </Typography>
          <Typography className="text-[56px] font-bold ">PTs</Typography>
        </Grid>
        <Grid xs={12} className="py-5">
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </Typography>
        </Grid>
        <Grid xs={12} className="pt-5 pb-10 md:pb-16">
          <Grid className="">
            <Grid className=" md:flex flex-col gap-5  md:gap-y-0">
              <Grid className=" flex md:flex-row flex-col items-center justify-center md:mb-5 gap-5">
                <Box className="flex  md:mb-0 gap-5">
                  <Card
                    img={MMA}
                    title="MMA"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={Swimming}
                    title="Swimming"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
                <Box className="flex mb-5 md:mb-0 gap-5">
                  <Card
                    img={Boxing}
                    title="Boxing"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={Wrestling}
                    title="Wrestling"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
              </Grid>
              <Grid className=" flex md:flex-row flex-col items-center justify-center md:mb-5 gap-5">
                <Box className="flex gap-5  md:mb-0">
                  <Card
                    img={Fitness}
                    title="Fitness"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={Yoga}
                    title="Yoga"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
                <Box className="flex gap-5 mb-5 md:mb-0">
                  <Card
                    img={BodyBuilding}
                    title="Body Building"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={SoccerAcademys}
                    title="Soccer Academys"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
              </Grid>
              <Grid className=" flex md:flex-row flex-col items-center justify-center md:mb-5 gap-5">
                <Box className="flex gap-5  md:mb-0">
                  <Card
                    img={Tennis}
                    title="Tennis"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={TableTennis}
                    title="Table Tennis"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
                <Box className="flex gap-5 mb-5 md:mb-0">
                  <Card
                    img={JiuJitsu}
                    title="Jiu Jitsu"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={Shooting}
                    title="Shooting"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
              </Grid>
              <Grid className=" flex md:flex-row flex-col items-center justify-center md:mb-5 gap-5">
                <Box className=" md:w-1/2 flex gap-5  md:mb-0">
                  <Card
                    img={Kickboxing}
                    title="Kickboxing"
                    link="/homepages/fitness/fitness"
                  />
                  <Card
                    img={BodyBuilding}
                    title="Body Building"
                    link="/homepages/fitness/fitness"
                  />
                </Box>
                <Box className="md:w-1/2 flex gap-5 mb-5 md:mb-0"></Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Pts;