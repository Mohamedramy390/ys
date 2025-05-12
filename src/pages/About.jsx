import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import AboutImg from '../assets/Group 2374.png'
import Title from '../components/Title'
import bgImg from '.././assets/Group 2375.png'
import Layout from '../components/Layout'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout>
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true ,amount: 0.5}}
        transition={{ duration: 0.5 }}
        >
    <Stack id='about' direction='row' minHeight='1024px' flexWrap={'wrap'} alignItems='center' 
        sx={{
            justifyContent:{
                xs:'center',
                md:'space-between'
            }
        }}
    >
    <Stack direction='column' 
        sx={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover',   
            backgroundPosition: 'start',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            justifyContent:{
                xs:'center',
                
            },
            alignItems:{
                xs:'center',
                md:'start'
            },
            maxWidth:{
                xs: '100%',
                md:'50%',
            }
        }}>
        <Title fontSize={64} text1={'About'} text2={'me'} />
        <Typography variant='subtitle2' padding='20px'
            sx={{
                width:'100%',
                fontSize:{
                    xs: '12px',
                    md:'14px',
                    
                }
            }}
        >
            Hi! I'm Yasmine Zein, a passionate front-end developer with a strong interest in crafting clean, responsive, and user-friendly web interfaces. I love bringing ideas to life using HTML, CSS, JavaScript, and modern UI libraries like Material UI.
            I've built several real-world projects ranging from landing pages and UI components to dynamic CRUD applications and animations. My portfolio showcases my ability to work with both creative design and technical precision.
            Whether it's a pricing card, a modern landing page, or interactive animations, I enjoy every step of the web development process — from wireframing to coding and deployment.
            I'm continuously learning and exploring new tools to improve my skills and deliver better user experiences.
        </Typography>
    </Stack>
    <Box>
    <Box component='img'
        src={AboutImg}
        sx={{
            display:'flex',
            justifyContent:'center',
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

export default About