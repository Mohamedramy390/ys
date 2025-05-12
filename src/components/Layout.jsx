import { Stack, Box } from '@mui/material';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        maxWidth='100vw'
        sx={{
            overflowX:'hidden',
            width: '100%', 
            px: { xs: 2, sm: 4, md: 6 }
        }}
    >
        <Stack width='100%'  spacing={2} oxSizing="border-box"
        sx={{
            padding:{
                xs: '0px 50px',
                sm:'0px 100px'
            },
            overflowX:'hidden'
        }}
        >
            {children}
        </Stack>
    </Box>
  );
};

export default Layout;
