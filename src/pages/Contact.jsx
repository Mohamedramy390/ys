import React from 'react'
import Formbg from '.././assets/Group 2376.png'
import './contact.css'
import Layout from '../components/Layout'
import Form from '../components/Form'
import { Box, Stack } from '@mui/material'
import Title from '../components/Title'
import ContactImg from '.././assets/Group 2372.png'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Contact = ({sectionRef}) => {
  return (
   <Layout>
   <motion.div
   initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
   viewport={{ once: true ,amount: 0.5}}
   transition={{ duration: 0.5 }}
   >
    <Stack ref={sectionRef} id='contact' direction='row' minHeight='1024px' justifyContent='space-between' alignContent='center' flexWrap='wrap' 
        sx={{
            backgroundImage: `url(${Formbg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'1000px'
        }}>
        <Stack sx={{
            alignItems:'center',
            width:{
                xs:'100%',
                sm:'200px',
                md: '400px'
            }
        }}>
            <Title text1={'Get a project in'} text2={'mind?'} fontSize={64} />
            <Box my={2} component='img' src={ContactImg} 
                sx={{
                    width:{
                        xs:'30%',
                        sm:'50%'
                    },
                    marginLeft:{
                        xs: '0',
                        sm:'auto'
                    },
                }}
            />
        </Stack>
        <Form />
    </Stack>
    </motion.div>
   </Layout>
  )
}

export default Contact
