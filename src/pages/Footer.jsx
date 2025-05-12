import { Stack } from '@mui/material'
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FooterLink from '../components/FooterLink';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const icons = [
    {
      icon : GitHubIcon,
      link: 'https://github.com/YasmineZein'
    }, 
    {
      icon :LinkedInIcon,
      link: 'https://www.linkedin.com/in/yasmine-zeineldin-3a6104285/'
    },
    {
      icon :WhatsAppIcon,
      link: ''
    }
  ]
  return (
    <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={5} minHeight={'200px'}>
        {icons.map((item, idx) => (
          <FooterLink key={idx} to={item.link} icon={item.icon} />
        ))}
    </Stack>
  )
}

export default Footer