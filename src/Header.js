import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { cartContext } from './Context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'#111',
    height:60,
  },
  link:{
      textDecoration:'none',
      color: 'white',
  },
  innerBar:{
      flexGrow:1,
      display:'flex',
      justifyContent:'center',
  },
  cart:{
    alignSelf:'center',
    textDecoration:'none',
      color: 'white',
      marginRight:5,
  }
}));

function TopAppBar() {
  const classes = useStyles();
  const {cart} = useContext(cartContext);

  function itemCount()
  {
    let count=0;
    for(let i in cart)
    {
        count+=cart[i].quantity;
    }
    return count;
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
          <div className={classes.innerBar}>
          <Button><Link to='/' className={classes.link}>Home</Link></Button>
            <Button><Link to='products' className={classes.link}>Products</Link></Button>
          </div>
          <Link to='cart' className={classes.cart}><ShoppingCartIcon/>{itemCount()}</Link>
      </AppBar>
    </div>
  );
}
export default TopAppBar;