import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { useMediaQuery } from '@mui/material';
import DrawerMobile from './DrawerMobile';
import ThemeSwitch from './ThemeSwitch';
import NavLink from './NavLink';

const Navbar = () => {

    const sm = useMediaQuery('(max-width:900px)');
    const theme = useTheme();
    const links = ['Home', 'About', 'Projects', 'Contact'];
  return (
    <Stack zIndex={5} position='fixed' width='100%' flexDirection={'row'} justifyContent={'space-between'} padding={'30px 40px'} alignItems={'center'} 
        sx={{
            backgroundColor: theme.palette.mode === 'dark' ? '#222831' : '#CECECE',
            boxShadow: '0 6px 12px -2px rgba(0, 173, 181, 0.3)',
        }}
    >
        <Typography fontSize={'24px'}  fontWeight={'bold'}
        sx={{color: theme.palette.mode === 'dark' ? '#CECECE' : '#222831',}}
        >YasmineZein</Typography>
        {sm ? 
            <Stack direction='row' justifyContent='center' alignItems='center'>
                <ThemeSwitch />
                <DrawerMobile />
            </Stack> 
            :
        <Stack direction={'row'}  justifyContent='center' alignItems='center'>
            <ThemeSwitch />
            {links.map((link) => (
                <NavLink text={link} />
            ))}
        </Stack>
    }
    </Stack>
  )
}

export default Navbar