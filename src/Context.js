import React, { useReducer } from 'react';
import { shoesReducer } from './Reducer';
let shoes = {
    "shoe1":{
        name:"adidas",
        image:"sample"
    },
    "shoe2":{
        name:"adidas1",
        image:"sample2"
    }
    
};
export const context = React.createContext(shoes);
export const ShoesProvider = ({children})=>{
    let [shoe, dispatch] = useReducer(shoesReducer, shoes);
    return(
        <context.Provider value={{shoes:shoe, dispatch}}>
            {children}
        </context.Provider>
    )
}