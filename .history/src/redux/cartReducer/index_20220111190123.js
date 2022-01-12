import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../App";

export const createCheckout = createAsyncThunk('cart/createCheckout', async () => {
    const checkout = await client.checkout.create();
    //localStorage.setItem('checkout_id', checkout.id);
    return checkout;
});

export const fetchCheckout = createAsyncThunk('cart/fetchCheckout', async (checkoutId) => {
    const checkout = await client.checkout.fetch(checkoutId) //action.payload here is the checkout id
    return checkout
});

export const getLineItems = createAsyncThunk('cart/addToCheckOut', async (checkoutIdLineItemsObj) => {
    const { checkoutId, lineItems } = checkoutIdLineItemsObj
    const checkout = client.checkout.addLineItems(checkoutId, lineItems)
    return checkout

})
export const removeLineItems = createAsyncThunk('cart/removeLineItems', async (removeLineItemsObj) => {
    const { checkoutId, id } = removeLineItemsObj
    console.log(id)
    const checkout = client.checkout.removeLineItems(checkoutId, id)
    return checkout

})



const initialState = {
    checkout: [],
    isCartOpen: false,
    checkoutId: null


}


export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleOpenCart: (state) => {
            state.isCartOpen = true
        },
        toggleCloseCart: (state) => {
            state.isCartOpen = false
        },



    }, 
    extraReducers: {
        [createCheckout.fulfilled]: (state, action) => {
            state.checkout = [action.payload]
            state.checkoutId = action.payload?.id 
        },
        [getLineItems.fulfilled]: (state, action) => {
            state.checkout = action.payload
        },
        [fetchCheckout.fulfilled]: (state, action) => {
            state.checkout = action.payload
        },
        [removeLineItems.fulfilled]: (state, action) => {
            state.checkout = action.payload
        }
        
    }

})

export const { toggleCloseCart, toggleOpenCart, addItemToCheckout, toggleCloseMenu, toggleOpenMenu } = cartSlice.actions


export default cartSlice.reducer