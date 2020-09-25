import React, { useReducer } from 'react';
import { shoesReducer, cartReducer } from './Reducer';
let shoes = {
    "Nike Adapt Auto Max":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/deefc295-9a24-446b-92c9-3a1249a81f37/adapt-auto-max-mens-shoe-PqhFLq.jpg",
        price:50,
        quantity:10,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "LeBron 17":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/3baa4750-ee98-4bca-9034-22c7265b9e89/lebron-17-basketball-shoe-6LSXgh.jpg",
        price:200,
        quantity:30,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    "Nike Air Foamposite Pro":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/917b3c88-aa0b-4104-ac6f-1a9ae96aa49d/air-foamposite-pro-mens-shoe-74dxT0.jpg",
        price:70,
        quantity:50,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Nike Air Max 95 (Korea)":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/154d3e04-ddf1-4521-adda-8601df25f29a/air-max-95-korea-shoe-ZKTfcL.jpg",
        price:30,
        quantity:5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    "Nike Air Max 97":{
        image:"https://c.static-nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fjfip8ga1ep22vhxdcew/air-max-97-mens-shoe-SD3ZmW.jpg",
        price:65,
        quantity:15,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    "Nike Air VaporMax Flyknit 3":{
        image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2d55da64-947d-4594-9aaf-2701da1175a7/air-vapormax-flyknit-3-mens-shoe-JsWsB7.jpg",
        price:70,
        quantity:13,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    "Nike Air Max 90":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-4d71fcee-0ace-4ded-bd88-942650b866fa/air-max-90-mens-shoe-Zj7sqD.jpg",
        price:55,
        quantity:16,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
    "Nike AlphaDunk":{
        image:"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/rxw5wse2xkvfzyvilovy/alphadunk-basketball-shoe-PVlFH3.jpg",
        price:75,
        quantity:20,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    }
};
let cart = {};
export const context = React.createContext(shoes);
export const cartContext = React.createContext(cart);
export const ShoesProvider = ({children})=>{
    let [shoe, dispatch] = useReducer(shoesReducer, shoes);
    let [Cart, cartDispatch] = useReducer(cartReducer, cart);
    return(
        <context.Provider value={{shoes:shoe, dispatch}}>
            <cartContext.Provider value={{cart:Cart, cartDispatch}}>
                {children}
            </cartContext.Provider>
        </context.Provider>
    )
}