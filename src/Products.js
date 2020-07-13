import React from 'react';
import { context } from './Context';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export const Products = ()=>{
    let {shoes} = React.useContext(context);
    const classes = useStyles();
    return(
        <div style={{marginTop:60, padding:20}}>
            Products
            <Grid container justify='center'  spacing={4} alignItems='center'>
            {Object.entries(shoes).map(([shoe,{image,price,quantity}])=>{
                return(
                    <Grid item sm={4} md={3} xs={10}  key={shoe}>
                        <Paper className={classes.ppr}>
                            <Paper className={'product'} elevation={4}>
                                <img className={classes.image} alt={shoe} src={image} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{shoe}</Typography><br/>
                                    <Typography variant='h6'>Price : ${price}</Typography><br/>
                                    <Typography variant='h6'>Remaining : {quantity}</Typography>
                                </div>
                            </Paper>
                            <Button className={classes.cartBtn} variant='contained' color='secondary'>Add to Cart</Button>
                        </Paper>
                    </Grid>
                )
            })}
             </Grid>
        </div>
    )
}