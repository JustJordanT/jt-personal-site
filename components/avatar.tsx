import React from 'react'
import Avatar from '@mui/material';
import Image from '../public/images/JT.jpg'
import image1 from '../public/images/123.jpg'

const AvatarImage = () => {
  return (
    <Avatar
      alt="Jordan Taylor"
      src={Image}
      sx={{ width: 56, height: 56 }} />
  );
}

export default AvatarImage
