import { Button } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

const Btn = ({text, bcolor, isActive = false, type, onClick = {}, to = ''}) => {

    if(type === 'static'){
    return (
        <Button  variant="contained"  to={`${to ? to : ''}`} component={RouterLink} onClick={onClick?onClick:{}}
        sx={{padding:'10px 20px', borderRadius:'20px', fontSize:{xs:'8px',sm:'12px' ,md:'16px'},
            backgroundColor:bcolor, fontWeight:'bold', color:'white', marginRight:'20px',
            '&:hover': {
            backgroundColor: bcolor == '#00ADB5' ? '#393E46' : '#00ADB5', 
    },
            }}>{text}</Button>
        )
    }else if(type === 'submit'){
        return (
            <Button  variant="contained"  type={type}
            sx={{padding:'10px 20px', borderRadius:'20px', fontSize:{xs:'8px',sm:'12px' ,md:'16px'},
                backgroundColor:bcolor, fontWeight:'bold', color:'white', marginRight:'20px',
                '&:hover': {
                backgroundColor: bcolor == '#00ADB5' ? '#393E46' : '#00ADB5', 
        },
                }}>{text}</Button>
            )
    }
    else{
        return (
            <Button  variant="contained" onClick={onClick} to={to}
            sx={{padding:'10px 20px', borderRadius:'20px', fontSize:{xs:'8px',sm:'12px' ,md:'16px'},
                backgroundColor:isActive ? '#00ADB5': bcolor, fontWeight:'bold', color:'white', marginRight:'20px'}}>{text}</Button>
        )
    }
}

export default Btn