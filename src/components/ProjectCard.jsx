import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const ProjectCard = ({project}) => {

    const {title, thumbnail, id} = project;
  return (
    <Link to={`project/${id}`} style={{textDecoration:'none'}}>
      <Card sx=
      {{ width: '300px',
        maxWidth: 345, 
        marginRight: '20px', 
        backgroundColor: 'rgba(57, 62, 70, 0.5)', 
        boxShadow:'none',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}>
      <CardMedia
        sx={{ height: 150 , width:'100%'}}
        image={`${thumbnail}`}
        title="green iguana"
      />
      <CardContent>
        <Typography  variant='subtitle1' component="div">
          {title}
        </Typography>
      </CardContent>
    </Card>
    </Link>
  )
}

export default ProjectCard