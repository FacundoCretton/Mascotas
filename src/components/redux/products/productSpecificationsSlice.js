import { createSlice } from '@reduxjs/toolkit';
import { productsSpecifications } from '../../Data/especificacionesProductos';

const INITIAL_STATE = {
    especifications: productsSpecifications,
};

export const productSpecificationsSlice = createSlice({
    name: 'productSpecifications',
    initialState: INITIAL_STATE,
    reducers:{
        getEspecifications: state =>{
            return state;
        },
    }



});

export const {getEspecifications} = productSpecificationsSlice.actions;
export default productSpecificationsSlice.reducer;