import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = (props) => {
  return (
    <div>
      <Box className="flex flex-col items-center justify-center w-full shadow-sm shadow-gray-400">
        <Image src={props.img} height={284} width={264} alt="MMA" />

        <Link href={props.link}>
          <Typography className="text-[16px] cursor-pointer font-medium py-2 leading-none w-full text-center">
            {props.title}
          </Typography>
        </Link>
      </Box>
    </div>
  );
};

export default Card;
