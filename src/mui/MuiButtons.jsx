import { Button, Fab, IconButton } from '@mui/material'
import React from 'react'
import ParkIcon from '@mui/icons-material/Park';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import BackHandIcon from '@mui/icons-material/BackHand';

export const MuiButtons = () => {
  return (
    <div>
        <Button variant='text' color='primary' size="small">TEST</Button>
        <Button variant='contained' color='secondary' size="medium">TEST</Button>
        <Button variant='outlined' color='success' size='large'>TEST</Button>

        <Button variant='contained' startIcon={<ParkIcon/>}>PARK</Button>
        <Button variant='contained' endIcon={<ParkIcon/>}>PARK</Button>

        <IconButton color='primary' size='small'>
            <FingerprintIcon/>
        </IconButton>
        <Fab color='secondary' size='medium'>
            <BackHandIcon/>
        </Fab>
        <Button variant='contained' sx={{backgroundColor:"#96C4D8",height:"60px"}}>TEST</Button>
    </div>
  )
}
