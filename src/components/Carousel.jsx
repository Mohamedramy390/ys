// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Carousel = ({photos}) => {

    
  return (
    
        <Box sx={{ width: '100%' ,maxWidth: 600, margin: 'auto' }}>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        style={{ width: '100%', height: '100%' }}
        >
        {photos.map((item, index) => (
            <SwiperSlide key={index}>
            <Card sx={{ height: '100%', width: '100%' }}>
                <CardMedia
                component="img"
                height="300"
                width='100%'
                image={item}
                sx={{ objectFit: 'cover' }}
                />
            </Card>
            </SwiperSlide>
        ))}
        </Swiper>
    </Box>
    
  );
};

export default Carousel;
