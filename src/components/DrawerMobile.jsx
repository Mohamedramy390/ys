import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Stack } from '@mui/material';
import { HashLink } from 'react-router-hash-link';
import MenuIcon from '@mui/icons-material/Menu';

export default function DrawerMobile() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      <Stack  gap={2} sx={{backgroundColor:'rgba(57, 62, 70, 0.5)', padding:'10px'}} direction='column'>
            <HashLink style={{
                textDecoration : 'none',
                color:'#CECECE',
                marginRight:'20px'
            }} smooth to='/'>Home</HashLink>
            <HashLink style={{
                textDecoration : 'none',
                color:'#CECECE',
                marginRight:'20px'
            }} smooth to='#about'>About</HashLink>
            <HashLink style={{
                textDecoration : 'none',
                color:'#CECECE',
                marginRight:'20px'
            }} smooth to='#projects'>Projects</HashLink>
            <HashLink style={{
                textDecoration : 'none',
                color:'#CECECE',
                marginRight:'20px'
            }} smooth to='#contact'>Contact</HashLink>
        </Stack>
      </Menu>
    </Stack>
  );
}
