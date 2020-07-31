import React, { useContext } from 'react';
import { Typography, Grid, makeStyles, Paper, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { cartContext, context } from './Context';
import { Link } from 'react-router-dom';
import './App.css';
const useStyles = makeStyles((theme) => ({
    image:{
        height:'100%',
    },
    cartBtn:{
        width:'100%',
        position:'absolute',
        left:0,
        bottom:0,
    },
    ppr:{
        padding:10,
    },
    noDecor:{
        justifySelf:'end',
    }
  }));

export const Cart = ()=>{
    const {cart, cartDispatch} = useContext(cartContext);
    let {shoes,dispatch} = useContext(context);
    const classes = useStyles();
    function removeFromCart(itm)
    {
        cartDispatch({type:'remove', item:itm, shoe:shoes[itm]})
        dispatch({type:'add', item:itm});
    }
    function addToCart(itm)
    {
        cartDispatch({type:'add', item:itm, shoe:shoes[itm]})
        dispatch({type:'remove', item:itm});
    }

    function itemCount()
    {
        let count=0;
        for(let i in cart)
        {
        if(cart[i].quantity > 0)
            count++;
        }
        return count;
    }
    function getTotal()
    {
        let total=0;
        for(let i in cart)
            total += cart[i].quantity*cart[i].price;
        return total;
    }

    return(
        <div style={{marginTop:60, padding:20, minHeight:'80vh'}}>
            <Typography align='center' variant='h4' style={{marginBottom:'10vh'}}>Cart</Typography>
            <Grid container justify='center'  spacing={4} alignItems='center'>
                {itemCount() === 0? 'No items added yet!':
                <>
                <Grid item sm={10}> <Typography align='center' variant='h5'>Total: ${getTotal()}</Typography></Grid>
                {Object.entries(cart).map(([shoe,{image,price,quantity}])=>{
                    if(quantity > 0){
                        return(
                            <Grid item sm={10} md={8} xs={11} key={shoe}>
                                    <Paper elevation={4} className={classes.ppr}>
                                        <Grid container spacing={3}>
                                            <Grid item md={2} sm={3}>
                                                <Link to={`/products/${shoe}`}>
                                                    <img alt={shoe} src={image} width='100%'/>
                                                </Link>
                                            </Grid>
                                            <Grid item md={6} sm={4} xs={6}>
                                                <Typography variant='h6'>{shoe}</Typography>
                                                <Typography variant='h6'>Price : ${price*quantity}</Typography>
                                                <Typography variant='h6'>Quantity : {quantity}</Typography>
                                            </Grid>
                                            <Grid item md={4} sm={5} xs={6} container alignItems='flex-end' justify='center' direction='column'>
                                                <Button variant='outlined' color='primary' onClick={()=>{addToCart(shoe)}} disabled={shoes[shoe].quantity === 0?true:false}>
                                                    <AddIcon/></Button><br/>
                                                <Button variant='outlined' color='secondary' onClick={()=>{removeFromCart(shoe)}}><RemoveIcon/></Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                            </Grid>
                        )
                    }
                    return null
                })}</>}
            </Grid>
        </div>
    )
}