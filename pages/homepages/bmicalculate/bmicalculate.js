import { Box, Grid, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/Assets/Home/Mainlogo.svg';
import Slider from '@mui/material/Slider';
import BMIImg from '../../../public/Assets/Home/BMI.jpg';
import Appstore from '../../../public/Assets/bmicalculate/appstore.svg';
import Googleplay from '../../../public/Assets/bmicalculate/googleplay.svg';
import Link from 'next/link';
const marks = [
  {
    value: 16,
    label: '',
  },
  {
    value: 17,
    label: '',
  },
  {
    value: 18.5,
    label: '',
  },
  {
    value: 25,
    label: '',
  },
  {
    value: 30,
    label: '',
  },
  {
    value: 35,
    label: '',
  },
  {
    value: 40,
    label: '',
  },
];

const bmicalculate = () => {
  const copyright = '© 2022 Fit Cornerz. Made with <3 in Jordan';
  return (
    <div className="bmicalculate">
      <Grid container xs={11} className="mx-auto">
        <Grid item xs={12} className="py-6">
          <Image src={Logo} alt="logo" height={32} />
        </Grid>
        <Grid
          item
          xs={12}
          className="py-6 flex items-center flex-col justify-center"
        >
          <Typography className="md:text-[5vw] text-[30px] font-bold py-4">
            Hello There
          </Typography>
          <Typography className=" text-[16px] text-center ">
            Welcome to Fit Cornerz, this is the resulte for yor BMI test
          </Typography>
        </Grid>
        <Grid item xs={12} className="bg-[#F8F8F8] p-5 md:p-20">
          <Box className="w-full">
            <Grid
              container
              xs={12}
              className="my-2 border-b-2 py-4 border-gray-400"
            >
              <Grid item xs={3} className="sm:text-[16px] text-[10px]">
                Underweight
              </Grid>
              <Grid item xs={3} className="sm:text-[16px] text-[10px]">
                Normal
              </Grid>
              <Grid item xs={3} className="sm:text-[16px] text-[10px]">
                Overweight
              </Grid>
              <Grid item xs={3} className="sm:text-[16px] text-[10px]">
                Obesity
              </Grid>
            </Grid>
            <Grid container xs={12}>
              <Grid
                item
                xs={1}
                className="bg-[#EB5757] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  16
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                className="bg-[#ED8888] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  17
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                className="bg-[#F2C94C] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-12px] mr-[-6px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  18.5
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                className="bg-[#219653] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  25
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                className="bg-[#F2C94C] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  30
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                className="bg-[#ED8888] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] md:text-[16px] text-[10px] z-50 text-white font-bold">
                  35
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                className="bg-[#EB5757] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] z-50 md:text-[16px] text-[10px] text-white font-bold">
                  40
                </Typography>
              </Grid>
              <Grid
                item
                xs={1}
                className="bg-[#AE4242] md:py-7 py-5 flex items-center justify-end"
              >
                <Typography className="md:mr-[-10px] mr-[-5px] z-50 md:text-[16px] text-[10px] text-white font-bold"></Typography>
              </Grid>
              <Grid item xs={12} className="sm:py-8 ">
                <Slider
                  className="bmislider"
                  aria-label="Always invisible"
                  defaultValue={40}
                  valueLabelDisplay="off"
                />
              </Grid>
            </Grid>
          </Box>
          <Box className="py-6 w-full">
            <Typography className="text-[20px] font-bold py-4">
              BMI = 24.2 kg/m2
            </Typography>
            <li className="text-[16px] py-2">
              Healthy BMI range: 18.5kg/m2 - 25kg/m2
            </li>
            <li className="text-[16px] py-2">
              Healthy weight for the height: 53.5 kgs - 72.3 kgs
            </li>
          </Box>
        </Grid>
        <Grid item md={10} className="mx-auto ">
          <Box className="w-full flex  flex-col  items-center justify-center text-center py-5 sm:py-10 md:px-5">
            <Box className="flex  w-[100%] flex-wrap sm:items-center justify-center sm:mb-10 mb-5 ">
              <Typography className=" text-[28px] sm:text-[5vw] font-bold  ">
                Body Mass Index{' '}
              </Typography>
              <Typography className="text-[#FBAC18] text-[28px] sm:px-3 px-1 sm:text-[5vw]  font-bold ">
                (MBI)
              </Typography>
              <Typography className="text-black text-[28px] sm:text-[5vw]  font-bold  ">
                Calculator
              </Typography>
            </Box>

            <Typography className="sm:text-[20px] text-[12px] text-center mb-5 sm:mb-10 tracking-lighter leading-[30px] sm:leading-[36px] ">
              The value obtained from the calculation of BMI is used to
              categorize whether a person is underweight, normal weight,
              overweight, or obese depending on what range the value falls
              between
            </Typography>
            <Link href="/BMI">
              <Button
                variant="filled"
                className="sm:h-[52px] cursor-pointer sm:text-[16px] text-[12px]  h-[48px] w-[150px]  flex sm:w-[348px] bg-[#FBAC18] mb-10 sm:mb-10 hover:bg-[#ec9b05] text-white text-center rounded-sm"
              >
                Calculate Again
              </Button>
            </Link>

            <Box className="w-full pt-5 sm:pt-16">
              <Image
                src={BMIImg}
                alt="BMI Calulator Img"
                height={300}
                className=""
              />
            </Box>
            <Box className="w-full mt-4 flex flex-col border-t-2 border-gray-300  items-center justify-center">
              <Box className="flex sm:flex-row  flex-col gap-2  py-3 sm:gap-y-0 gap-y-4 items-center justify-center">
                <Image src={Appstore} alt="appstore" height={45} />
                <Image src={Googleplay} alt="googleplay" height={45} />
              </Box>
              <Typography className="text-[14px] py-2">{copyright}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default bmicalculate;
