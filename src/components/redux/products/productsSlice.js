import {createSlice} from '@reduxjs/toolkit'
import { products } from '../../Data/ProductsData';
import { TotalProducts } from '../../Data/ProductsData';

const INITIAL_STATE = {
    products: products,
    totalProducts: TotalProducts,

};


export const productsSlice = createSlice({

    name: 'products',
    initialState: INITIAL_STATE,
    reducers:{
        getProducts: state =>{
            return state;
        },
    },


},)

export const {getProducts} = productsSlice.actions;
export default productsSlice.reducer;