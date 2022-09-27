import React from 'react';
import Image from 'next/image';
import { Box, Card, Typography } from '@mui/material';
import Link from 'next/link';
const BlogCard = (props) => {
  return (
    <div className="blogcard  mx-auto flex  sm:w-auto  w-[300px] ">
      <Card className="flex flex-col   pb-5 h-[430px] items-start justify-start mb-2">
        <Image
          src={props.blogImage}
          alt="Case Study"
          height={250}
          width={500}
        />
        <Link href={props.link}>
          <Typography className="text-[14px] cursor-pointer md:pr-10  font-bold text-[#FBAC18] ml-[5%] mt-4 mb-1 ">
            {props.blogname}
          </Typography>
        </Link>

        <Typography className="text-[20px] md:pr-10  font-bold ml-[5%] ">
          {props.title}
        </Typography>
        <Typography className="text-[16px] md:pr-10  mt-5 ml-[5%]  ">
          {props.description}
        </Typography>
      </Card>
    </div>
  );
};

export default BlogCard;
