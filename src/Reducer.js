export const shoesReducer = (state,action)=>{
    switch(action.type)
    {
        case "add":
            return {...state, [action.item]:{...state[action.item], quantity:state[action.item].quantity+1}}
        case "remove":
            return {...state, [action.item]:{...state[action.item], quantity:state[action.item].quantity-1}}
        default:
            return state
    }
}

export const cartReducer = (state,action)=>{
    switch(action.type)
    {
        case "add":
            return {...state, [action.item]:{...action.shoe, quantity:(state[action.item]?state[action.item].quantity:0)+1}}
        case "remove":
            return {...state, [action.item]:{...state[action.item], quantity:state[action.item].quantity-1}}
        default:
            return state
    }
}