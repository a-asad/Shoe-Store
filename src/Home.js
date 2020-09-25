import React, { useContext } from 'react';
import {Grid, makeStyles, Paper, Button, Typography} from '@material-ui/core';
import bg from './homeBg.webp';
import './App.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { context, cartContext } from './Context';
import { Link } from 'react-router-dom';
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
export const Home = ()=>{
    const classes = useStyles();
    let {shoes, dispatch} = useContext(context);
    const {cartDispatch} = useContext(cartContext);
    function addToCart(itm)
    {
        cartDispatch({type:'add', item:itm, shoe:shoes[itm]})
        dispatch({type:'remove', item:itm});
    }
    const Shoes = Object.entries(shoes);
    return(
        <div>
           <img className={classes.bg} src={bg} alt='Home Background' style={{objectFit:'cover'}} width='100%' height='100%'/>
           <Grid container>
                <Grid container justify='center'>
                    <Grid item className={classes.marg}>
                    <Link style={{textDecoration:'none'}} to='products'><Button color='secondary' size='large' variant='contained'>
                        Visit Shop &nbsp;<ArrowForwardIcon/></Button></Link>
                    </Grid>
                </Grid>
            </Grid>
            <div style={{padding:'20px'}}>
                <Typography align='center' style={{borderRadius:30,color:'white', marginBottom:'10vh',padding:10, backgroundColor:'#242424'}} className={classes.marg} variant='h5'>Featured Products</Typography>
            <Grid container justify='center'  spacing={4} alignItems='center'>
                    <Grid item sm={4} md={3} xs={10}>
                        
                        <Paper className={classes.ppr}>
                        <Link to={`products/${Shoes[0][0]}`}>
                            <Paper className={'product'}>
                                <img className={classes.image} src={Shoes[0][1].image} alt={Shoes[0][0]} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{Shoes[0][0]}</Typography>
                                    <Typography variant='h6'>Price : ${Shoes[0][1].price}</Typography>
                                    <Typography variant='h6'>Remaining : {Shoes[0][1].quantity}</Typography>
                                </div>
                            </Paper>
                            </Link>
                            <Button className={classes.cartBtn} variant='contained' onClick={()=>{addToCart(Shoes[0][0])}}
                             color='secondary' disabled={Shoes[0][1].quantity === 0?true:false}>
                                 {Shoes[0][1].quantity === 0?'Out of Stock':'Add to Cart'}</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={3} xs={10}>
                    <Paper className={classes.ppr}>
                    <Link to={`products/${Shoes[1][0]}`}>
                            <Paper className={'product'}>
                                <img className={classes.image} src={Shoes[1][1].image} alt={Shoes[1][0]} width='100%'/>
                                <div className='additionals'>
                                    <Typography variant='h6'>{Shoes[1][0]}</Typography>
                                    <Typography variant='h6'>Price : ${Shoes[1][1].price}</Typography>
                                    <Typography variant='h6'>Remaining : {Shoes[1][1].quantity}</Typography>
                                </div>
                            </Paper>
                            </Link>
                            <Button className={classes.cartBtn} variant='contained' onClick={()=>{addToCart(Shoes[1][0])}} disabled={Shoes[1][1].quantity === 0?true:false}
                             color='secondary'>{Shoes[0][1].quantity === 0?'Out of Stock':'Add to Cart'}</Button>
                        </Paper>
                    </Grid>
                    <Grid item sm={4} md={3} xs={10}>
                        <Paper className={classes.ppr}>
                        <Link to={`products/${Shoes[2][0]}`}>
                                <Paper className={'product'}>
                                    <img className={classes.image} src={Shoes[2][1].image} alt={Shoes[2][0]} width='100%'/>
                                    <div className='additionals'>
                                        <Typography variant='h6'>{Shoes[2][0]}</Typography>
                                        <Typography variant='h6'>Price : ${Shoes[2][1].price}</Typography>
                                        <Typography variant='h6'>Remaining : {Shoes[2][1].quantity}</Typography>
                                    </div>
                                </Paper>
                                </Link>
                                <Button className={classes.cartBtn} variant='contained' onClick={()=>{addToCart(Shoes[2][0])}} disabled={Shoes[2][1].quantity === 0?true:false}
                                color='secondary'>{Shoes[0][1].quantity === 0?'Out of Stock':'Add to Cart'}</Button>
                            </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}