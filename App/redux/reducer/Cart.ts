import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { CartAddResponseData } from '../../Models/E_shopModel';

interface CartState {
  cartData: Array<CartAddResponseData>;
  refress: boolean
}

const initialState: CartState = {
    cartData: [],
    refress: false
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initCart(state, action: PayloadAction<Array<CartAddResponseData>>) {
      state.cartData = action.payload;
    },
    addCart(state, action: PayloadAction<CartAddResponseData>){
        state.cartData = [...state.cartData, action.payload];
    },
    updateQty(state, action: PayloadAction<any>){
        console.log('payload',action.payload)
        let index = state.cartData.findIndex(it => it._id == action.payload.catId);
console.log(index);

        if(index >= 0){
            console.log('sfsf')
            state.cartData[index].qty = action.payload.qty
            state.refress = !state.refress
        }
    },
    deletedCart(state, action:PayloadAction<any>){
        state.cartData = state.cartData.filter((it)=>it._id != action.payload)
    },
    clearCart(state, action: PayloadAction<any>) {
      state.cartData = [];
    },
  },
});
export const {initCart, addCart, updateQty,deletedCart,clearCart} = CartSlice.actions;

export default CartSlice.reducer;
