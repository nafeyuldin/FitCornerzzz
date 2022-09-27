import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';
import GamesImg from '../../public/Assets/Home/gamess.jpg';

const Game = () => {
  return (
    <div className=" flex w-full game py-10 md:py-20">
      <Grid
        xs={10}
        container
        className="mx-auto md:flex items-center justify-center "
      >
        <Box className="mx-auto pr-1 w-1/2 flex items-center justify-center md:justify-start ">
          <Image src={GamesImg} alt="games" height={483} width={526} />
        </Box>
        <Box className="mx-auto  w-1/2  flex font-bold items-start justify-center flex-col">
          <Box className="w-full flex flex-wrap items-center justify-start mb-4 md:mb-10 gap-y-1">
            <Typography className="sm:text-[3.5vw] text-[3.5vw] pl-3 font-extrabold ">
              Lorem
            </Typography>
            <Typography className="sm:text-[3.5vw] px-3 text-[3.5vw] sm:pl-3 text-[#FBAC18] font-extrabold ">
              Ipsumsim
            </Typography>
            <Typography className="sm:text-[3.5vw] pl-3 text-[3.5vw] font-extrabold ">
              Doler Amet
            </Typography>
          </Box>
          <Typography className="sm:text-[20px] text-[2.5vw] pl-3 md:mt-15 tracking-wider ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
            aliqua.consectetur elit.
          </Typography>
        </Box>
      </Grid>
    </div>
  );
};

export default Game;
