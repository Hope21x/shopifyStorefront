import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "../../App";


export const getAllProducts = createAsyncThunk('shop/getAllProducts', async () => {
    const products = await client.product.fetchAll();
    return products;
})


const initialState = {
    products: [],
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [getAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },



    }

})

export default shopSlice.reducer;