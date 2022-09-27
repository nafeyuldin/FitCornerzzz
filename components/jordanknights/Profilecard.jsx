import {
  EmailOutlined,
  Facebook,
  Instagram,
  LanguageOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  MonetizationOnOutlined,
} from '@mui/icons-material';
import { Box, Card, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Soccer from '../../public/Assets/home_courts_soccer/soccer.svg';
import Image1 from '../../public/Assets/home_courts_soccer/Image.svg';

//   import Lena2 from '../../public/Assets/home_pts_fitness_lena/2.svg';
//   import Lena3 from '../../public/Assets/home_pts_fitness_lena/3.svg';
import 'swiper/css';
import 'swiper/css/pagination';
import Modal from '@mui/material/Modal';
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Routine from '../../public/Assets/home_pts_fitness_lena/routine.svg';
import X from '../../public/Assets/Home/x.svg';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
const Profilecard = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="profilecard ">
      <Grid container xs={12} className="flex ">
        <Grid
          item
          xs={4}
          className="bg-white flex shrink md:items-center md:justify-center "
        >
          <Image src={props.image} alt="lena" height={400} width={400} />
        </Grid>
        <Grid item xs={8} className="flex flex-col  md:pt-10 px-5">
          <Grid className="flex flex-col  px-5  w-full">
            <Box className="md:flex mt-5 md:mt-0 items-center justify-start g md:gap-y-0 md:justify-between pb-5 ">
              <Typography className="sm:text-[4vw] text-[16px] w-[80%] leading-none font-bold">
                {props.name}
              </Typography>
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
              <Typography className="text-[16px] ">
                {props.description}
              </Typography>
              <Box className="flex w-full md:gap-8 mt-[10vw] ">
                <Box className="flex gap-2 justify-start items-center">
                  <EmailOutlined className="text-[16px]" />
                  <Typography className="text-[16px]">{props.email}</Typography>
                </Box>
                <Box className="flex gap-2 justify-start items-center">
                  <LocalPhoneOutlined className="text-[16px]" />
                  <Typography className="text-[16px]">{props.phone}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid item className="flex md:hidden px-3 pt-5 pb-10">
          <Box className="flex flex-col gap-y-5">
            <Typography className="text-[16px]">{props.description}</Typography>
            <Box className=" flex flex-col  md:flex-row w-full md:gap-8 gap-y-4 ">
              <Box className="flex gap-2 justify-start items-center">
                <EmailOutlined className="text-[16px]" />
                <Typography className="text-[16px]">{props.email}</Typography>
              </Box>
              <Box className="flex gap-2 justify-start items-center">
                <LocalPhoneOutlined className="text-[16px]" />
                <Typography className="text-[16px]">{props.phone}</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container xs={12} className=" md:py-16">
        <Swiper
          slidesPerView={1}
          className="flex gap-10 w-full "
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide margin={0} padding={0} className="   ">
            <Image onClick={handleOpen} src={Image1} height={305} alt="lena" />
          </SwiperSlide>
          <SwiperSlide className=" flex items-center justify-center   ">
            <Image onClick={handleOpen} src={Image1} height={305} alt="lena" />
          </SwiperSlide>
          <SwiperSlide className=" flex items-center justify-center  ">
            <Image onClick={handleOpen} src={Image1} height={305} alt="lena" />
          </SwiperSlide>
          <SwiperSlide className="   flex items-center justify-center ">
            <Image onClick={handleOpen} src={Image1} height={305} alt="lena" />
          </SwiperSlide>
        </Swiper>
      </Grid>
      <Grid container xs={12} className="flex flex-col gap-y-4">
        <Box className="w-full flex  flex-col items-start justify-center ">
          <Typography className="sm:text-[5vw] text-[30px]  pt-3 sm:py-4 font-bold">
            More Details
          </Typography>
        </Box>
        <Box className="flex gap-2  justify-start items-center">
          <LocationOnOutlined className="text-[16px]" />
          <Typography className="text-[16px]">{props.location}</Typography>
        </Box>
        <Box className="flex gap-2 justify-start items-center">
          <LanguageOutlined className="text-[16px]" />
          <Typography className="text-[16px]">{props.languages}</Typography>
        </Box>
        <Box className="flex gap-2 justify-start items-center">
          <MonetizationOnOutlined className="text-[16px]" />
          <Typography className="text-[16px]">{props.money}</Typography>
        </Box>
        <Box className="flex gap-2 justify-start items-center">
          <Image src={Routine} alt="icon" height={20} />

          <Typography className="text-[16px]">{props.routines}</Typography>
        </Box>
      </Grid>
      <Grid container xs={12}>
        <Box className="w-full flex flex-col items-start justify-center ">
          <Typography className="sm:text-[5vw] text-[30px] font-bold py-4  text-[#FBAC18]">
            Pricing
          </Typography>
        </Box>
        <Box className="w-full">
          <TableContainer className="w-[95%] md:w-[60%]">
            <Table className="w-full">
              <TableHead className="bg-gray-200 ">
                <TableRow>
                  <TableCell className="font-bold">Courts</TableCell>
                  <TableCell className="font-bold">Time</TableCell>
                  <TableCell className="font-bold">Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell rowspan="3" className="font-bold">
                    Football
                  </TableCell>
                  <TableCell>30 Min</TableCell>
                  <TableCell>10 JOD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 Hour</TableCell>
                  <TableCell>15 JOD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2 Hour</TableCell>
                  <TableCell>20 JOD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell rowspan="3" className="font-bold">
                    Basketball
                  </TableCell>
                  <TableCell>30 Min</TableCell>
                  <TableCell>10 JOD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1 Hour</TableCell>
                  <TableCell>15 JOD</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2 Hour</TableCell>
                  <TableCell>20 JOD</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
      <Grid container xs={12}>
        <Box className="w-full flex flex-col items-start justify-center ">
          <Typography className="sm:text-[5vw] text-[30px] font-bold py-4  text-[#FBAC18]">
            Sports
          </Typography>
          <Box className="w-full flex flex-col items-start gap-y-3 justify-center ">
            <li className="text-[20px]">Football</li>
            <li className="text-[20px]">Basket Ball</li>
          </Box>
        </Box>
      </Grid>

      <Grid container xs={12}>
        <Modal
          className="flex items-center justify-center"
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid
            container
            xs={12}
            className="relative bg-white h-auto p-10 sm:p-20 w-full mt-[15%] sm:mt-[0%]   flex items-center justify-center "
          >
            <Box
              onClick={handleClose}
              height={30}
              width={30}
              className="absolute z-50 flex items-center z-11 justify-center top-[5%] p-1 right-[3%] bg-gray-300 rounded-full  "
            >
              <Image src={X} height={30} width={30} alt="x" className="" />
            </Box>
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="h-full w-full items-center flex justify-center "
            >
              <SwiperSlide className=" h-full shadow-md shadow-gray-300 flex my-auto  items-center justify-center ">
                <Image src={Image1} height={500} width={700} alt="slider1" />
              </SwiperSlide>
              <SwiperSlide className=" h-full flex my-auto shadow-gray-300 items-center justify-center ">
                <Image src={Image1} height={500} width={700} alt="slider1" />
              </SwiperSlide>
              <SwiperSlide className=" h-full flex my-auto  shadow-gray-300 items-center justify-center ">
                <Image src={Image1} height={500} width={700} alt="slider1" />
              </SwiperSlide>
              <SwiperSlide className=" h-full flex my-auto shadow-gray-300 items-center justify-center ">
                <Image src={Image1} height={500} width={700} alt="slider1" />
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Modal>
      </Grid>
    </div>
  );
};

export default Profilecard;
