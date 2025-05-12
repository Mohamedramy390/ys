import { Stack, Typography } from '@mui/material'
import React from 'react'
import Carousel from '../components/Carousel'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import projects from '.././projects'
import Btn from '../components/Btn'

const ProjectDetail = () => {
  const {id} = useParams()
    const project = projects.find(item => item.id == id)
    const {photos, description, github_repo_link, live_preview_link} = project

    
  return (
    <Layout>
      <Stack minHeight='1024' paddingTop={'150px'} justifyContent='center' alignItems='center'>
      <Carousel photos={photos} />
      <Stack my={2} direction='row'>
        <Btn to={github_repo_link} text={'Github repo'} bcolor={'#00ADB5'} type='static' />
        <Btn to={live_preview_link} text={'Preview'} bcolor={'#00ADB5'} type='static' />
      </Stack>
      <Typography
        sx={{
          padding:'30px 0',
          fontSize:'20px'
        }}
      >{description}</Typography>
      </Stack>
    </Layout>
  )
}

export default ProjectDetail