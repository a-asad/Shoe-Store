import React from 'react';
import {Grid, makeStyles, Paper, Button, Typography} from '@material-ui/core';
import bg from './homeBg.jpg';
import fi from './frontItem.jpg'
import './App.css';
import { context } from './Context';
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
        marginTop:'40vh',
    },
    image:{
        borderRadius:'20px',
    },
    cartBtn:{
        width:'100%',
        position:'absolute',
        left:0,
        bottom:0,
    },
    ppr:{
        position:'relative',
        borderRadius:'20px',
    }
  }));
export const Home = ()=>{
    const classes = useStyles();
    let {shoes} = React.useContext(context);
    shoes = Object.entries(shoes);
    console.log(shoes);
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
                <Typography align='center' style={{borderRadius:30,color:'white', marginBottom:'10vh',padding:10, backgroundColor:'#242424'}} className={classes.marg} variant='h5'>Featured Products</Typography>
            <Grid container justify='center'  spacing={4} alignItems='center'>
                    <Grid item sm={4} md={3} xs={10}>
                        <Paper className={classes.ppr}>
                            <Paper className={'product'}>
                                <img className={classes.image} src={shoes[0][1].image} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{shoes[0][0]}</Typography>
                                    <Typography variant='h6'>Price : ${shoes[0][1].price}</Typography>
                                    <Typography variant='h6'>Remaining : ${shoes[0][1].quantity}</Typography>
                                </div>
                            </Paper>
                            <Button className={classes.cartBtn} variant='contained' color='secondary'>Add to Cart</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={3} xs={10}>
                    <Paper className={classes.ppr}>
                            <Paper className={'product'}>
                                <img className={classes.image} src={shoes[1][1].image} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{shoes[1][0]}</Typography>
                                    <Typography variant='h6'>Price : ${shoes[1][1].price}</Typography>
                                    <Typography variant='h6'>Remaining : ${shoes[1][1].quantity}</Typography>
                                </div>
                            </Paper>
                            <Button className={classes.cartBtn} variant='contained' color='secondary'>Add to Cart</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={3} xs={10}>
                        <Paper className={classes.ppr}>
                                <Paper className={'product'}>
                                    <img className={classes.image} src={shoes[2][1].image} width='100%'/>
                                    <div className='additionals'>
                                        <Typography variant='h6'>{shoes[2][0]}</Typography>
                                        <Typography variant='h6'>Price : ${shoes[2][1].price}</Typography>
                                        <Typography variant='h6'>Remaining : ${shoes[2][1].quantity}</Typography>
                                    </div>
                                </Paper>
                                <Button className={classes.cartBtn} variant='contained' color='secondary'>Add to Cart</Button>
                            </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}