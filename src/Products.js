import React from 'react';
import { context } from './Context';

export const Products = ()=>{
    let {shoes} = React.useContext(context);
    console.log(Object.entries(shoes));
    return(
        <div>
            Products
            {Object.entries(shoes).map(([shoe,{name,image}])=>{
                return(
                    <div key={shoe}>
                        {name}{' '}{image}
                    </div>
                )
            })}
        </div>
    )
}