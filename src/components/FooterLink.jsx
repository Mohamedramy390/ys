import { useTheme } from '@emotion/react'
import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({to, icon: Icon}) => {

  const theme = useTheme()
  return (
    <Link to={to} 
      style={{
        textDecoration:'none',
        color: theme.palette.mode === 'dark' ? '#CECECE' : '#222831',
      }}
    >
      <Icon fontSize="large"/>
    </Link>
  )
}

export default FooterLink