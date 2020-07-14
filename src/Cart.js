import React, { useContext } from 'react';
import { Typography, Grid, makeStyles, Paper } from '@material-ui/core';
import { cartContext } from './Context';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    image:{
        borderRadius:'10px',
    },
    cartBtn:{
        width:'100%',
        position:'absolute',
        left:0,
        bottom:0,
    },
    ppr:{
        position:'relative',
        borderRadius:'10px',
    }
  }));

export const Cart = ()=>{
    const {cart} = useContext(cartContext);
    const classes = useStyles();
    return(
        <div style={{marginTop:60, padding:20}}>
            <Typography align='center' variant='h4' style={{marginBottom:'10vh'}}>Cart</Typography>
            <Grid container justify='center'  spacing={4} alignItems='center'>
                {Object.entries(cart).map(([shoe,{image,price,quantity}])=>{
                    return(
                        <Grid item sm={4} md={3} xs={10}  key={shoe}>
                            <Paper className={classes.ppr}>
                            <Link to={`/products/${shoe}`}>
                                <Paper className={'product'} elevation={4}>
                                    <img className={classes.image} alt={shoe} src={image} width='100%'/>
                                    <div className='additionals'>
                                        <Typography variant='h6'>{shoe}</Typography><br/>
                                        <Typography variant='h6'>Price : ${price}</Typography><br/>
                                        <Typography variant='h6'>Remaining : {quantity}</Typography>
                                    </div>
                                </Paper>
                                </Link>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}