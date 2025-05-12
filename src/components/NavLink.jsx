import { useTheme } from '@emotion/react'
import React from 'react'
import { HashLink } from 'react-router-hash-link'

const NavLink = ({text}) => {

    const theme = useTheme();
  return (
    <HashLink style={{
        textDecoration : 'none',
        color: theme.palette.mode === 'dark' ? '#CECECE' : '#222831',
        marginRight:'20px'
    }} smooth to={`${text === 'Home'? '/' : `#${text.toLowerCase()}`}`}>{text}</HashLink>
  )
}

export default NavLink