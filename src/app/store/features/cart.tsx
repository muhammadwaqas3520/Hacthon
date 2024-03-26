import { Cart } from '@/app/utils/types'
import CartCard from '@/components/cartCard'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CounterState {
  value: number
}

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // add to cart funtion from uuid

    addToCart(state,action){

      let uuid = Math.floor(1000+Math.random()*9000)
    let newObject = {...action.payload,uuid}
  state.push(newObject);  
  },
//  Delete from cart from uuid 
 delItem(state,{payload}){
  return state.filter((val)=>val.uuid!==payload)
 },

// addition of item in the CartCard
additionCart(state,action){
  let obj=state.find(
    (val)=>
    val.id==action.payload.id && 
    val.size==action.payload.size && 
    val.color==action.payload.color);
    if(obj) {
      ++obj.qty
    let newState = state.filter ((val) => val.id !== obj?.id);
  state=  [...newState,obj];
  return;  
  }

 },
//  subtraction of items from cartcard
subtractCart(state,action){
  let obj=state.find(
    (val)=>
    val.id==action.payload.id && 
    val.size==action.payload.size && 
    val.color==action.payload.color
    );
    if(obj !== undefined){
      if(obj.qty<=1){
     return  state.filter ((val) => val.uuid!== obj?.uuid)
    }
      --obj.qty;
     let newState = state.filter ((val) => val.uuid == obj?.uuid)
        state=  [...newState,obj];
      return;
    }
       
  },
},
});

export const {addToCart, delItem, subtractCart,additionCart} = cartSlice.actions



export default cartSlice.reducer