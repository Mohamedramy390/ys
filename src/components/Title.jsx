import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ fontSize ,text1, text2}) => {
  return (
    <Typography justifyContent='center' alignItems='center'
    fontSize={{md:fontSize-20, lg: fontSize, sm:fontSize-30, xs: fontSize-40}} lineHeight={1.1} fontWeight='bold'>
        {text1} <span style={{color:'#00ADB5'}}>{text2}</span>
    </Typography>
  )
}

export default Title