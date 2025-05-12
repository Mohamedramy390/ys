import { Stack } from '@mui/material'
import React, { useState } from 'react'
import Title from '../components/Title'
import Btn from '../components/Btn'
import WorkImg from '.././assets/doodle items.png'
import projects from '../projects'
import ProjectCard from '../components/ProjectCard'
import Layout from '../components/Layout'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Work = () => {

    const [activeBtn, setActiveBtn] = useState("All");
    
    const filteredProjects = activeBtn === 'All'
    ? projects
    : projects.filter(project => project.isRecent);

    const buttons = ["All", "Recent"]
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true ,amount: 0.1}}
    transition={{ duration: 0.5 }}
    >
    <Stack id='projects' direction='column' flexWrap={'wrap'} alignItems='start' justifyContent='center'
        sx={{
            backgroundImage: `url(${WorkImg})`,
            backgroundRepeat: 'repeat',
            padding:'80px 0',
            minHeight: { xs: 'auto', md: '1024px' }
        }}
    >
    <Layout>
        <Title fontSize={64} text1={'My recent'} text2={'works'} />
        <Stack direction='row' padding='20px 0'>
            {buttons.map((btnText) => (
                <Btn 
                    key={btnText}
                    text={btnText} 
                    bcolor='#393E46'
                    isActive={btnText == activeBtn}
                    onClick={() => setActiveBtn(btnText)}
                    type='dy'
                />
            ))}
        </Stack>
        <Stack
            direction='row'
            flexWrap='wrap'
            padding='60px 0'
            gap={2}
            justifyContent='center'
            alignItems='center'

            >
            {filteredProjects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
            ))}
        </Stack>
        </Layout>
    </Stack>
    </motion.div>
  )
}

export default Work