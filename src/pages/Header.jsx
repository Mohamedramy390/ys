import React from 'react'
import { Box, Grid, Typography, Stack, Button } from '@mui/material'
import Title from '../components/Title'
import HomeImg from '../assets/Group 2373.png'
import Layout from '../components/Layout'
import Btn from '../components/Btn'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Header = ({scrollToSection}) => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Yasmine-Zeineldin.pdf'; // Relative to public/
        link.download = 'Yasmine-Zeineldin.pdf'; // Optional: rename on download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


  return (
    <Layout>
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        >
        <Stack id='header' direction='row' minHeight='1024px' flexWrap={'wrap'} alignItems='center' justifyContent='center'>
        <Box  sx={{
            display:'flex',
            alignItems:{
                xs:'center',
                md:'start'
            },
            justifyContent:'center',
            flexDirection:'column',
            maxWidth:{
                xs:'100%',
                md:'50%',
            },
            
        }}>
            <Box sx={{marginTop:{xs: '30px', sm:'0'}}}><Title fontSize={94} text1='Front-End' text2='developer' /></Box>
            <Stack direction='row' padding='20px 0'>
                <Btn type='static' onClick={scrollToSection} text={'Hire me'} bcolor={'#00ADB5'} />
                <Btn type='static' onClick={handleDownload} text={'Download my CV'} bcolor={'#393E46'} />
            </Stack>
        </Box>
        
        <Box>
        <Box component='img'
            src={HomeImg}
            sx={{
                display:'flex',
                width:{
                    xs: '100%',
                    sm: '300px',
                    md: '300px',
                    lg:'500px',
                }
            }}
        ></Box>
        </Box>
        </Stack>
    </motion.div>
    </Layout>
  )
}

export default Header