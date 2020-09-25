import React from 'react';
import { Outlet } from 'react-router-dom';

export const Products = ()=>{
    return(
        <div style={{marginTop:60, padding:20}}>
            <Outlet></Outlet>
        </div>
    )
}