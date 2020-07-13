import React from 'react';
import {Grid, makeStyles, Paper, Button, Typography} from '@material-ui/core';
import bg from './homeBg.jpg';
import fi from './frontItem.jpg'
import './App.css';
const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },
    bg:{
        position: "fixed",
        zIndex:-1,
        top:0,
    },
    marg:{
        marginTop:'35vh',
    },
    image:{
        borderRadius:'20px',
    }
  }));
export const Home = ()=>{
    const classes = useStyles();
    return(
        <div>
           <img className={classes.bg} src={bg} alt='Home Background' style={{objectFit:'cover'}} width='100%' height='100%'/>
           <Grid container>

                <Grid container justify='center'>
                    <Grid item className={classes.marg}>
                        <Button color='secondary' size='large' variant='contained'>Shop Now</Button>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{padding:'20px'}}>
            <Grid container justify='center' className={classes.marg} spacing={4} alignItems='center'>
                    <Grid item sm={3} xs={6}>
                        <Paper className={'product'}>
                            <img className={classes.image} src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-edc5bfbc-b097-494a-a7cb-d4f6c8afa5ca/air-vapormax-flyknit-3-usa-mens-shoe-SKwDlj.jpg' width='100%'/>
                            <Typography align='center' className='additionals'>Price</Typography>
                        </Paper>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Paper className={'product'}>
                            <img className={classes.image} src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be6750b3-14ac-4276-80d0-a9c47bdaec0f/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg' width='100%' />
                        </Paper>
                    </Grid>
                    <Grid item sm={3} xs={6}>
                        <Paper className={'product'}>
                            <img className={classes.image} src='https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/be6750b3-14ac-4276-80d0-a9c47bdaec0f/superrep-cycle-mens-indoor-cycling-shoe-bsXw1J.jpg' width='100%' />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}