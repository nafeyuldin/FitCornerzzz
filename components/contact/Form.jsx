import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextareaAutosize,
  TextField,
} from '@mui/material';
import React from 'react';

const Form = () => {
  return (
    <div className="form">
      <Box className="py-10 w-[90%]">
        <Box>
          <h1 className="sm:text-[5vw] text-[8vw] font-bold py-5">
            Send Us A <span className="text-[#FBAC18] ">Message</span>
          </h1>
        </Box>
        <Box classNames="w-full flex flex-col ">
          <Box className="sm:flex w-full items-center justify-between mb-4 ">
            <Box className="sm:w-[48%]">
              <InputLabel className="font-bold text-black py-2">
                Your name
              </InputLabel>
              <TextField
                id="outlined-basic"
                label="John Doe"
                variant="outlined"
                className="w-full"
              />
            </Box>
            <Box className="sm:w-[48%]">
              <InputLabel className="font-bold text-black py-2">
                Email address
              </InputLabel>
              <TextField
                id="outlined-basic"
                label="john@gmail.com"
                variant="outlined"
                className="w-full"
              />
            </Box>
          </Box>
          <Box className="sm:flex w-full items-center justify-between mb-4">
            <Box className="sm:w-[48%]">
              <InputLabel className="font-bold text-black py-2">
                Phone number
              </InputLabel>
              <TextField
                id="outlined-basic"
                label="00962799809878"
                variant="outlined"
                className="w-full"
              />
            </Box>
            <Box className="sm:w-[48%]">
              <InputLabel className="font-bold text-black py-2">
                Subject
              </InputLabel>
              <TextField
                id="outlined-basic"
                label="Type here"
                variant="outlined"
                className="w-full"
              />
            </Box>
          </Box>
          <Box className=" mb-4">
            <InputLabel className="font-bold py-2 text-black">
              Message
            </InputLabel>
            <TextareaAutosize
              id="outlined-basic"
              label="Message"
              placeholder="Type Here"
              variant="outlined"
              minRows={7}
              className="w-full border-gray-300 p-4  border-2"
            />
          </Box>
          <Box className=" mb-4 flex items-center justify-end">
            <Button variant="standard bg-[#FBAC18] hover:bg-[#CF8E14] px-10 py-3  text-white">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
