import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export const Footer = ()=>{
    return(
        <Grid container  justify='center' style={{position:'relative', bottom:0,marginTop:10, backgroundColor:'#333',color:'white'}}>
            <Grid item>
                <Typography variant='h6'>Project Made By Abdurrahman Asad </Typography>
            </Grid>
        </Grid>
    )
}