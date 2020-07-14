import React from 'react';
import { context } from './Context';
import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';

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

export const Products = ()=>{
    let {shoes} = React.useContext(context);
    const classes = useStyles();
    return(
        <div>
            <Outlet></Outlet>
        </div>
    )
}