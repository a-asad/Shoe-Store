import React, { useContext } from 'react';
import { context, cartContext } from './Context';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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

export const AllProducts = ()=>{
    let {shoes,dispatch} = useContext(context);
    const {cartDispatch} = useContext(cartContext);
    const classes = useStyles();
    function addToCart(itm)
    {
        cartDispatch({type:'add', item:itm, shoe:shoes[itm]})
        dispatch({type:'remove', item:itm});
    }
    return(
        <div style={{minHeight:'80vh'}}>
            <Typography align='center' variant='h4' style={{marginBottom:'10vh'}}>All Products</Typography>
            <Grid container justify='center'  spacing={4} alignItems='center'>
            {Object.entries(shoes).map(([shoe,{image,price,quantity}])=>{
                return(
                    <Grid item sm={4} md={3} xs={10}  key={shoe}>
                        <Paper className={classes.ppr}>
                        <Link to={`/products/${shoe}`}>
                            <Paper className={'product'} elevation={4}>
                                <img className={classes.image} alt={shoe} src={image} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{shoe}</Typography>
                                    <Typography variant='h6'>Price : ${price}</Typography>
                                    <Typography variant='h6'>Remaining : {quantity}</Typography>
                                </div>
                            </Paper>
                            </Link>
                            <Button className={classes.cartBtn} variant='contained' onClick={()=>{addToCart(shoe)}} disabled={quantity === 0?true:false}
                             color='secondary'>{quantity === 0?'Out of Stock':'Add to Cart'}</Button>
                        </Paper>
                    </Grid>
                )
            })}
             </Grid>
        </div>
    )
}